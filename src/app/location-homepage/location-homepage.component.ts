import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';

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

    for (let index = 0; index < 7; index++) {
      this.articles[index] = artDefault;
    }

    this.getPost(artDefault);
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
    let height = document.getElementById(object).offsetHeight;
    if((height/24) <= 1){
      return true;
    }else{
      return false;
    }
  }

  getPost(art: Articles) {
    this.apiService.getPost(art).subscribe((posts: Articles[]) => {
      this.articles = posts;
    })
  }
}
