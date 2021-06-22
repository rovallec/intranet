import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Articles } from './articles';
import { AuthServiceService } from './auth-service.service';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router, private _authService: AuthServiceService) { }

  title = 'NEARSOL';
  username:string = null;
  password:string = null;
  current_site:string = 'Global';
  global_dir:string = 'Inactive';
  selectedOption:string = 'HOME';
  searchText:string = null;
  search:boolean = false;
  selected_article:Articles = new Articles;

  users: Users[] = [];
  sites: string[] = [];
  allArticles:Articles[] = [];
  searchRes:Articles[] = [new Articles];

  ngOnInit() {
    this.users = [{
      username: 'raul.ovalle',
      user_name: 'Raul Ovalle',
      password: 'hello'
    },
    {
      username: 'carl.villaluz',
      user_name: 'Carl Villaluz',
      password: 'Nearsol.2021'
    },
    {
      username: 'violet.pereda',
      user_name: 'Violet Pereda',
      password: 'Marketing2021'
    }]

    this.sites = ['Global', 'Guatemala', 'Manila', 'Iloilo', 'Colombia'];

    this.allArticles = [
      {
        location:"Global",
        header:"Core Value of the Month",
        byline: "Results-Driven",
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
        byline: 'NEARSOL Intelligence Automation',
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
        multimedia:"./assets/gt_image_1.jpg",
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
    this.users.forEach((user: Users) => {
      if (user.username == this.username) {
        if (user.password == this.password) {
          this._authService.changeAuth(true);
          this._router.navigate(["./home"])
        }
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
