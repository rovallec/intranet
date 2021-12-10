import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { advances, attendences, attendences_adjustment, employees, leaves, leavesAction,
          process, process_templates, services, vacations, vacyear,
          Fecha, filters, periods, terminations, disciplinary_processes } from '../collection';
import { Users } from '../users';

@Component({
  selector: 'app-confirm-aproval',
  templateUrl: './confirm-aproval.component.html',
  styleUrls: ['./confirm-aproval.component.css']
})
export class ConfirmAprovalComponent implements OnInit {

  id_profile: string = '';
  user: Users = new Users;
  supEmployee: employees = new employees;
  showAttAdjustments: attendences_adjustment[] = [];
  showVacations: vacations[] = [];
  showAttendences: attendences[] = [new attendences];
  leaves: leaves[] = [];
  vac: vacyear[] = [];
  leaveDates: leavesAction[] = [];
  approvals: Users[] = [new Users];
  services: services[] = [];
  processes_template: process_templates[] = [];
  activeProc: process_templates = new process_templates;
  processRecord: process[] = [];
  attAdjudjment: attendences_adjustment = new attendences_adjustment;
  activeLeave: leaves = new leaves;
  activeVacation: vacations = new vacations;
  actualAtt: attendences
  activeStoredbus: services = new services;
  activeStoredparking: services = new services;
  activeStoredTransport: services = new services;
  activeService: services = new services;
  actuallProc: process = new process;
  actualAdvance: advances = new advances;
  filter: filters = new filters;
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
  storedBus: boolean = false;
  storedParking: boolean = false;
  storedTransport: boolean = false;
  newProcess: boolean = false;
  allJustifications: boolean = false;
  parking: boolean;
  bus: boolean;
  transport: boolean;
  earnVacations: number = 0;
  tookVacations: number = 0;
  availableVacations: number = 0;
  returnedVacations: number = 0;
  dismissedVacations: number = 0;
  vacationsEarned: number = 0;
  approvedStatus: string = 'APPROVED';
  status: string = 'Browse';
  todayDate: string = new Date().getFullYear().toString() + "-" + (new Date().getMonth() + 1).toString().padStart(2, "0") + "-" + (new Date().getDate()).toString().padStart(2, "0");
  dateVac: string = null;
  motives: string[] = ['Leave of Absence Unpaid', 'Maternity', 'Others Paid', 'Others Unpaid', 'IGSS Unpaid', 'VTO Unpaid', 'COVID Unpaid', 'COVID Paid', 'IGSS Paid'];

  constructor(public apiService: ApiServiceService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.user = this.apiService.user;
    this.start();
  }

  start() {
    let fecha: Fecha = new Fecha;

    this.apiService.getApprovers().subscribe((usrs: Users[]) => {
      this.approvals = usrs;
      this.filter.name = '';
      this.filter.start = fecha.firstDay;
      this.filter.end = fecha.lastDay;
      this.dateVac = fecha.today;
      this.bus = false;
      this.parking = false;
      this.transport = false;
      this.getEmployee();
    });
  }

  addDays(fecha: Date, days: number): Date {
    fecha.setDate(fecha.getDate() + days);
    return fecha;
  }

  getEmployee() {
    this.apiService.getEmployeesbyReporter({id: this.user.id_profile}).subscribe((emp: employees) => {
      this.supEmployee = emp;
      this.supEmployee.id_user = this.user.idusers;
      this.supEmployee.user_name = this.user.user_name;
      this.supEmployee.supusername = emp.supusername;
      this.filter.idsup = this.supEmployee.idsup;
      this.activeEmp = emp.id_profile;
      this.vacationsEarned = (new Date(this.todayDate).getMonth() - new Date(this.supEmployee.hiring_date).getMonth() + ((new Date(this.todayDate).getFullYear() - new Date(this.supEmployee.hiring_date).getFullYear()) * 12));
      this.getLeaves();
      this.getVacations();
      this.getAttAdjustemt(false);
    });
  }

  cancelView() {
    this.editLeave = false;
    this.editVac = false;
    this.vacationAdd = false;
    this.addJ = false;
    this.showLeave = false;
    this.newProcess = false;
    this.addProc = false;
    //this.start();  // No procede ya que elimina los listados con su estado ya cambiado.
  }

  getAttendences(dt: string) {
    let actualPeriod: periods;
    this.apiService.getPeriods().subscribe((pr: periods[]) => {
      pr.forEach(per => {
        if (new Date(per.start).getTime() <= new Date(dt).getTime() && new Date(per.end).getTime() >= new Date(dt).getTime()) {
          actualPeriod = per;
        }
      })
      this.apiService.getAttendences({ id: this.supEmployee.id_profile, date: "<= '" + dt + "'" }).subscribe((att: attendences[]) => {
        this.apiService.getVacations({ id: this.supEmployee.id_profile }).subscribe((vac: vacations[]) => {
          this.apiService.getLeaves({ id: this.supEmployee.id_profile }).subscribe((leave: leaves[]) => {
            this.apiService.getDPAtt({ id: this.supEmployee.idemployees, date_1: actualPeriod.start, date_2: actualPeriod.end }).subscribe((dp: disciplinary_processes[]) => {
              this.apiService.getTermdt(this.supEmployee).subscribe((trm: terminations) => {
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
                      if (!(this.supEmployee.children) && !(this.supEmployee.gender)) {
                        if (Number(this.supEmployee.children) > 0) {
                          if (this.supEmployee.gender == 'Femenino') {
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
                this.getAttAdjustemt(false);
              })
            })
          })
        })
      })
    });
    this.addJ = false;
    this.editAdj = false;
  }

  getAttAdjustemt(all: boolean) {
    this.editAdj = false;
    this.apiService.getAttAdjustments({ id: '0' }).subscribe((adj: attendences_adjustment[]) => {

      this.showAttAdjustments = adj;
    })
  }

  getRecordAdjustment(id_justification: string) {
    let att: attendences = new attendences;
    this.apiService.getAttAdjustment({ justify: id_justification }).subscribe((requested: attendences_adjustment) => {
      this.attAdjudjment = requested;
      this.actualAtt.date = this.attAdjudjment.date;
      this.actualAtt.idattendences = this.attAdjudjment.id_attendence;
      this.actualAtt.id_employee = this.attAdjudjment.id_employee;
      this.actualAtt.nearsol_id = this.attAdjudjment.nearsol_id;

      this.addJustification();
    })
    this.addJ = true;
    this.editAdj = true;
  }

  addJustification() {
    this.attAdjudjment.start = "12:00";
    this.attAdjudjment.end = "12:00";
    this.editAdj = false;
    this.attAdjudjment.date = this.todayDate;
    this.attAdjudjment.attendance_date = this.actualAtt.date;
    this.attAdjudjment.state = "REQUESTED";
    this.attAdjudjment.status = 'REQUESTED';
    this.attAdjudjment.amount = "0";
    this.attAdjudjment.time_before = this.actualAtt.worked_time;
    this.attAdjudjment.id_attendence = this.actualAtt.idattendences;
    this.attAdjudjment.id_type = '2';
    this.attAdjudjment.id_employee = this.supEmployee.idemployees;
    this.attAdjudjment.time_after = this.attAdjudjment.time_before;
    this.attAdjudjment.id_department = this.user.department;
    this.attAdjudjment.id_user = this.user.idusers;
    this.addJ = true;
  }

  addJustificationatt(att: attendences) {
    this.attAdjudjment = new attendences_adjustment;
    this.actualAtt = att;

    this.attAdjudjment.start = '12:00';
    this.attAdjudjment.end = '12:00';
    this.editAdj = false;
    this.attAdjudjment.date = this.todayDate;
    this.attAdjudjment.attendance_date = this.actualAtt.date;
    this.attAdjudjment.state = this.approvedStatus;
    this.attAdjudjment.status = this.approvedStatus;
    this.attAdjudjment.amount = '0';
    this.attAdjudjment.time_before = att.worked_time;
    this.attAdjudjment.id_attendence = att.idattendences;
    this.attAdjudjment.id_type = '2';
    this.attAdjudjment.id_employee = this.supEmployee.idemployees;
    this.attAdjudjment.time_after = this.attAdjudjment.time_before;
    this.attAdjudjment.id_department = this.user.department;
    this.attAdjudjment.id_user = this.user.idusers;
    this.addJ = true;
  }

  setAllJustifications(all: boolean) {
    this.allJustifications = all;
    this.getAttAdjustemt(this.allJustifications);
  }

  updateJustification() {
    this.apiService.updateJustifications(this.attAdjudjment).subscribe((str: string) => {
      if(String(str).split("|")[0] !='0') {
        console.log(str);
      } else {
        this.complete_adjustment = true;
        this.getAttAdjustemt(this.allJustifications);
      }
      this.complete_adjustment = true;
      this.getAttAdjustemt(this.allJustifications);
    });
  }

  setJustification(adj: attendences_adjustment) {
    this.attAdjudjment = adj;
  }

  getLeaves() {
    let found: boolean = false;
    this.filter.name = '';
    this.apiService.getFilteredLeaves(this.filter).subscribe((leav: leaves[]) => {
      if (this.complete_adjustment) {
        if (leav.length>0) {
          leav.forEach(lv => {
            if (lv.start == this.activeLeave.start && lv.end == this.activeLeave.end) {
              this.complete_adjustment = false;
              found = true;
            }
          })
        }
      }
      if (this.complete_adjustment && !found) {
        window.alert("Leave not correctly applayed please try again latter or contact your administrator");
      }
      this.leaves = leav.filter(lv => lv.status == 'REQUESTED');
    });
  }

  selectLeave(leave: leaves) {
    let start: number = 0;
    let end: number = 0;
    let f: Date = new Date(leave.start);
    let days: number = new Date(leave.end).getTime() - new Date(leave.start).getTime();
    days = days / (1000*3600*24);
    start = new Date(leave.start).getDate();
    end = new Date(leave.end).getDate();
    this.activeLeave = leave;
    this.editLeave = true;
    this.showLeave = true;
    this.leaveDates = [];

    for (let i = 0; i <= days; i++) {
      let ld: leavesAction = new leavesAction;
      f = this.addDays(f, 1);
      ld.dates = (f.getFullYear().toString() + '-' + String(f.getMonth() + 1).padStart(2, '0') + '-' + String(f.getDate()).padStart(2,'0'));
      ld.action = this.approvedStatus;
      this.leaveDates.push(ld);
    }
  }

  setLeave(thisLeave: leaves) {
    this.activeLeave = thisLeave;
    this.leaves.forEach(element => {
      if (element.id_process === this.activeLeave.id_process) {
        element.status = this.activeLeave.status;
      }
    });

    this.vacationAdd = false;
    this.editLeave = true;
    this.showLeave = false;
  }

  updateLeaves() {
    this.leaves.forEach(leave => {
      if (leave.status !== 'REQUESTED') {
        leave.id_type = '5';

        this.apiService.updateLeaves(leave).subscribe((str: string) => {
          this.cancelView();
          window.alert("Leave successfuly recorded.");
        })
      }
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
    this.apiService.getVacations({ id: this.supEmployee.id_profile }).subscribe((res: vacations[]) => {
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
          VacFiltered = this.filterVacations(VacFiltered);
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
      this.showVacations = this.filterVacations(this.showVacations);
    })
  }

  addVacation(action: string, type: string) {
    this.vacationAdd = true;
    this.editVac = true;
    this.activeVacation = new vacations;
    this.activeVacation.date = this.todayDate;
    this.activeVacation.id_department = this.user.department;
    this.activeVacation.id_employee = this.supEmployee.id_profile;
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

  updateVacation() {
    this.showVacations.forEach(element => {
      if (element.status!=='REQUESTED'){
        this.apiService.updateVacation(this.activeVacation).subscribe((str: any) => {
        this.complete_adjustment = true;
        this.getVacations();
        })
      }
      this.cancelView();
    });

    this.vacationAdd = false;
  }

  setVacation(vac: vacations) {
    this.activeVacation = vac;
    this.vacationAdd = true;
    this.editVac = false;
    this.editLeave = false;
  }

  filterVacations(vac: vacations[]): vacations[] {
    let filvac: vacations[] = vac;
    vac = filvac.filter(vac => vac.status == 'REQUESTED');
    vac = this.searchString(vac, this.filter.name);
    return vac.filter(vc => new Date(vc.date).getTime() >= new Date(this.filter.start).getTime() && new Date(vc.date).getTime() <= new Date(this.filter.end).getTime());
  }

  filterJustifications(Jus: attendences_adjustment[]): attendences_adjustment[] {
    let filJus: attendences_adjustment[] = Jus;
    Jus = filJus.filter(J => J.status == 'REQUESTED');
    Jus = this.searchString(Jus, this.filter.name);
    return Jus.filter(ju => new Date(ju.date).getTime() >= new Date(this.filter.start).getTime() && new Date(ju.date).getTime() <= new Date(this.filter.end).getTime());
  }

  uploadFile() {
    //por el momento no hace nada
  }

  applyFilter() {
    this.apiService.getFilteredLeaves(this.filter).subscribe((leav: leaves[]) => {
      this.leaves = leav;
      this.leaves = this.searchString(this.leaves, this.filter.name);
    });
    this.getVacations();
    this.showAttAdjustments = this.filterJustifications(this.showAttAdjustments);

  }

  searchString(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

  setStartFilter(start: string) {
    this.filter.start = start;
    this.applyFilter();
  }

  setEndFilter(end: string) {
    this.filter.end = end;
    this.applyFilter();
  }

  cancelAdjustment() {
    this.addJ = false;
    this.applyFilter();
  }

}
