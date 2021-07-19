import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from './articles';
import { AuthServiceService } from './auth-service.service';
import { Users } from './users';
import { ApiServiceService } from './api-service.service';
import { delay, map,  tap } from "rxjs/operators";
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router, private _authService: AuthServiceService, public route: ActivatedRoute, public apiService:ApiServiceService) { }

  title = 'NEARSOL';
  username:string = null;
  password:string = null;
  current_site:string = 'Global';
  global_dir:string = 'Inactive';
  selectedOption:string = 'HOME';
  searchText:string = null;
  search:boolean = false;
  selected_article:Articles = new Articles;

  sites: string[] = [];
  allArticles:Articles[] = [];
  searchRes:Articles[] = [new Articles];

  ngOnInit() {

    this.sites = ['Global', 'Guatemala', 'Manila', 'Iloilo', 'Colombia'];

    this.allArticles = [
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
        origin: 'Manila-HR'
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
        origin: 'Manila-HR'
      },
      {
        location:"Human Resources",
        header:"Payroll Update",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/fn_image_1.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila-HR'
      },
      {
        location:"Human Resources",
        header:"Annual Wellness Examination",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/an_image_1.png",
        fragment: "",
        article: '',
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila-HR'
      },
      {
        location:"Human Resources",
        header:"Forms",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_2.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:'June 17, 2021',
        url: '',
        origin: 'Manila-HR'
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
        origin: 'Manila-HR'
      },
      {
        location:"Global",
        header:"Core Value of the Month",
        byline: ": Results-Driven",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "Being a person that is results-driven means that you are focused and obsessed with achieving a great outcome.",
        article:"Being a person that is results-driven means that you are focused and obsessed with achieving a great outcome. You don’t want to just compete; you want to WIN!",
        author:'Human Resources',
        date:'June 17, 2021',
        url: 'https://nearsol.us/',
        origin:"Global Manila"
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
        origin:"Global Manila"
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
        origin:"Global Manila"
      },
      {
        location:'Global',
        header:"NIA",
        byline: ': NEARSOL Intelligence Automation',
        multimedia:"http://181.114.12.81/intranet/assets/recruitment_image_1.png",
        fragment: "We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity.",
        article:"We proudly present to you NIA, NEARSOL Recruitment Chatbot Recruitment Tool. NIA helps us with lead generation, process guidance and does all that while projecting our brand identity. She is not just a chatbot, she is so much more!",
        author:'Human Resources',
        date:"June 17, 2021",
        url: 'https://nearsol.us/nia-manila/',
        origin:"Global Manila"
      },
      {
        location:'Global',
        header:"Guatemala",
        byline: '',
        multimedia:"./assets/gt_image_1.jpg",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Global Guatemala"
      },
      {
        location:'Global',
        header:"Colombia",
        byline: '',
        multimedia:"./assets/cl_image_1.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Global Colombia"
      },
      {
        location:'Global',
        header:"Iloilo",
        byline: '',
        multimedia:"./assets/il_image_1.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:"Global Iloilo"
      },
      {
        location:"Manila",
        header:"Pride Month 2021",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_5.png",
        fragment: "June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        article:"June is PRIDE Month! It's time to celebrate our courageous and colorful brothers and sisters in the LGBTQIA+ community! Be proud of who you are and say #IAMINCLUDED",
        author:'Human Resources',
        date:'June, 17 2021',
        url: '',
        origin:'Manila'
      },
      {
        location:"Manila",
        header:"Father's Day at NEARSOL",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/hr_image_1.png",
        fragment: "It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL.",
        article:"It's time to honor and recognize our hardworking and awesome Fathers/Dads/Papas/Tatays/Papsy at NEARSOL. Show your love and appreciation to all Dads by creating a TikTok video for a chance to win awesome prizes during the Father’s Day Virtual Party on June 18, 2021! #NearsolSuperDad.",
        author:'Human Resources',
        date:'June, 17 2021',
        url: '',
        origin:'Manila'
      },
      {
        location:"Manila",
        header:"Top Performers of the Month",
        byline: '',
        multimedia:"http://181.114.12.81/intranet/assets/op_image_1.jpg",
        fragment: "",
        article:"",
        author:'Opeartions',
        date:'June, 17 2021',
        url:'',
        origin:'Manila'
      },
      {
        location:'Manila',
        header:"Employee Referral Program",
        byline: 'Refer a friend and receive a P10,000 incentive',
        multimedia:"./assets/recruitment_image_2.png",
        fragment: "Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        article:"Refer a friend and receive the payouts on the 3rd and 6th months of the applicant’s joining date.",
        author:'Recruitment',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:'Manila',
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
        location:'Manila',
        header:"Timekeeper Reminders",
        byline: '',
        multimedia:"./assets/wf_image_1.png",
        fragment: "",
        article:"",
        author:'Workforce',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      },
      {
        location:'Manila',
        header:"Annual Wellness Examination",
        byline: '',
        multimedia:"./assets/an_image_1.png",
        fragment: "",
        article:"",
        author:'Human Resources',
        date:"June 17, 2021",
        url: '',
        origin:'Manila'
      }
    ];


  }

  getAuth(): boolean {
    return this._authService.isAuthenticated();
  }

  logOut() {
    this._authService.changeAuth(false);
    console.log(this._authService.isAuthenticated());
  }

  login() {
    this._authService.changeAuth(false);
    this.apiService.login({username:this.username, password:this.password}).subscribe((usr:Users)=>{
      if(usr.idusers != 'NULL'){
        if(usr.active == '1'){
          this._authService.changeAuth(true);
          this._router.navigate(["./home"]);
        }else{
          window.alert("User is not longer active");
        }
      }else{
        window.alert("Worng user or ad password please try again");
      }
    })
  }

  setCurrentSite(str: string) {
    this.current_site = str;
    if(str != "Global"){
    let ss:string = "../location/" + str;
    this._router.navigate([ss]);
    }else{
      this._router.navigate(["./home"])
    }
  }

  SetSel(sel:string){
    this.selectedOption = sel;
  }

  setSearch(){
    this.search = !this.search;
  }

  searchNow(){
    this.searchRes = [];
    this.allArticles.forEach(art=>{
      if(art.article.toUpperCase().includes(this.searchText.toUpperCase()) || art.header.toUpperCase().includes(this.searchText.toUpperCase()) || art.byline.toUpperCase().includes(this.searchText.toUpperCase())){
        this.searchRes.push(art);
      }
    })
  }

  keyupSearch(){
    document.getElementById("btn_search").click();
  }

  setSelection(selected:Articles){
    this.selected_article = selected;
  }
}
