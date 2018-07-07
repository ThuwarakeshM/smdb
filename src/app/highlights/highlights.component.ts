import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      labels: ['2012', '2015', '2016', '2017', '2018'],
      datasets: [
        {
          label: 'PFChang Yelp Ratings',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [4.0, 4.3, 4.2, 4.4, 4.5]
        },
        {
          label: 'PFChang Google Ratings',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [3.7, 3.8, 3.9, 3.8, 4.0]
        }
      ]
    };
  }

  ngOnInit() {
  }

}
