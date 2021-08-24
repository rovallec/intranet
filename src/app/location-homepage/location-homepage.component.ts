import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';

@Component({
  selector: 'app-location-homepage',
  templateUrl: './location-homepage.component.html',
  styleUrls: ['./location-homepage.component.css']
})
export class LocationHomepageComponent implements OnInit {

  constructor() { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = '';
  img_date:string = '';

  ngOnInit(): void {
    this.articles = [
      {
        location:"Manila",
        header:"",
        byline: '',
        multimedia:"./assets/manila_image_1.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'',
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
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
        location:"Global",
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
        location:"Global",
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
        location:"Global",
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
        location:"Global",
        header:"Project Sparta",
        byline: "",
        multimedia:"./assets/workforce_image5.png",
        fragment: "",
        article:"Project Sparta is a scholarship program on data analytics, a partnership project of CCAP-DOST. Our Country Manager, Tonichi Parekh and Workforce Director, Gerard Palado led this initiative.",
        author:'Recruitment',
        date:'August 48, 2021',
        url: 'https://bit.ly/3shdAlw',
        origin: 'Manila'
      },
      {
        location:"Global",
        header:"NEARSOL",
        byline:" Employee Hangout",
        multimedia:"./assets/hr_image_8.png",
        fragment: "The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        article:"The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      }
    ]
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

  getHeight(object:string){
    let height = document.getElementById(object).offsetHeight
    console.log(height);
    if((height/24) <= 1){
      return true;
    }else{
      return false;
    }
  }
}
