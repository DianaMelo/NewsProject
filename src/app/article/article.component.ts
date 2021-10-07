import { _getFocusedElementPierceShadowDom } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public articles: Article[] = [];
  public apiCountry: string = '';
  public country: string = '';
  public category: string = '';
  public imgNull: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtQFrcuXoW6vricZTzQ7UMdg3Fh2q6wGNBg&usqp=CAU';

  constructor(private ArticleService: ArticleService) {}

  ngOnInit(): void {
    this.getArticles('pt','Portugal');
  }

  //news per country only
  getArticles(apiCountry: string = this.apiCountry, country: string = this.country) {
    this.country = country;
    this.ArticleService.getArticles(apiCountry).subscribe((result) => {
      this.articles = result.articles;
      //TEST ONLY
      console.log(this.articles);
    });
    //set apicountry accordingly to the selected country and "available" for getCategory()
    this.apiCountry = apiCountry;
  }

  //combined country and category news
   getCategory(category: string = this.category, apiCountry: string = this.apiCountry) {
     this.ArticleService
     .getCategory(category, apiCountry)
     .subscribe((result) => {
       this.articles = result.articles;
          //TEST ONLY
       console.log(this.articles);
       console.log(`Api country: ${this.apiCountry}`);
       console.log(`Category: ${category}`);
       console.log(`Country: ${this.country}`);
     });
   }
}

