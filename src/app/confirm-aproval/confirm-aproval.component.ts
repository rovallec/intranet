import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import {  advances, attendences, attendences_adjustment, employees, leaves, leavesAction, process, process_templates, services, vacations, vacyear,
          Fecha, filters } from '../collection';
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
  parking: boolean;
  bus: boolean;
  transport: boolean;
  earnVacations: number = 0;
  tookVacations: number = 0;
  availableVacations: number = 0;
  returnedVacations: number = 0;
  dismissedVacations: number = 0;
  vacationsEarned: number = 0;
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

      /*

      this.getAttendences(this.todayDate);
      this.getAttAdjustemt();
      this.getServices();
      this.getProcessesrecorded();
      */
    });
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
              window.alert("Leave successfuly recorded");
            }
          })
        }
      }
      if (this.complete_adjustment && !found) {
        window.alert("Leave not correctly applayed please try again latter or contact your administrator");
      }
      this.leaves = leav;
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
      ld.action = 'PENDING';
      this.leaveDates.push(ld);
    }
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
    this.apiService.getVacations({ id: this.route.snapshot.paramMap.get('id') }).subscribe((res: vacations[]) => {
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

  uploadFile() {
    //por el momento no hace nada
  }

  appyFilter() {
    this.apiService.getFilteredLeaves(this.filter).subscribe((leav: leaves[]) => {
      this.leaves = leav;
    });
  }

  setStartFilter(start: string) {
    this.filter.start = start;
  }

  setEndFilter(end: string) {
    this.filter.end = end;
  }

}
