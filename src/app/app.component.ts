import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pipes';
  params = {
    "url": "https://api.thecatapi.com/v1/images/search?limit=10",
    "width": 176,
    "height": 540
  };
  data: any;
  // data: {
  //   id: number,
  //   url: string,
  //   width: number,
  //   height: number,
  //   [key: string]: any
  // }[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFromApi(this.params.url).subscribe(response => this.data = response);
  }
}
