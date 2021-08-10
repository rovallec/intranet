import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined, isUndefined, isNull } from 'util';
import { ApiServiceService } from '../api-service.service';
import { attendences, attendences_adjustment, disciplinary_processes, employees, leaves, periods, terminations, vacations, vacyear } from '../collection';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.css']
})

export class ApprovalRequestComponent implements OnInit {
  employee: employees = new employees;
  id_profile: string = '';
  user: Users = new Users;
  workingEmployee: employees = new employees;
  //showAttAdjustments: attendences_adjustment[] = [];
  showVacations: vacations[] = [];
  showAttendences: attendences[] = [new attendences];
  leaves: leaves[] = [];
  showAttAdjustments: attendences_adjustment[] = [];
  vac: vacyear[] = [];
  attAdjudjment: attendences_adjustment = new attendences_adjustment;
  activeEmp: string = null;
  complete_adjustment: boolean = false;
  addJ: boolean = false;
  editAdj: boolean = false;
  viewRecProd: boolean = false;
  editLeave: boolean = false;
  vacationAdd: boolean = false;
  addProc: boolean = false;
  earnVacations: number = 0;
  tookVacations: number = 0;
  availableVacations: number = 0;
  returnedVacations: number = 0;
  dismissedVacations: number = 0;
  todayDate: string = new Date().getFullYear().toString() + "-" + (new Date().getMonth() + 1).toString().padStart(2, "0") + "-" + (new Date().getDate()).toString().padStart(2, "0");

  constructor(public apiService: ApiServiceService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.user = this.apiService.user;
  }

  start() {
    
  }

  getEmployee() {
    this.apiService.getEmployees({id: this.user.id_profile}).subscribe((emp: employees) => {
      this.employee = emp;
    });
  }

  getAttendences(dt: string) {
    let actualPeriod: periods;
    this.apiService.getPeriods().subscribe((pr: periods[]) => {
      pr.forEach(per => {
        if (new Date(per.start).getTime() <= new Date(dt).getTime() && new Date(per.end).getTime() >= new Date(dt).getTime()) {
          actualPeriod = per;
        }
      })
      this.apiService.getAttendences({ id: this.route.snapshot.paramMap.get('id'), date: "<= '" + dt + "'" }).subscribe((att: attendences[]) => {
        this.apiService.getVacations({ id: this.workingEmployee.id_profile }).subscribe((vac: vacations[]) => {
          this.apiService.getLeaves({ id: this.workingEmployee.id_profile }).subscribe((leave: leaves[]) => {
            this.apiService.getDPAtt({ id: this.workingEmployee.idemployees, date_1: actualPeriod.start, date_2: actualPeriod.end }).subscribe((dp: disciplinary_processes[]) => {
              this.apiService.getTermdt(this.workingEmployee).subscribe((trm: terminations) => {
                this.showAttendences = att;

                this.showAttendences.forEach(atte => {
                  let valid_trm: boolean = false;
                  let activeSuspension: boolean = false;
                  let activeVacation: boolean = false;
                  let activeLeave: boolean = false;
                  let mother_father_day: boolean = false;

                  if (!(trm.valid_from)) {
                    if (new Date(trm.valid_from).getTime() <= new Date(atte.date).getTime()) {
                      valid_trm = true;
                      atte.balance = 'TERM';
                    }
                  }

                  if (!valid_trm) {
                    dp.forEach(disciplinary_process => {
                      if (!activeSuspension && disciplinary_process.day_1 == atte.date || disciplinary_process.day_2 == atte.date || disciplinary_process.day_3 == atte.date || disciplinary_process.day_4 == atte.date) {
                        activeSuspension = true;
                        atte.balance = 'SUSPENSION';
                      }
                    })
                  }

                  if (!activeSuspension) {
                    vac.forEach(vacation => {
                      if (!activeVacation && vacation.status != "COMPLETED" && vacation.status != 'DISMISSED' && vacation.took_date == atte.date && vacation.action == "Take") {
                        activeVacation = true;
                        atte.balance = 'VAC';
                        if (Number(vacation.count) < 1) {
                          if (atte.scheduled != "OFF") {
                            atte.worked_time = (Number(atte.worked_time) + (Number(atte.scheduled) * Number(vacation.count))).toFixed(5);
                            atte.balance = (Number(atte.worked_time) - Number(atte.scheduled)).toFixed(3);
                          }
                        }
                      }
                    })
                  }

                  if (!activeSuspension && !activeVacation) {
                    leave.forEach(lv => {
                      if (!activeLeave && lv.status != "COMPLETED" && lv.status != 'DISMISSED' && (new Date(lv.start).getTime()) <= (new Date(atte.date).getTime()) && (new Date(lv.end).getTime()) >= (new Date(atte.date).getTime())) {
                        activeLeave = true;
                        if (lv.motive == 'Leave of Absence Unpaid') {
                          atte.balance = 'LOA';
                        }
                        if (lv.motive == 'Others Unpaid' || lv.motive == "IGSS Unpaid" || lv.motive == "VTO Unpaid" || lv.motive == "COVID Unpaid") {
                          atte.balance = 'JANP';
                        }
                        if (lv.motive == 'Maternity' || lv.motive == 'Others Paid' || lv.motive == "COVID Paid" || lv.motive == "IGSS Paid") {
                          atte.balance = 'JAP';
                        }
                      }
                    })
                  }
                  if (!activeVacation && !activeSuspension && !activeLeave) {
                    if (atte.scheduled == "OFF") {
                      atte.balance = "OFF";
                    } else {
                      if (!(this.workingEmployee.children) && !(this.workingEmployee.gender)) {
                        if (Number(this.workingEmployee.children) > 0) {
                          if (this.workingEmployee.gender == 'Femenino') {
                            if (atte.date == (new Date().getFullYear() + "-05-10")) {
                              mother_father_day = true;
                              atte.balance = "HLD";
                            }
                          }
                        }
                      }
                      if (atte.date != (new Date().getFullYear() + "-01-01") && atte.date != (new Date().getFullYear() + "-06-28") && atte.date != (new Date().getFullYear() + "-04-01") && atte.date != (new Date().getFullYear() + "-04-02") && atte.date != (new Date().getFullYear() + "-04-03") && atte.date != (new Date().getFullYear() + "-05-01") && !mother_father_day) {
                        if (Number(atte.scheduled) > 0) {
                          if (Number(atte.worked_time) == 0) {
                            atte.balance = "NS";
                          } else {
                            atte.balance = (Number(atte.worked_time) - Number(atte.scheduled)).toString();
                          }
                        }
                      } else {
                        if (atte.scheduled != "OFF") {
                          if (Number(atte.worked_time) > Number(atte.scheduled)) {
                            atte.balance = (Number(atte.worked_time) - Number(atte.scheduled)).toFixed(2);
                          } else {
                            if (Number(atte.worked_time) > 0) {
                              atte.balance = 'HLD';
                            } else {
                              atte.balance = 'HLD';
                            }
                          }
                        }
                      }
                    }
                  }

                  if (this.complete_adjustment == true) {
                    if (this.attAdjudjment.id_attendence == atte.idattendences) {
                      this.complete_adjustment = false;
                      if (this.attAdjudjment.time_after == atte.worked_time) {
                        window.alert("Adjustment successfuly recorded");
                      } else {
                        window.alert("Adjustment not applyed correctly please try again or contact your administrator");
                      }
                    }
                  }
                })
                this.getAttAdjustemt();
              })
            })
          })
        })
      })
    });
    this.addJ = false;
    this.editAdj = false;
  }

  getAttAdjustemt() {
    this.editAdj = false;
    this.apiService.getAttAdjustments({ id: this.activeEmp }).subscribe((adj: attendences_adjustment[]) => {
      
      this.showAttAdjustments = [];
      if (adj.length >= 16) {
        for (let i = (adj.length - 1); i > (adj.length - 16); i = i - 1) {
          if (adj[i].id_department == '5' || adj[i].id_department == '27') {
            this.showAttAdjustments.push(adj[i]);
          }
        }
      } else {
        adj.forEach(ev => {
          if (ev.id_department == '27' || ev.id_department == '5') {
            this.showAttAdjustments.push(ev);
          }
        })
      }
      this.showAttendences.forEach(chng=>{
        if((chng.igss)){
          chng.igss = '0';
        }
        if((chng.tk_exp)){
          chng.tk_exp = '0';
        }
      })
      adj.forEach(at_adj=>{
        this.showAttendences.forEach(att_show=>{
          if(att_show.date == at_adj.attendance_date && (at_adj.id_department == '5' || at_adj.id_department == '27')){
            att_show.igss = (Number(att_show.igss) + Number(at_adj.amount)).toFixed(2);
          }else if(att_show.date == at_adj.attendance_date && at_adj.id_department == '28'){
            att_show.tk_exp = (Number(att_show.tk_exp) + Number(at_adj.amount)).toFixed(2);
          }
        })
      })
    })
  }

}

