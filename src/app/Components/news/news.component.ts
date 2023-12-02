import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
//import { Img } from '../../../assets/img-not-found.png';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  /**
   *
   */

  category: string;
  country: string;
  articles: any[];
  imgNotFound: string;
  //totalResult: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.category = "";
    this.country = "in";
    this.articles = [];
    this.imgNotFound = "../../../assets/img-not-found.png";
    //this.totalResult = 0;
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.data['category'];
    this.getData(this.category, this.country);
  }

  getData(category: string, country: string) {
    this.dataService.getData(category, country).subscribe((response) => {
      this.articles = response.articles;
      //this.totalResult = response.totalResult;
      console.log(this.articles);
    },
      (error) => {
        console.log("Error : " + error);
      });
  }

}
