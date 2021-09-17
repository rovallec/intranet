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
  origin: string = '';
  artDefault: Articles = this.apiService.artDefault;
  canApprove: boolean = false;

  ngOnInit() {
    let artDefault: Articles = this.apiService.artDefault;
    this.sites = ['Global', 'Guatemala', 'Manila', 'Iloilo', 'Colombia'];

    artDefault.origin = this.origin;
    artDefault.location = 'Global';

    for (let index = 0; index < 7; index++) {
      this.allArticles[index] = artDefault;
    }

    this.getPost(artDefault);
  }

  getPost(art: Articles) {
    this.apiService.getPost(art).subscribe((posts: Articles[]) => {
      this.allArticles = posts;
    })
  }

  getAuth(): boolean {
    return this._authService.isAuthenticated();
  }

  logOut() {
    this._authService.changeAuth(false);
    console.log(this._authService.isAuthenticated());
  }

  approval_request(){
    this._router.navigate(['./approval']);
  }

  confirm_approval() {
    this._router.navigate(['./confirm_approval']);
  }

  login() {
    this._authService.changeAuth(false);
    this.apiService.login({username:this.username, password:this.password}).subscribe((usr:Users)=>{
      if (usr.idusers != 'NULL') {
        if (usr.active == '1') {
          this._authService.changeAuth(true);
          this._authService.saveUsr(usr);
          this.setCanApprove();
          this._router.navigate(["./home"]);
        } else if (usr.active == '2') {
          this._authService.changeAuth(true);
          this._authService.autUser = usr;
          this._authService.saveUsr(usr);
          this._router.navigate(['./change_password']);
        } else {
          window.alert("User is not longer active");
        }
      } else {
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

  setCanApprove() {
    this.canApprove = this.apiService.user.id_role == '2';
  }

}
