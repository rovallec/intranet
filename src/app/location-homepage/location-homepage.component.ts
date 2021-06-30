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
        multimedia:"http://181.114.12.81/intranet/assets/manila_image_1.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'',
        url: '',
        origin:'Manila'
      },
      {
        location:"Manila",
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
        location:'Manila',
        header:"Employee Referral Program",
        byline: '',
        multimedia:"./assets/recruitment_image_2.png",
        fragment: "Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        article:"Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        author:'Recruitment',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:"Manila",
        header:"Client Site Tour",
        byline: "Ayala 30th and iSquare Sites Ocular Visit from a Potential Client",
        multimedia:"./assets/admin_image_1.jpg",
        fragment: "The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director, did a site tour for a potential client together with the representatives from a property broker.  Ocular inspection was done for both Ayala 30th and iSquare sites.",
        article:"The Admin-Facilities and IT team headed by Jon Caballero, Administrative Director, did a site tour for a potential client together with the representatives from a property broker.  Ocular inspection was done for both Ayala 30th and iSquare sites.",
        author:'Admin',
        date:'June 29, 2021',
        url: '',
        origin: 'Manila'
      },
      {
        location:'Manila',
        header:"Payroll update",
        byline: '',
        multimedia:"./assets/fn_image_1.png",
        fragment: "PAYROLL BANK FOR NEARSOL ORTIGAS IS SWITCHING TO ASIA UNITED BANK (AUB) EFFECTIVE JULY 5, 2021. Please fill out the bank forms and submit them immediately!  Please review attached FAQs and reach out to HR if you have questions",
        article:"PAYROLL BANK FOR NEARSOL ORTIGAS IS SWITCHING TO ASIA UNITED BANK (AUB) EFFECTIVE JULY 5, 2021. Please fill out the bank forms and submit them immediately!  Please review attached FAQs and reach out to HR if you have questions",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:"Manila",
        header:"NIA",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL Recruitment Chatbot. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity.",
        article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Human Resources',
        date:'June 28, 2021',
        url: 'https://nearsol.us/nia-manila/',
        origin: 'Manila'
      },
      {
        location:"Manila",
        header:"NEARSOL Manila Completes Annual Wellness Exam",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/admin_image_3.png",
        fragment: "Employees from NEARSOL Ortigas reported to Ayala 30th site for the first time this year to participate in Annual Wellness Examination.",
        article: "Employees from NEARSOL Ortigas reported to Ayala 30th site for the first time this year to participate in Annual Wellness Examination. More than 100 employees attended on June 26, 2021 following strict covid-19 protocol and a well planned schedule to ensure social distancing. The event started at 8am and ended at around 7pm. AWE was successfully completed in partnership with Maxicare and Keyman Insurances.",
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
}
