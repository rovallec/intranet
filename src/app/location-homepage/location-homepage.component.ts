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
        id: '0',
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
        id: '0',
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
      },
      {
        id: '0',
        location:'Manila',
        header:"Employee Referral Program",
        byline: '',
        multimedia:"./assets/recruitment_image_2.png",
        fragment: "Refer a friend and receive a P10,000 incentive! The payouts will be released on the 3rd and 6th months of the applicant’s joining date.",
        article:"Refer a friend and receive a P10,000 incentive! The payouts will be released on the 3rd and 6th months of the applicant’s joining date.",
        author:'Recruitment',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        id: '0',
        location:"Manila",
        header:"Client Site Tour",
        byline: "",
        multimedia:"./assets/admin_image_1.jpg",
        fragment: "The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
        article:"The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
        author:'Admin',
        date:'June 29, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        id: '0',
        location:'Manila',
        header:"Payroll update",
        byline: '',
        multimedia:"./assets/fn_image_1.png",
        fragment: "Payroll bank account for NEARSOL Manila is switching to Asia United Bank (AUB).",
        article:"Payroll bank account for NEARSOL Manila is switching to Asia United Bank (AUB). ",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        id: '0',
        location:"Manila",
        header:"NIA",
        byline: "",
        multimedia:"./assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        article:"We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Human Resources',
        date:'June 28, 2021',
        url: 'https://nearsol.us/nia-manila/',
        origin: 'Manila'
      },
      {
        id: '0',
        location:"Manila",
        header:"Annual Wellness Exam",
        byline: "",
        multimedia:"./assets/admin_image_3.png",
        fragment: "Employees from NEARSOL Manila reported to the The 30th Corporate Center site to participate in this year's Annual Wellness Examination (AWE). More than 100 employees attended on June 26, 2021 following strict covid-19 protocol and a well planned schedule to ensure social distancing. The event started at 8am and ended at around 7pm. AWE was successfully completed in partnership with Maxicare and Keyman Insurances.",
        article: "Employees from NEARSOL Manila reported to the The 30th Corporate Center site to participate in this year's Annual Wellness Examination (AWE). More than 100 employees attended on June 26, 2021 following strict covid-19 protocol and a well planned schedule to ensure social distancing. The event started at 8am and ended at around 7pm. AWE was successfully completed in partnership with Maxicare and Keyman Insurances.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:'Manila'
      },
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
