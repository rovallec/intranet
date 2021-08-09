import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService, private routes:ActivatedRoute) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Intranet Forms';
  img_date:string = 'June 16, 2021';
  
  ngOnInit(): void {
    if(this.routes.snapshot.url.toString().includes('hr-homepage')){
    this.articles = [
      {
        location:"Human Resources",
        header:"",
        byline: "",
        multimedia:"./assets/HR_image_6.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:'',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Annual Wellness Exam",
        byline: "",
        multimedia:"./assets/admin_image_3.png",
        fragment: "Employees from NEARSOL Manila reported to the The 30th Corporate Center site to participate in this year's Annual Wellness Examination (AWE). More than 100 employees attended on June 26, 2021 following strict covid-19 protocol and a well planned schedule to ensure social distancing. The event started at 8am and ended at around 7pm. AWE was successfully completed in partnership with Maxicare and Keyman Insurances.",
        article: "Employees from NEARSOL Manila reported to the The 30th Corporate Center site to participate in this year's Annual Wellness Examination (AWE). More than 100 employees attended on June 26, 2021 following strict covid-19 protocol and a well planned schedule to ensure social distancing. The event started at 8am and ended at around 7pm. AWE was successfully completed in partnership with Maxicare and Keyman Insurances.",
        author:'Human Resources',
        date:'June 26, 2021',
        url: '',
        origin: 'Manila'
      },{
        location:"Human Resources",
        header:"NEARSOL",
        byline:" Employee Hangout",
        multimedia:"./assets/hr_image_8.png",
        fragment: "The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        article:"The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      },{
        location:"Human Resources",
        header:"Payroll Update ",
        byline: "",
        multimedia:"./assets/fn_image_1.png",
        fragment: "Payroll bank account for NEARSOL Manila is switching to Asia United Bank (AUB). ",
        article:"Payroll bank account for NEARSOL Manila is switching to Asia United Bank (AUB). ",
        author:'Human Resources',
        date:'June 29, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Pride Month 2021",
        byline: "",
        multimedia:"./assets/hr_image_5.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Father’s Day at NEARSOL",
        byline: "",
        multimedia:"./assets/hr_image_1.png",
        fragment: "It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL.",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      },{
        location:"Human Resources",
        header:"More Content Soon",
        byline: "",
        multimedia:"./assets/soon.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:'June 2, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Employee Satisfaction Survey",
        byline: "",
        multimedia:"./assets/hr_image_4.png",
        fragment: "We are running our periodic Employee Satisfaction Survey and we would like to invite everyone to participate.",
        article: "<p>" +
        "We are running our periodic Employee Satisfaction Survey and we would like to invite everyone to participate. " +
        "<br>" +
        "<br>" +
        "Part of the results from the past surveys helped us improve some of our processes to enhance employee experience. Some of the changes we implemented after hearing employees reviews were: " +
        
        "<br> <ul>" +
        "<li>Payroll Query response time </li>" +
        "<li>Earlier and more timely release of payslips </li>" +
        "<li>More timely communication of performance standing </li>" +
        "<li>Annual Performance Reviews </li>" +
        "</ul> <br>" +
        "Some of these are still work in progress but we have initiated plans to see it through and implement long term. " +
        "<br>" +
        "<br>" +
        "Your opinions matter and we would love to hear from each one of you. " +
        "<br>" +
        "<br>" +
        "We will close the survey on June 15, 2021 so please take a few minutes to respond so that your voice may be heard. " +
        "<br>" +
        "<br>" +
        "Thank you and we look forward to your participation." +
        "</p>",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      }
    ]
  }else if(this.routes.snapshot.url.toString().includes('admin-homepage')){
    this.articles = [{
      location:"Admin",
      header:"",
      byline: "",
      multimedia:"./assets/admin_image_2.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"Client Site Tour",
      byline: "",
      multimedia:"./assets/admin_image_1.jpg",
      fragment: "The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
      article:"The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
      author:'Admin',
      date:'June 29, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 29, 2021',
      url: '',
      origin: 'Manila'
    }]
  }else if(this.routes.snapshot.url.toString().includes('marketing-homepage')){
    this.articles = [{
      location:"Marketing",
      header:"",
      byline: "",
      multimedia:"./assets/marketing_image_2.jpg",
      fragment: "Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aims to create awareness for Great Place to Work PH and, educate and help other companies strengthen their employer branding.",
      article:"Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aims to create awareness for Great Place to Work PH and, educate and help other companies strengthen their employer branding.",
      author:'Marketing',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:"Marketing",
      header:"NEARSOL and Great Place to Work Video Podcast",
      byline: ": Employer Branding Campaign",
      multimedia:"./assets/marketing_image_1.jpg",
      fragment: "Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aims to create awareness for Great Place to Work PH and, educate and help other companies strengthen their employer branding.",
      article:"Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aims to create awareness for Great Place to Work PH and, educate and help other companies strengthen their employer branding.",
      author:'Marketing',
      date:'June 29, 2021',
      url: '',
      origin: 'Manila'
    }]
  }else if(this.routes.snapshot.url.toString().includes('ops-homepage')){
    this.articles = [{
      location:"Operations",
      header:"",
      byline: "",
      multimedia:"./assets/op_image_1.jpg",
      fragment: "Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work....",
      article:"Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aim to create awareness for Great Place to Work PH and to educate and help other companies strengthen their employer branding.",
      author:'Operations',
      date:'',
      url: '',
      origin: 'Manila'
    }]
  }else if(this.routes.snapshot.url.toString().includes('re-homepage')){
    this.articles = [{
      location:"Recruitment",
      header:"",
      byline: "",
      multimedia:"./assets/recruitment_image_5.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:'Recruitment',
      header:"Employee Referral Program",
      byline: '',
      multimedia:"./assets/recruitment_image_2.png",
      fragment: "Refer a friend and receive a P10,000 incentive! The payouts will be released on the 3rd and 6th months of the applicant’s joining date.",
      article:"Refer a friend and receive a P10,000 incentive! The payouts will be released on the 3rd and 6th months of the applicant’s joining date.",
      author:'Recruitment',
      date:"June 17, 2021",
      url: '',
      origin:'Manila'
    },{
      location:"Recruitment",
      header:"NIA",
      byline: "",
      multimedia:"./assets/recruitment_image_1.png",
      fragment: "We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
      article:"We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
      author:'Recruitment',
      date:'June 28, 2021',
      url: 'https://nearsol.us/nia-manila/',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    }]
  }else if(this.routes.snapshot.url.toString().includes('wf-homepage')){
    this.articles = [{
      location:"Workforce",
      header:"",
      byline: "",
      multimedia:"./assets/workforce_image1.jpg",
      fragment: "",
      article:"",
      author:'Workforce',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:"Workforce",
      header:"Max Billable Hours Dashboard",
      byline: "NiRi (Nearsol Insights and Reporting Instrument)",
      multimedia:"./assets/workforce_image1.jpg",
      fragment: "",
      article:"It is a unified dashboard that would enable end-users to have the desired data or information that they need in one click of a finger. Applicable only for Upper Management",
      author:'Workforce',
      date:'August 09, 2021',
      url: 'https://datastudio.google.com/s/jpFN0qAyfdg',
      origin: 'Manila'
    },{
      location:"Workforce",
      header:"Nearsol Global Attrition Report",
      byline: "NiRi (Nearsol Insights and Reporting Instrument)",
      multimedia:"./assets/workforce_image2.jpg",
      fragment: "",
      article:"It is a unified dashboard that would enable end-users to have the desired data or information that they need in one click of a finger. Applicable only for Upper Management",
      author:'Workforce',
      date:'August 09, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Workforce",
      header:"Payroll Inquiry Form",
      byline: "",
      multimedia:"./assets/workforce_image3.jpg",
      fragment: "",
      article:"This is a portal were employees can send their questions or inquiry for better understanding of the breakdown of their salary or Request for an adjustment if necessary. For Supervisors and Up only.",
      author:'Workforce',
      date:'August 09, 2021',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSe4OC7cWXGRxbd4Ga3bvrwIZMPdqgRlTlvhJt2-Rc8_xqTbKw/viewform',
      origin: 'Manila'
    },{
      location:"Workforce",
      header:"Timekeeping Process Flow and Reminders",
      byline: "",
      multimedia:"./assets/workforce_image4.jpg",
      fragment: "",
      article:"This is a short and comprehensive presentation on how the timekeeping works as a function in overall payroll. Quick reminders are included to promote accuracy in employees monthly salary.",
      author:'Workforce',
      date:'August 09, 2021',
      url: 'https://drive.google.com/file/d/1qT41Ui45e-3fOZ1T9F7yEfEyUyePG534/view?usp=sharing',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"./assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    }]
  }
  }

  setArticlesFragment(str:string){
    let ss:string = str.substr(0, 180 + str.substr(179, str.length).search(' '));
    if(str.length > 180){
      ss = ss.substr(0,ss.length - 1) + '...';
    }else{
      ss = ss;
    }
    return ss;
  }

  setSelection(sel:number){
    if(this.articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }
}
