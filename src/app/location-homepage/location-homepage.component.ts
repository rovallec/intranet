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
        header:"",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/manila_image_1.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'',
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
        header:"",
        byline: "Pride Month 2021",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_5.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:'Manila'
      },
      {
        location:'Global',
        header:"Employee Referral Program",
        byline: ': Refer a friend and receive a P10,000 incentive',
        multimedia:"./assets/recruitment_image_2.png",
        fragment: "Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        article:"Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
        header:"Client Site Tour",
        byline: "Ayala 30th and iSquare Sites Ocular Visit from a Potential Client",
        multimedia:"http://181.114.12.81/intranet/assets/admin_image_1.jpeg",
        fragment: "The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director...",
        article:"The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director, did a site tour for a potential client together with the representatives from a property broker.  Ocular inspection was done for both Ayala 30th and iSquare sites.",
        author:'Admin',
        date:'June 29, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:'Global',
        header:"Payroll update",
        byline: '',
        multimedia:"./assets/fn_image_1.png",
        fragment: "",
        article:"",
        author:'Finance',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:"Global",
        header:"NIA",
        byline: "NEARSOL Intelligence Automation",
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation....",
        article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Admin',
        date:'June 28, 2021',
        url: 'https://nearsol.us/nia-manila/',
        origin: 'Manila'
      },
      {
        location:"Global",
        header:"Annual Wellness Examination",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/admin_image_3.png",
        fragment: "Employees from NEARSOL Ortigas reported to the ayala 30th site for the first time this year to participate in this year's Annual Wellness Examination.",
        article: "Employees from NEARSOL Ortigas reported to the ayala 30th site for the first time this year to participate in this year's Annual Wellness Examination.",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin:'Manila'
      },
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
