export class Collection {
}

export class Fecha{
  today: string;
  year: string;
  month: string;
  firstDay: string;
  lastDay: string;

  getToday(): string {
    let fecha: Date = new Date();
    let dd: string = String(fecha.getDate()).padStart(2,'0');
    let MM: string = String(fecha.getMonth() + 1).padStart(2, '0');
    let yyyy: string = fecha.getFullYear().toString();
    this.year = yyyy;
    this.month = MM;
    return (yyyy + '-' + MM + '-' + dd);
  }

  transform(Adate: Date): string {
    let dd: string = String(Adate.getDate()).padStart(2,'0');
    let MM: string = String(Adate.getMonth() + 1).padStart(2, '0');
    let yyyy: string = Adate.getFullYear().toString();
    let sdate: string = (yyyy + '-' + MM + '-' + dd);
    if (sdate == 'NaN-NaN-NaN') {
        sdate = '1970-01-01';
    }
    return sdate;
  }

  dateExcel(d): Date {
    let date = new Date(Math.round((d - 25569) * 864e5));
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date;
  }

  getFirstDay(first: Date): string {
    let day: string = this.transform(new Date(first.getFullYear(), first.getMonth(), 1));
    return day;
  }

  getLastDay(last: Date): string {
    let day: string = this.transform(new Date(last.getFullYear(), last.getMonth() + 1, 0));
    return day;
  }

  constructor() {
    this.today = this.getToday();
    this.firstDay = this.getFirstDay(new Date(this.today));
    this.lastDay = this.getLastDay(new Date(this.today));
  }
}

export class filters{
  name: string;
  start: string;
  end: string;
  idsup: string;
  constructor(){
    this.clear();
  }

  clear() {
    this.name = null;
    this.start = null;
    this.end = null;
    this.idsup = null;
  }
}
export class employees{
  id_profile:string;
  idemployees:string;
  id_hire:string;
  id_account:string;
  reporter:string;
  client_id:string;
  hiring_date:string;
  job:string;
  base_payment:string;
  productivity_payment:string;
  state:string;
  id_user:string;
  id_department:string;
  name:string;
  account:string;
  platform:string;
  nearsol_id:string;
  user_name:string;
  active:string;
  status:string;
  society:string;
  dpi:string;
  children: string;
  gender: string;
  idsup: string;
  supusername: string;
  constructor(){
      this.id_profile = null;
      this.idemployees = null;
      this.id_hire = null;
      this.id_account = null;
      this.reporter = null;
      this.client_id = null;
      this.hiring_date = null;
      this.job = null;
      this.base_payment = null;
      this.productivity_payment = null;
      this.state = null;
      this.name = null;
      this.account = null;
      this.platform = null;
      this.nearsol_id = null;
      this.status = null;
      this.society = null;
      this.dpi = null;
      this.children = null;
      this.gender = null;
      this.id_user = null;
      this.idsup = null;
      this.supusername = null;
  }
}

export class profiles {
  idprofiles: string;
  tittle: string;
  first_name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  day_of_birth: string;
  nationality: string;
  gender: string;
  etnia: string;
  bank: string;
  account: string;
  account_type: string;
  marital_status: string;
  dpi: string;
  nit: string;
  iggs: string;
  irtra: string;
  status: string;
  idcontact_details: string;
  id_profile: string;
  primary_phone: string;
  secondary_phone: string;
  address: string;
  city: string;
  email: string;
  idjob_histories: string;
  company: string;
  date_joining: string;
  date_end: string;
  position: string;
  birth_place: string;
  reference_name: string;
  reference_lastname: string;
  reference_position: string;
  reference_email: string;
  reference_phone: string;
  working: string;
  idprofile_details: string;
  english_level: string;
  transport: string;
  start_date: string;
  unavialable_days: string;
  marketing_campaing: string;
  first_lenguage: string;
  second_lenguage: string;
  third_lenguage: string;
  idemergency_details: string;
  emergency_first_name: string;
  emergency_second_name: string;
  emergency_first_lastname: string;
  emergency_second_lastname: string;
  phone: string;
  relationship: string;
  idmedical_details: string;
  medical_treatment: string;
  medical_prescription: string;
  ideducation_details: string;
  current_level: string;
  further_education: string;
  currently_studing: string;
  institution_name: string;
  degree: string;
  iddocuments: string;
  doc_type: string;
  doc_path: string;
  profesion: string;
  full_name: string;
  constructor() {
      this.idprofiles = null;
      this.tittle = null;
      this.first_name = null;
      this.second_name = null;
      this.first_lastname = null;
      this.second_lastname = null;
      this.day_of_birth = null;
      this.nationality = null;
      this.gender = null;
      this.etnia = null;
      this.bank = null;
      this.account = null;
      this.account_type = null;
      this.marital_status = null;
      this.dpi = null;
      this.nit = null;
      this.iggs = null;
      this.irtra = null;
      this.status = null;
      this.idcontact_details = null;
      this.id_profile = null;
      this.primary_phone = null;
      this.secondary_phone = null;
      this.address = null;
      this.city = null;
      this.email = null;
      this.idjob_histories = null;
      this.company = null;
      this.date_joining = null;
      this.date_end = null;
      this.position = null;
      this.birth_place = null;
      this.reference_name = null;
      this.reference_lastname = null;
      this.reference_position = null;
      this.reference_email = null;
      this.reference_phone = null;
      this.working = null;
      this.idprofile_details = null;
      this.english_level = null;
      this.transport = null;
      this.start_date = null;
      this.unavialable_days = null;
      this.marketing_campaing = null;
      this.first_lenguage = null;
      this.second_lenguage = null;
      this.third_lenguage = null;
      this.idemergency_details = null;
      this.emergency_first_name = null;
      this.emergency_second_name = null;
      this.emergency_first_lastname = null;
      this.emergency_second_lastname = null;
      this.phone = null;
      this.relationship = null;
      this.idmedical_details = null;
      this.medical_treatment = null;
      this.medical_prescription = null;
      this.ideducation_details = null;
      this.current_level = null;
      this.further_education = null;
      this.currently_studing = null;
      this.institution_name = null;
      this.degree = null;
      this.iddocuments = null;
      this.doc_type = null;
      this.doc_path = null;
      this.full_name = this.first_name + ' ' + this.second_name + ' ' + this.first_lastname + ' ' + this.second_lastname;
  }
}

export class periods {
  idperiods: string;
  start: string;
  end: string;
  status: string;
  type_period: string;
  constructor() {
      this.idperiods = null;
      this.start = null;
      this.end = null;
      this.status = null;
      this.type_period = null;
  }
}

export class attendences {
  idattendences: string;
  id_employee: string;
  nearsol_id: string;
  client_id: string;
  first_name: string;
  second_name: string;
  first_lastname: string;
  second_lastname: string;
  date: string;
  scheduled: string;
  worked_time: string;
  day_off1: string;
  day_off2: string;
  status: string;
  id_wave: string;
  balance: string;
  state: string;
  igss:string;
  tk_exp:string;
  constructor() {
      this.igss = '0';
      this.tk_exp = '0';
      this.idattendences = null;
      this.id_employee = null;
      this.date = null;
      this.scheduled = null;
      this.worked_time = null;
      this.nearsol_id = null;
      this.client_id = null;
      this.first_name = null;
      this.second_name = null;
      this.first_lastname = null;
      this.second_lastname = null;
      this.day_off1 = null;
      this.day_off2 = null;
      this.status = null;
      this.id_wave = null;
      this.balance = null;
      this.state = null;
  }
}

export class attendences_adjustment {
  //adjustments
  idattendence_adjustemnt: string;
  id_attendence: string;
  id_justification: string;
  attendance_date: string;
  time_before: string;
  time_after: string;
  amount: string;
  state: string;
  start:string;
  end:string;
  dateTime:string;
  //justifications
  id_process: string;
  reason: string;
  //processes
  id_user: string;
  id_employee: string;
  id_type: string;
  id_department: string;
  date: string;
  notes: string;
  status: string;
  id_period:string;
  error:string;
  nearsol_id:string;
  adj_type:string;
  account:string;
  constructor() {
      //adjustments
      this.idattendence_adjustemnt = null;
      this.id_attendence = null;
      this.id_justification = null;
      this.attendance_date = null;
      this.time_before = null;;
      this.time_after = null;
      this.amount = null;
      this.state = null;
      this.start = null;
      this.end = null;
      //justifications
      this.id_process = null;
      this.reason = null;
      //processes
      this.id_user = null;
      this.id_employee = null;
      this.id_type = null;
      this.id_department = null;
      this.date = null;
      this.notes = null;
      this.status = null;
      this.id_period = null;
      this.error = null;
      this.nearsol_id = null;
      this.adj_type = null;
  }
}

export class vacations {
  //process
  id_process;
  id_user: string;
  id_employee: string;
  id_type: string;
  id_department: string;
  date: string;
  notes: string;
  status: string;
  dateTime:string;
  //vacations
  action: string;
  count: string;
  took_date: string;
  year: number;
  constructor() {
      this.id_user = null;
      this.id_employee = null;
      this.id_type = null;
      this.id_department = null;
      this.date = null;
      this.notes = null;
      this.status = null;
      this.action = null;
      this.count = null;
      this.took_date = null;
      this.year = new Date(this.date).getFullYear();
  }

  setYear() {
      this.year = new Date(this.date).getFullYear();
  }
}

export class leaves {
  id_process;
  //process
  id_user: string;
  id_employee: string;
  id_type: string;
  id_department: string;
  date: string;
  notes: string;
  status: string;
  dateTime:string;
  //leaves
  motive: string;
  approved_by: string;
  start: string;
  end: string;
  constructor() {
      this.id_user = null;
      this.id_employee = null;
      this.id_type = null;
      this.id_department = null;
      this.date = null;
      this.notes = null;
      this.status = null;
      this.motive = null;
      this.approved_by = null;
      this.start = null;
      this.end = null;
  }
}

export class leavesAction {
  dates: string;
  action: string;
  constructor(){
      this.dates = null;
      this.action = null;
  }
}

export class disciplinary_processes {
  //Process
  id_processes: string;
  id_user: string;
  id_employee: string;
  id_type: string;
  id_department: string;
  date: string;
  notes: string;
  status: string;
  dateTime:string;
  //Request
  idrequests: string;
  requested_by: string;
  reason: string;
  description: string;
  resolution: string;
  proceed: string;
  //Disciplinary Process
  iddp: string;
  type: string;
  cathegory: string;
  dp_grade: string;
  motive: string;
  imposition_date: string;
  legal_foundament: string;
  consequences: string;
  observations: string
  //Audiences
  audience_date: string;
  time: string;
  comments: string;
  audience_status: string;
  //Suspensions
  day_1: string;
  day_2: string;
  day_3: string;
  day_4: string;
  //Extra
  nearsol_id:string;
  client_id:string;
  constructor() {
      this.id_user = null;
      this.id_employee = null;
      this.id_type = null;
      this.id_department = null;
      this.date = null;
      this.notes = null;
      this.status = null;
      this.idrequests = null;
      this.requested_by = null;
      this.reason = null;
      this.description = null;
      this.resolution = null;
      this.proceed = null;
      this.iddp = null;
      this.type = null;
      this.cathegory = null;
      this.dp_grade = null;
      this.motive = null;
      this.imposition_date = null;
      this.legal_foundament = null;
      this.consequences = null;
      this.observations = null;
      this.audience_date = null;
      this.time = null;
      this.comments = null;
      this.audience_status = null;
      this.day_1 = null;
      this.day_2 = null;
      this.day_3 = null;
      this.day_4 = null;
      this.nearsol_id = null;
      this.client_id = null;
  }
}

export class terminations {
  id_process: string;
  motive: string;
  kind: string;
  reason: string;
  rehireable: string;
  nearsol_experience: string;
  valid_from: string;
  comments: string;
  insurance_notification: String;
  access_card: string;
  headsets: string;
  bank_check: string;
  period_to_pay: string;
  supervisor_experience: string;
  base_for_salary: string;
  constructor() {
      this.id_process = null;
      this.motive = null;
      this.kind = null;
      this.reason = null;
      this.rehireable = null;
      this.nearsol_experience = null;
      this.valid_from = null;
      this.comments = null;
      this.insurance_notification = null;
      this.access_card = null;
      this.headsets = null;
      this.bank_check = null;
      this.period_to_pay = null;
      this.supervisor_experience = null;
      this.base_for_salary = null;
  }
}

export class services {
  idservices: string;
  id_process: string;
  id_employee: string;
  name: string;
  amount: string;
  max: string;
  frecuency: string;
  status: string;
  current: string;
  //Process
  idinternal_process: string;
  id_user: string;
  proc_name: string;
  date: string;
  proc_status: string;
  notes: string;
  constructor() {
      this.idservices = null;
      this.id_process = null;
      this.id_employee = null;
      this.name = null;
      this.amount = null;
      this.max = null;
      this.frecuency = null;
      this.status = null;
      this.idinternal_process = null;
      this.id_user = null;
      this.proc_name = null;
      this.date = null;
      this.proc_status = null;
      this.notes = null
  }
}
export class process_templates {
  idprocess_templates: string;
  name: string;
  department: string;
  id_role: string;
}
export class process{
  idprocesses:string;
  id_role:string;
  id_profile:string;
  name:string;
  descritpion:string;
  prc_date:string;
  status:string;
  id_user:string;
  user_name:string;
}
export class advances {
  idadvances: string;
  id_process: string;
  type: string;
  description: string;
  classification: string;
  amount: string;
  constructor() {
      this.idadvances = null;
      this.id_process = null;
      this.type = null;
      this.description = null;
      this.classification = null;
      this.amount = null;
  }
}
export class vacyear {
  year: number;
  selected: boolean
  vacations: vacations[];
  constructor() {
    this.year = null;
    this.selected = false;
    this.vacations = [];
  }

  vacSelected(sel: boolean) {
    this.selected = sel;
  }
}
