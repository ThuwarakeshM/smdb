import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  rating_data: any;
  rating_dist_data: any;
  rating_dist_summary: any;

  rating_dist_summary_opt: any;
  rating_opt: any;

  constructor() {
    this.rating_dist_summary = {
      labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
      datasets: [
        {
          label: 'PFChang Google Ratings',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 70, 56]
        },
      ]
    };

    this.rating_opt = {
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
    };

    this.rating_dist_summary_opt = {
      title: {
        display: true,
        text: 'Overall',
        fontSize: 16
      },
      legend: {
        display: false
      }
    };

    this.rating_data = {
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
        },
      ]
    };

    this.rating_dist_data = {
      labels: ['1 Star', '2 Star', '3 Star', '4 Star', '5 Star'],
      datasets: [
        {
          label: '2014',
          data: [65, 59, 80, 70, 56, 55, 40],
          fill: false,
          borderColor: '#186ba0'
        },
        {
          label: '2015',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#1f89ce'
        },
        {
          label: '2016',
          data: [70, 79, 89, 81, 73, 58, 45],
          fill: false,
          borderColor: '#1f89ce'
        }, {
          label: '2017',
          data: [75, 89, 78, 59, 47, 87, 63],
          fill: false,
          borderColor: '#4d90fe'
        },
        {
          label: '2018',
          data: [48, 68, 49, 88, 83, 97, 93],
          fill: false,
          borderColor: '#4dc0da'
        },
      ]
    };
  }

  ngOnInit() {
  }

}
