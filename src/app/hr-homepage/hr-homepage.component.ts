import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';
import { ActivatedRoute } from "@angular/router";
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService, private routes:ActivatedRoute, private apiService: ApiServiceService) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Intranet Forms';
  img_date:string = 'June 16, 2021';
  origin: string = 'Manila';
  
  ngOnInit(): void {
    let artDefault: Articles = this.apiService.artDefault;
    artDefault.origin = this.origin;

    for (let index = 0; index < 7; index++) {
      this.articles[index] = artDefault;
    }

    if(this.routes.snapshot.url.toString().includes('hr-homepage')){
      artDefault.location = 'Human Resources';
       
    }else if(this.routes.snapshot.url.toString().includes('admin-homepage')){
      artDefault.location = 'Admin';
      
    }else if(this.routes.snapshot.url.toString().includes('marketing-homepage')){
      artDefault.location = 'Marketing';
      ;    
    }else if(this.routes.snapshot.url.toString().includes('ops-homepage')){
      artDefault.location = 'Operations';

    }else if(this.routes.snapshot.url.toString().includes('re-homepage')){
      artDefault.location =  'Recruitment';
    }

    this.getPost(artDefault);    
  }

  getPost(art: Articles) {
    this.apiService.getPost(art).subscribe((posts: Articles[]) => {
      this.articles = posts;
    }) 
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
