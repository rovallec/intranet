import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Articles } from '../articles';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-hr-homepage',
  templateUrl: './hr-homepage.component.html',
  styleUrls: ['./hr-homepage.component.css']
})
export class HrHomepageComponent implements OnInit {

  constructor(private _authService: AuthServiceService) { }

  selected_article:Articles = new Articles;
  articles: Articles[] = [];
  img_foot: string = 'Intranet Forms';
  
  ngOnInit(): void {
    this.articles = [
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      },
      {
        location:"Global",
        header:"",
        byline: "",
        multimedia:"http://181.114.12.81/intranet/assets/homepage_image.png",
        fragment: "",
        article:"",
        author:'HR',
        date:'June 17, 2021',
        url: ''
      }
    ]
  }

  setSelection(sel:number){
    let filtered_articles:Articles[] = [];
    this.articles.forEach(article=>{
      if(article.location == "Global"){
        filtered_articles.push(article);
      }
    });
    if(filtered_articles.length > 0){
      this.selected_article = this.articles[sel];
    }else{
      window.alert("Uppps! Something went wrong, please contact your Administrator");
    }
  }

}
