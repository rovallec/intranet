import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ApiServiceService } from '../api-service.service';
import { attendences, attendences_adjustment, disciplinary_processes, employees, leaves, periods, terminations, vacations, vacyear, leavesAction } from '../collection';
import { Users } from '../users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approval-request',
  templateUrl: './approval-request.component.html',
  styleUrls: ['./approval-request.component.css']
})

export class ApprovalRequestComponent implements OnInit {
  id_profile: string = '';
  user: Users = new Users;
  workingEmployee: employees = new employees;
  showAttAdjustments: attendences_adjustment[] = [];
  showVacations: vacations[] = [];
  showAttendences: attendences[] = [new attendences];
  leaves: leaves[] = [];
  vac: vacyear[] = [];
  leaveDates: leavesAction[] = [];
  approvals: Users[] = [new Users];
  attAdjudjment: attendences_adjustment = new attendences_adjustment;
  activeLeave: leaves = new leaves;
  activeVacation: vacations = new vacations;
  activeEmp: string = null;
  complete_adjustment: boolean = false;
  addJ: boolean = false;
  editAdj: boolean = false;
  viewRecProd: boolean = false;
  editLeave: boolean = false;
  showLeave: boolean = false;
  vacationAdd: boolean = false;
  addProc: boolean = false;
  editVac: boolean = true;
  currentPayVacations: boolean = false;
  earnVacations: number = 0;
  tookVacations: number = 0;
  availableVacations: number = 0;
  returnedVacations: number = 0;
  dismissedVacations: number = 0;
  vacationsEarned: number = 0;
  todayDate: string = new Date().getFullYear().toString() + "-" + (new Date().getMonth() + 1).toString().padStart(2, "0") + "-" + (new Date().getDate()).toString().padStart(2, "0");
  motives: string[] = ['Leave of Absence Unpaid', 'Maternity', 'Others Paid', 'Others Unpaid', 'IGSS Unpaid', 'VTO Unpaid', 'COVID Unpaid', 'COVID Paid', 'IGSS Paid'];

  constructor(public apiService: ApiServiceService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.user = this.apiService.user;
    this.start();
  }

  start() {
    this.apiService.getApprovers().subscribe((usrs: Users[]) => {
      this.approvals = usrs;
      this.getEmployee();
    });
  }

  addDays(fecha: Date, days: number): Date {
    fecha.setDate(fecha.getDate() + days);
    return fecha;
  }

  getEmployee() {
    let fecha: string = '2021-08-23';
    this.apiService.getEmployees({id: this.user.id_profile}).subscribe((emp: employees) => {
      this.workingEmployee = emp;
      this.activeEmp = emp.id_profile;
      this.vacationsEarned = (new Date(this.todayDate).getMonth() - new Date(this.workingEmployee.hiring_date).getMonth() + ((new Date(this.todayDate).getFullYear() - new Date(this.workingEmployee.hiring_date).getFullYear()) * 12));
      this.getVacations();
      this.getLeaves();
      this.getAttendences(fecha);
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
      this.apiService.getAttendences({ id: this.workingEmployee.id_profile, date: "<= '" + dt + "'" }).subscribe((att: attendences[]) => {
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
    this.apiService.getAttAdjustments({ id: this.workingEmployee.idemployees }).subscribe((adj: attendences_adjustment[]) => {

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

  getVacations() {
    let found: boolean = false;
    let vacYears: vacyear[] = [];
    this.vac = [];
    this.earnVacations = this.vacationsEarned * 1.25;
    this.tookVacations = 0;
    this.availableVacations = 0;
    this.returnedVacations = 0;
    this.dismissedVacations = 0;
    this.apiService.getVacations({ id: this.workingEmployee.id_profile }).subscribe((res: vacations[]) => {
      this.showVacations = res;
      this.showVacations.forEach(sv => {
        sv.year = new Date(sv.took_date).getFullYear();
      })

      res.forEach(vac => {
        let vacYear: vacyear = new vacyear;
        let VacFiltered: vacations[] = [];
        if (this.complete_adjustment) {
          if (vac.date == this.activeVacation.date) {
            found = true;
            this.complete_adjustment = false;
            window.alert("Vacation successfuly recorded");
          }
        }
        if (vac.action == "Add") {
          this.returnedVacations = this.returnedVacations + Number(vac.count);
        }
        if (vac.action == "Take" && vac.status != "DISMISSED") {
          this.tookVacations = this.tookVacations + Number(vac.count);
        } else if (vac.status == 'DISMISSED') {
          this.dismissedVacations = this.dismissedVacations + Number(vac.count);
        }

        vacYears = this.vac.filter(v => String(v.year) == new Date(vac.took_date).getFullYear().toString());
        if (vacYears.length == 0) {
          vacYear.year = new Date(vac.took_date).getFullYear();
          vacYear.selected = false;
          VacFiltered = this.showVacations.filter(svf => String(svf.year) == new Date(vac.took_date).getFullYear().toString());
          vacYear.vacations.push.apply(vacYear.vacations, VacFiltered);
          this.vac.push(vacYear);
        }

        this.vac.sort((a, b) => a.year - b.year);

        vacYears.forEach(vv => {
          if (vv.year.toString() == new Date().getFullYear().toString()) {
            vv.selected = true;
          }
        })
      })

      if (this.complete_adjustment && !found) {
        window.alert("Vacation not applyed correctly please try again or contact your administrator");
      }
      this.availableVacations = this.earnVacations - this.tookVacations;
    })
  }

  addVacation(action: string, type: string) {
    this.vacationAdd = true;
    this.editVac = true;
    this.activeVacation = new vacations;
    this.activeVacation.date = this.todayDate;
    this.activeVacation.id_department = this.user.department;
    this.activeVacation.id_employee = this.workingEmployee.id_profile;
    this.activeVacation.id_user = this.user.idusers; // pendiente confirmar si se guarda el id_user.
    if (action == "Add") {
      this.activeVacation.status = "COMPLETED";
      this.activeVacation.notes = "PAID VACATIONS";
    } else {
      if (this.currentPayVacations) {
        this.activeVacation.status = "COMPLETED";
      } else {
        this.activeVacation.status = "REQUESTED";
        this.activeVacation.notes = "TAKE VACATIONS";
      }
    }
    this.activeVacation.count = '1';
    this.activeVacation.action = action;
    this.activeVacation.id_type = type;
  }

  pushVacationDate(str: string) {
    this.activeVacation.took_date = str;
  }

  cancelVacation() {
    this.vacationAdd = false;
    this.editVac = true;
  }

  insertVacation() {
    this.apiService.insertVacations(this.activeVacation).subscribe((str: any) => {
      this.complete_adjustment = true;
      this.getVacations();
    })
    this.vacationAdd = false;
  }

  getVacation(vac: vacations) {
    this.activeVacation = vac;
    this.vacationAdd = true;
    this.editVac = false;
    this.editLeave = false;
  }

  getLeaves() {
    let found: boolean = false;
    this.apiService.getLeaves({ id: this.workingEmployee.id_profile }).subscribe((leaves: leaves[]) => {
      if (this.complete_adjustment) {
        if (leaves.length>0) {
          leaves.forEach(lv => {
            if (lv.start == this.activeLeave.start && lv.end == this.activeLeave.end) {
              this.complete_adjustment = false;
              found = true;
              window.alert("Leave successfuly recorded");
            }
          })
        }
      }
      if (this.complete_adjustment && !found) {
        window.alert("Leave not correctly applayed please try again latter or contact your administrator");
      }
      this.leaves = leaves;
    })
  }

  setLeave() {
    this.activeLeave = new leaves;
    this.leaveDates = [];
    this.activeLeave.date = this.todayDate;
    this.activeLeave.id_department = '5';
    this.activeLeave.id_employee = this.workingEmployee.idemployees;
    this.activeLeave.id_type = '5';
    this.activeLeave.id_user = this.user.idusers;
    this.activeLeave.status = 'REQUESTED';
    this.vacationAdd = false;
    this.editLeave = true;
    this.showLeave = false;
  }

  saveActionLeaves() {
    let note: string = '';
    let leave: leaves = this.activeLeave;
    let leavesNew: leaves[] = [];
    let start: string = '';
    let end: string = '';
    let f: Date = new Date(this.leaveDates[0].dates);
    f = this.addDays(f, 1);

    this.activeLeave.id_type = '5';
    this.activeLeave.id_employee = this.workingEmployee.idemployees;
    note = leave.notes;
    leave.notes = note + ' | Dismissed by split.';
    this.apiService.updateLeaves(leave).subscribe((str: string) => {
      start = (f.getFullYear().toString() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2,'0'));
      leave.start = start;
      leave.notes = note;
      leave = this.fillLeave();
      for (let i = 0; i < this.leaveDates.length; i++) {
        let ld: leavesAction = this.leaveDates[i];
        if (ld.action=='PENDING') {
          start = (f.getFullYear().toString() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2,'0'));

          if ((leave.start == null) || (leave.start.trim() == '')) {
            leave.start = start;
          }

          leave.status = 'PENDING';

          console.log('Estado pendiente: ');
          console.log(leave);
          console.log("<br>");
        } else {
          f = this.addDays(f, -1);
          end = (f.getFullYear().toString() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2,'0'));
          if (!leave.start) {
            leave.end = end;
            leavesNew.push(leave);
          }
          console.log(leave);
          leave = this.fillLeave();
          f = this.addDays(f, 1);
        }
        end = (f.getFullYear().toString() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2,'0'));
        f = this.addDays(f, 1);
        if ((i==this.leaveDates.length-1) && (ld.action=='PENDING')) {
          leave.end = end;
          leavesNew.push(leave);
          console.log('Todos los Leaves: ');
          console.log(leavesNew);
        }
      }

      leavesNew.forEach(ln => {
        this.apiService.insertLeaves(ln).subscribe((_str: string) => {
          this.complete_adjustment = true;
          this.getLeaves();
        })
      })
      window.alert("Change successfuly recorded");
    })
  }

  insertLeave() {
    this.apiService.insertLeaves(this.activeLeave).subscribe((str: string) => {
      this.complete_adjustment = true;
      this.getLeaves();
    })
  }

  fillLeave(): leaves {
    let leave = new leaves;
    leave.id_user = this.activeLeave.id_user;
    leave.id_employee = this.workingEmployee.idemployees;
    leave.id_type = '5';
    leave.id_department = this.activeLeave.id_department;
    leave.date = this.activeLeave.date;
    leave.notes = this.activeLeave.notes + '|| Created by split start: ' +
                  this.activeLeave.start + ' end: ' + this.activeLeave.end + '.';
    leave.status = 'REQUESTED';
    leave.motive = this.activeLeave.motive;
    leave.approved_by = this.activeLeave.approved_by;
    return leave;
  }

  addJustification(att: attendences) {
    this.attAdjudjment = new attendences_adjustment;
    this.attAdjudjment.start = "12:00";
    this.attAdjudjment.end = "12:00";
    this.editAdj = false;
    this.attAdjudjment.date = this.todayDate;
    this.attAdjudjment.state = "PENDING";
    this.attAdjudjment.status
    this.attAdjudjment.amount = "0";
    this.attAdjudjment.time_before = att.worked_time;
    this.attAdjudjment.id_attendence = att.idattendences;
    this.attAdjudjment.id_type = '2';
    this.attAdjudjment.id_employee = att.id_employee;
    this.attAdjudjment.time_after = this.attAdjudjment.time_before;
    this.attAdjudjment.id_department = this.user.department;
    this.attAdjudjment.id_user = this.user.idusers;
    this.addJ = true;
  }

  insertAdjustment() {
    this.apiService.insertAttJustification(this.attAdjudjment).subscribe((str: string) => {
      this.complete_adjustment = true;
      this.getAttendences(this.todayDate);
    });
  }

  getRecordAdjustment(id_justification: string) {
    this.apiService.getAttAdjustment({ justify: id_justification }).subscribe((requested: attendences_adjustment) => {
      this.attAdjudjment = requested;
    })
    this.addJ = true;
    this.editAdj = true;
  }

  cancelAdjustment() {
    this.addJ = false;
  }
}

