import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Intranet Forms';
  
  ngOnInit(): void {
    this.articles = [
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
        origin
      },
      {
        location:"Global",
        header:"Father’s Day at NEARSOL",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
        fragment: "It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL.",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad",
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin
      },
      {
        location:"Global",
        header:"Forms",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_2.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin
      },
      {
        location:"Global",
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
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: '',
        origin
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
