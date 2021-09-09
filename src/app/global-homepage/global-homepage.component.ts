import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Articles } from '../articles';
import { isNullOrUndefined } from 'is-what';

@Component({
  selector: 'app-global-homepage',
  templateUrl: './global-homepage.component.html',
  styleUrls: ['./global-homepage.component.css']
})
export class GlobalHomepageComponent implements OnInit {

  constructor(public apiService:ApiServiceService) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Core Value of the Month: Results-Driven';
  img_date:string = 'June 16, 2021';
  origin: string = 'Home';

  ngOnInit(): void {
    let artDefault: Articles = this.apiService.artDefault;
    artDefault.origin = this.origin;
    artDefault.location = 'Global';
    this.selected_article = artDefault;

    for (let index = 0; index < 7; index++) {
      this.articles[index] = artDefault;
    }

    this.getPost(this.selected_article);
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

  setSelection(sel:number){
    if(this.articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }

  getHeight(object:string){
    let height = document.getElementById(object).offsetHeight
    if((height/parseInt(document.getElementById(object).style.lineHeight)) > 1){
      return true;
    }else{
      return false;
    }
  }
}
