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
        multimedia:"http://181.114.12.81/intranet/assets/HR_image_6.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:'',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Annual Wellness Examination",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/admin_image_3.png",
        fragment: "Employees from NEARSOL Ortigas reported to the ayala 30th site for the first time this year to participate in this year's Annual Wellness Examination.",
        article: "Employees from NEARSOL Ortigas reported to the ayala 30th site for the first time this year to participate in this year's Annual Wellness Examination.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      },{
        location:"Human Resources",
        header:"Employee Hangout: ",
        byline:"Core Values & People Analyzer Edition",
        multimedia:"http://181.114.12.81/intranet/assets/HR_image_7.png",
        fragment: "The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month : Results Oriented.",
        article: "The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month : Results Oriented." +
        "<br>" +
        "The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of Nearsol PH." +
        "<br>" +
        "All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to Nearsol's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it)." +
        "<br>" +
        "The Nearsol Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for Nearsol PH employees.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila'
      },{
        location:"Human Resources",
        header:"Payroll Update ",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/fn_image_1.png",
        fragment: "PAYROLL BANK FOR NEARSOL ORTIGAS IS SWITCHING TO ASIA UNITED BANK (AUB) EFFECTIVE JULY 5, 2021. Please fill out the bank forms and submit them immediately!  Please review attached FAQs and reach out to HR if you have questions",
        article:"PAYROLL BANK FOR NEARSOL ORTIGAS IS SWITCHING TO ASIA UNITED BANK (AUB) EFFECTIVE JULY 5, 2021. Please fill out the bank forms and submit them immediately!  Please review attached FAQs and reach out to HR if you have questions",
        author:'Human Resources',
        date:'June 29, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:"Human Resources",
        header:"Pride Month 2021",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_5.png",
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
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
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
        multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_4.png",
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
      byline: "Ayala 30th and iSquare Sites Ocular Visit from a Potential Client",
      multimedia:"http://181.114.12.81/intranet/assets/admin_image_2.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"Client Site Tour",
      byline: "Ayala 30th and iSquare Sites Ocular Visit from a Potential Client",
      multimedia:"http://181.114.12.81/intranet/assets/admin_image_1.jpeg",
      fragment: "The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director...",
      article:"The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director, did a site tour for a potential client together with the representatives from a property broker.  Ocular inspection was done for both Ayala 30th and iSquare sites.",
      author:'Admin',
      date:'June 29, 2021',
      url: '',
      origin: 'Manila'
    },{
      location:"Admin",
      header:"More Content Soon",
      byline: "",
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
      fragment: "",
      article:"",
      author:'Admin',
      date:'June 2, 2021',
      url: '',
      origin: 'Manila'
    }]
  }else if(this.routes.snapshot.url.toString().includes('marketing-homepage')){
    this.articles = [{
      location:"Marketing",
      header:"",
      byline: "",
      multimedia:"http://181.114.12.81/intranet/assets/marketing_image_2.jpg",
      fragment: "Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work....",
      article:"Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aim to create awareness for Great Place to Work PH and to educate and help other companies strengthen their employer branding.",
      author:'Marketing',
      date:'',
      url: '',
      origin: 'Manila'
    },{
      location:"Marketing",
      header:"NEARSOL and Great Place to Work Video Podcast",
      byline: ": Employer Branding Campaign",
      multimedia:"http://181.114.12.81/intranet/assets/marketing_image_1.jpg",
      fragment: "Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work....",
      article:"Our new Country Manager, Tonichi Achurra - Parekh will appear in a video podcast hosted by Great Place to Work. The podcast aim to create awareness for Great Place to Work PH and to educate and help other companies strengthen their employer branding.",
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
      multimedia:"http://181.114.12.81/intranet/assets/op_image_1.jpg",
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
      multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_5.png",
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
      fragment: "Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
      article:"Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
      author:'Recruitment',
      date:"June 17, 2021",
      url: '',
      origin:'Manila'
    },{
      location:"Recruitment",
      header:"NIA",
      byline: "NEARSOL Intelligence Automation",
      multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
      fragment: "We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity.",
      article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
      author:'Recruitment',
      date:'June 28, 2021',
      url: 'https://nearsol.us/nia-manila/',
      origin: 'Manila'
    },{
      location:"Recruitment",
      header:"More Content Soon",
      byline: "",
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
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
      multimedia:"http://181.114.12.81/intranet/assets/soon.png",
      fragment: "",
      article:"",
      author:'Recruitment',
      date:'June 28, 2021',
      url: '',
      origin: 'Manila'
    },]
  }
  }

  setSelection(sel:number){
    if(this.articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }
}
