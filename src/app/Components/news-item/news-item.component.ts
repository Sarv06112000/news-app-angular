import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() urlToImage: string = "";
  @Input() description: string = "";
  @Input() title: string = "";
  @Input() url: string = "";
}
