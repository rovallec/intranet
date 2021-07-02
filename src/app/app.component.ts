import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Articles } from './articles';
import { AuthServiceService } from './auth-service.service';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router, private _authService: AuthServiceService, public route: ActivatedRoute) { }

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
    },
    {username:'aaron.advincula', user_name:'Aaron Advincula', password:'Nearsol.2021'},
{username:'aaron.bautista', user_name:'Aaron Bautista', password:'Nearsol.2021'},
{username:'abraham.velasco', user_name:'Abraham Velasco', password:'Nearsol.2021'},
{username:'alaiza.delacruz', user_name:'Alaiza Dela Cruz', password:'Nearsol.2021'},
{username:'alexander.singo', user_name:'Alexander Singo', password:'Nearsol.2021'},
{username:'ann.javier', user_name:'Ann Marie Javier', password:'Nearsol.2021'},
{username:'arbie.ignacio', user_name:'Arbie Ignacio', password:'Nearsol.2021'},
{username:'arnie.romero', user_name:'Arnie Romero', password:'Nearsol.2021'},
{username:'art.aquino', user_name:'Art Aquino', password:'Nearsol.2021'},
{username:'aurelio.isidro', user_name:'Aurelio Ted Thadeus Isidro', password:'Nearsol.2021'},
{username:'carl.villaluz', user_name:'Carl Albert Villaluz', password:'Nearsol.2021'},
{username:'chednikki.jimenez', user_name:'Ched Nikki Jimenez', password:'Nearsol.2021'},
{username:'christ.puras', user_name:'Christ John Puras', password:'Nearsol.2021'},
{username:'christian.meonada', user_name:'Christian Meonada', password:'Nearsol.2021'},
{username:'christine.tuvilla', user_name:'Christine Ann Tuvilla', password:'Nearsol.2021'},
{username:'christopher.sangal', user_name:'Christopher Sangal', password:'Nearsol.2021'},
{username:'claire.ruflo', user_name:'Claire Ruflo', password:'Nearsol.2021'},
{username:'cristina.pasion', user_name:'Ma. Cristina Pasion', password:'Nearsol.2021'},
{username:'dorothy.pili', user_name:'Dorothy Sue Pili', password:'Nearsol.2021'},
{username:'earl.inlayo', user_name:'Earl Inlayo', password:'Nearsol.2021'},
{username:'elaine.edano', user_name:'Elaine Marion Edano', password:'Nearsol.2021'},
{username:'ella.divinagracia', user_name:'Ella Divinagracia', password:'Nearsol.2021'},
{username:'enrique.manus', user_name:'Enrique Manus', password:'Nearsol.2021'},
{username:'felmer.sanjuan', user_name:'Felmer San Juan', password:'Nearsol.2021'},
{username:'ferdinand.datuin', user_name:'Ferdinand Datuin', password:'Nearsol.2021'},
{username:'galaxy.salas', user_name:'Galaxy Salas', password:'Nearsol.2021'},
{username:'gerard.palado', user_name:'Gerard Palado', password:'Nearsol.2021'},
{username:'gil.concepcion', user_name:'Gil Concepcion', password:'Nearsol.2021'},
{username:'gillyn.catindig', user_name:'Gillyn Marie Catindig', password:'Nearsol.2021'},
{username:'inna.condinato', user_name:'Inna Camilla Condinato', password:'Nearsol.2021'},
{username:'jaypee.largosa', user_name:'Jaypee Largosa', password:'Nearsol.2021'},
{username:'jefrey.fernando', user_name:'Jefrey Fernando', password:'Nearsol.2021'},
{username:'jennifer.magsino', user_name:'Jennifer Magsino', password:'Nearsol.2021'},
{username:'jennifer.roco', user_name:'Jennifer Roco', password:'Nearsol.2021'},
{username:'jirus.bustamante', user_name:'Jirus Cedric Bustamante', password:'Nearsol.2021'},
{username:'jo-anne.gepolio', user_name:'Jo-Anne Gepolio', password:'Nearsol.2021'},
{username:'joaida.mejico', user_name:'Joaida Mejico', password:'Nearsol.2021'},
{username:'joemar.anacion', user_name:'Joemar Anacion', password:'Nearsol.2021'},
{username:'johanna.salazar', user_name:'Johanna Salazar', password:'Nearsol.2021'},
{username:'john.amores', user_name:'John Amores', password:'Nearsol.2021'},
{username:'john.licudine', user_name:'John Emerson Licudine', password:'Nearsol.2021'},
{username:'jon.caballero', user_name:'Jon Caballero', password:'Nearsol.2021'},
{username:'josephine.baylon', user_name:'Josephine Baylon', password:'Nearsol.2021'},
{username:'joycee.herminio', user_name:'Joycee Felicilda Herminio', password:'Nearsol.2021'},
{username:'judy.bangco', user_name:'Judy Ann Bangco', password:'Nearsol.2021'},
{username:'katherine.quesada', user_name:'Katherine Quesada', password:'Nearsol.2021'},
{username:'kendrick.ocampo', user_name:'Kendrick Ocampo', password:'Nearsol.2021'},
{username:'kristine.carrera', user_name:'Kristine Carrera', password:'Nearsol.2021'},
{username:'leonico.blancia', user_name:'Leonico Blancia', password:'Nearsol.2021'},
{username:'lester.cui', user_name:'Lester Cui', password:'Nearsol.2021'},
{username:'lorence.cruzat', user_name:'Lorence Cruzat', password:'Nearsol.2021'},
{username:'luis.ortiz', user_name:'Luis Ortiz', password:'Nearsol.2021'},
{username:'mark.bongar', user_name:'Mark Joseph Bongar', password:'Nearsol.2021'},
{username:'mark.casumpang', user_name:'Mark Casumpang', password:'Nearsol.2021'},
{username:'mark.roxas', user_name:'Mark Anthony Roxas', password:'Nearsol.2021'},
{username:'melanie.bino', user_name:'Melanie Bino', password:'Nearsol.2021'},
{username:'menina.condado', user_name:'Menina Elysse Condado', password:'Nearsol.2021'},
{username:'michael.bellido', user_name:'Michael Bellido', password:'Nearsol.2021'},
{username:'michael.modesto', user_name:'Michael William Modesto', password:'Nearsol.2021'},
{username:'michael.tanael', user_name:'Michael Tanael', password:'Nearsol.2021'},
{username:'michael.villamiel', user_name:'Michael Villamiel', password:'Nearsol.2021'},
{username:'michelle.gonzales', user_name:'Michelle Gonzales', password:'Nearsol.2021'},
{username:'miguel.sacluti', user_name:'Miguel Sacluti', password:'Nearsol.2021'},
{username:'nilo.cruz', user_name:'Nilo Cruz', password:'Nearsol.2021'},
{username:'oscar.manuel', user_name:'Oscar Manuel', password:'Nearsol.2021'},
{username:'patrick.gariando', user_name:'Patrick Gariando', password:'Nearsol.2021'},
{username:'ralph.camago', user_name:'Ralph Camago', password:'Nearsol.2021'},
{username:'ramon.guevarra', user_name:'Ramon Guevarra III', password:'Nearsol.2021'},
{username:'renante.datuin', user_name:'Renante Datuin', password:'Nearsol.2021'},
{username:'rex.luangco', user_name:'Rex Luangco', password:'Nearsol.2021'},
{username:'reynand.lopez', user_name:'Reynand Lopez', password:'Nearsol.2021'},
{username:'rhodora.nisperos', user_name:'Rhodora Nisperos', password:'Nearsol.2021'},
{username:'rummel.amponin', user_name:'Rummel Amponin', password:'Nearsol.2021'},
{username:'security.manila', user_name:'Security Manila', password:'Nearsol.2021'},
{username:'sharon.delapena', user_name:'Sharon Dela Peña', password:'Nearsol.2021'},
{username:'shiela.mendoza', user_name:'Shiela Mendoza', password:'Nearsol.2021'},
{username:'spencer.barrameda', user_name:'Spencer Barrameda', password:'Nearsol.2021'},
{username:'stephen.abriol', user_name:'Stephen Abriol', password:'Nearsol.2021'},
{username:'theresa.ferrer', user_name:'Theresa Ferrer', password:'Nearsol.2021'},
{username:'tonichi.parekh', user_name:'Tonichi Parekh', password:'Nearsol.2021'},
{username:'vhia.marcelo', user_name:'Vhia Patrice Marcelo', password:'Nearsol.2021'},
{username:'wilmart.abellera', user_name:'Wilmart Abellera', password:'Nearsol.2021'},
{username:'zyramae.blanco', user_name:'Zyra Mae Blanco', password:'Nearsol.2021'}
  ]

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
    let pss:boolean = false;
    let us:boolean = false;
    this._authService.changeAuth(false);
    this.users.forEach((user: Users) => {
      if (user.username == this.username) {
        if (user.password == this.password) {
          this._authService.changeAuth(true);          
          this._router.navigate(["./home"]);
        }else{
          pss = true;
        }
      }else{
        us = true
      }
    })
    if(us = true && !this._authService.isAuthenticated()){
      if(pss = true){
        window.alert("Worng user or ad password please try again");
      }
    }
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
