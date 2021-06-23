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
  img_foot: string = 'Pride Month';
  img_date:string = 'June 16, 2021';

  ngOnInit(): void {
    this.articles = [
      {
        location:"Global",
        header:"Pride Month 2021",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_5.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'HR',
        date:'June, 17 2021',
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
        header:"Father's Day at NEARSOL",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
        fragment: "It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL.",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad.",
        author:'HR',
        date:'June, 17 2021',
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
        header:"Employee Referral Program",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_2.png",
        fragment: "Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        article:"Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        author:'HR',
        date:'June, 17 2021',
        url: 'https://nearsol.us/nia-manila/ ',
        origin:'Manila'
      },
      {
        location:'Global',
        header:"Finance",
        byline: '',
        multimedia:"./assets/fn_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:'Global',
        header:"Workforce",
        byline: '',
        multimedia:"./assets/wf_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:'Global',
        header:"Annual Wellness",
        byline: '',
        multimedia:"./assets/an_image_1.png",
        fragment: "",
        article:"",
        author:'HR',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
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
