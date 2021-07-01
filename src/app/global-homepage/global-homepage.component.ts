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
        location:"Global",
        header:"Core Value of the Month",
        byline: ": Caring",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "Caring is one of the strongest values that we see in YOU! Your ability to care for each other shows that we are a FAMILY. At NEARSOL, the core value of caring is so strong that it just comes naturally to all employees.",
        article:"Caring is one of the strongest values that we see in YOU! Your ability to care for each other shows that we are a FAMILY. At NEARSOL, the core value of caring is so strong that it just comes naturally to all employees.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: 'https://nearsol.us/',
        origin:"Manila"
      },
      {
        location:"Global",
        header:"Pride Month 2021",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_5.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:"Manila"
      },
      {
        location:"Global",
        header:"Father's Day at NEARSOL",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
        fragment: "It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL.",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:"Manila"
      },
      {
        location:'Global',
        header:"NIA",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        article:"We proudly present to you NIA, NEARSOL's recruitment chatbot. NIA helps with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Recruitment',
        date:"June 17, 2021",
        url: 'https://nearsol.us/nia-manila/',
        origin:"Manila"
      },
      {
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
        location:'Global',
        header:"The Noche Buena Project 2021",
        byline: '',
        multimedia:"./assets/il_image_1.png",
        fragment: "Our ability to care for each other shows we are FAMILY.",
        article:"Our ability to care for each other shows we are FAMILY.",
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
