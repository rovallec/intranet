import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Articles } from '../articles';

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

    for (let index = 0; index < 7; index++) {
      this.articles[index] = artDefault;
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

  getHeight(object:string){
    let height = document.getElementById(object).offsetHeight
    if((height/parseInt(document.getElementById(object).style.lineHeight)) > 1){
      return true;
    }else{
      return false;
    }
  }
}
