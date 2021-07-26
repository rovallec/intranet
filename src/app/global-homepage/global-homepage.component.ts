import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';

@Component({
  selector: 'app-global-homepage',
  templateUrl: './global-homepage.component.html',
  styleUrls: ['./global-homepage.component.css']
})
export class GlobalHomepageComponent implements OnInit {

  constructor() { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Core Value of the Month: Results-Driven';
  img_date:string = 'June 16, 2021';

  ngOnInit(): void {
    this.articles = [
      {
        id: '0',
        location:"Global",
        header:"Core Value of the Month",
        byline: " Caring",
        multimedia:"./assets/homepage_image.png",
        fragment: "Caring is one of the strongest values that we see in YOU! Your ability to care for each other shows that we are a FAMILY. At NEARSOL, the core value of caring is so strong that it just comes naturally to all employees.",
        article:"Caring is one of the strongest values that we see in YOU! Your ability to care for each other shows that we are a FAMILY. At NEARSOL, the core value of caring is so strong that it just comes naturally to all employees.",
        author:'Human Resources',
        date:'July 1, 2021',
        url: 'https://nearsol.us/',
        origin:"Manila"
      },
      {
        id: '0',
        location:"Global",
        header:"NEARSOL",
        byline: " Employee Hangout",
        multimedia:"./assets/hr_image_8.png",
        fragment: "The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        article:"The HR Engagement Team led by Mira Yza Costes, Joseph Daza, and Ibrahim Claravall, recently conducted an employee online hangout to promote June's core value of the month: Results-driven. The Employee Hangout is an online event where employees participate in games and learning sessions. The HR Engagement Team launched the Core Value edition last week and completed the roll out of the core values and the Employee Performance Reporting using the People Analyzer tool. Prizes were given to employees who actively participated in the sessions from all sites of NEARSOL PH. All Department heads agreed to use the People Analyzer, a tool used to evaluate employees by checking their adherence to NEARSOL's core Values and determining if employees are GWC compliant (Get it, Want it, Has the Capacity to do it). The NEARSOL Employee Hangout is a monthly engagement activity designed to provide fun, engaging online activity while promoting continuous learning experiences for NEARSOL PH employees.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:"Manila"
      },
      {
        id: '0',
        location:'Global',
        header:"NIA",
        byline: '',
        multimedia:"./assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        article:"We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Recruitment',
        date:"June 17, 2021",
        url: 'https://nearsol.us/nia-manila/',
        origin:"Manila"
      },
      {
        id: '0',
        location:"Global",
        header:"Client Site Tour",
        byline: '',
        multimedia:"./assets/admin_image_1.jpg",
        fragment: "The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
        article:"The Admin team headed by Jon Caballero, Administrative Director, organized a site tour for a potential client from a property broker company.  Ocular inspection was done for both The 30th Corporate Center and iSquare sites.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:"Manila"
      },
      {
        id: '0',
        location:'Global',
        header:"Bicycle Day",
        byline: '',
        multimedia:"./assets/gt_image_1.png",
        fragment: "At NEARSOL Guatemala, we strongly believe that recreation improves quality",
        article:"At NEARSOL Guatemala, we strongly believe that recreation improves quality of life. We love having happy and healthy associates!",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Guatemala"
      },
      {
        id: '0',
        location:'Global',
        header:"Customer Service Week",
        byline: '',
        multimedia:"./assets/cl_image_1.png",
        fragment: "We welcome and love the many personalities, backgrounds and stories that make-up the NEARSOL staff. We work hard to build a diverse and inclusive environment where everyone has the opportunity to learn and grow. ",
        article:"We welcome and love the many personalities, backgrounds and stories that make-up the NEARSOL staff. We work hard to build a diverse and inclusive environment where everyone has the opportunity to learn and grow. ",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Colombia"
      },
      {
        id: '0',
        location:'Global',
        header:"The Noche Buena Project 2021",
        byline: '',
        multimedia:"./assets/il_image_1.png",
        fragment: "The best way to find joy is to serve. At NEARSOL, we believe that there's no better way of spreading holiday cheer than to give back to the community.",
        article:"The best way to find joy is to serve. At NEARSOL, we believe that there's no better way of spreading holiday cheer than to give back to the community.",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Iloilo"
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
    console.log()
    if(this.articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }

  getHeight(object:string){
    let height = document.getElementById(object).offsetHeight
    if((height/parseInt(document.getElementById(object).style.lineHeight)) > 1){
      return true;
    }else{
      return false;
    }
  }
}
