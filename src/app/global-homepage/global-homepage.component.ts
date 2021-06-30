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
        byline: ": Results-Driven",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "Being a person that is results-driven means that you are focused and obsessed with achieving a great outcome.",
        article:"Being a person that is results-driven means that you are focused and obsessed with achieving a great outcome. You don’t want to just compete; you want to WIN!",
        author:'HR',
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
        author:'HR',
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
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin:"Manila"
      },
      {
        location:'Global',
        header:"NIA",
        byline: ': NEARSOL Intelligence Automation',
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity.",
        article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'HR',
        date:"June 17, 2021",
        url: 'https://nearsol.us/nia-manila/',
        origin:"Manila"
      },
      {
        location:'Global',
        header:"Guatemala",
        byline: '',
        multimedia:"./assets/gt_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:"Guatemala"
      },
      {
        location:'Global',
        header:"Colombia",
        byline: '',
        multimedia:"./assets/cl_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:"Colombia"
      },
      {
        location:'Global',
        header:"Iloilo",
        byline: '',
        multimedia:"./assets/il_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:"Iloilo"
      }
    ]
  }

  setSelection(sel:number){
    let filtered_articles:Articles[] = [];
    this.articles.forEach(article=>{
      if(article.location == "Global"){
        filtered_articles.push(article);
      }
    });
    if(filtered_articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }

}
