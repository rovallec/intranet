import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';
import { isNullOrUndefined } from 'is-what';

@Component({
  selector: 'app-location-homepage',
  templateUrl: './location-homepage.component.html',
  styleUrls: ['./location-homepage.component.css']
})
export class LocationHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService, private routes:ActivatedRoute, private apiService: ApiServiceService) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = '';
  img_date:string = '';
  origin: string = 'Manila';

  ngOnInit(): void {
    let artDefault: Articles = this.apiService.artDefault;
    artDefault.origin = this.origin;
    artDefault.location =  'Manila';
    this.selected_article = artDefault;

    for (let index = 0; index < 7; index++) {
      this.articles[index] = artDefault;
    }

    this.getPost(this.selected_article);
  }

  setSelection(sel:number){
    if(this.articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }

  getHeight(object:string){
    let height = document.getElementById(object).offsetHeight;
    if((height/24) <= 1){
      return true;
    }else{
      return false;
    }
  }

  getPost(art: Articles) {
    this.apiService.getPost(art).subscribe((posts: Articles[]) => {
      if ((posts==null) || (posts==[]) || (posts.length==0)) {
        this.articles = [];
        this.articles.push(this.selected_article);
      } else {
        this.articles = posts;
      }
    })
  }

  setArticlesFragment(str:string){
    let ss:string = this.apiService.setArticlesFragment(str);
    return ss;
  }
}
