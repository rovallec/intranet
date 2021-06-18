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

  ngOnInit(): void {
    this.articles = [
      {
        location:"Global",
        header:"Father's Day at NEARSOL",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad.",
        author:'HR',
        date:'June, 17 2021'
      },
      {
        location:'Global',
        header:"NIA: NEARSOL Intelligence Automation",
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'HR',
        date:"June 17, 2021"
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
