import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {

  rating_by_topic: any;
  rating_by_topic_opt: any;

  constructor() {
    this.rating_by_topic = {
      labels: ['Food Quality', 'Outlet Location', 'Delivery', 'Staffs', 'Menu'],
      datasets: [
        {
          type: 'line',
          label: 'PFChang Yelp Review Counts',
          backgroundColor: '#ffffff00',
          borderColor: '#1E88E5',
          data: [40, 43, 42, 44, 45],
          yAxisID: 'axis-1'
        },
        {
          label: 'PFChang Yelp Ratings',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [4.0, 4.3, 4.2, 4.4, 4.5],
          yAxisID: 'axis-2'
        },
        {
          type: 'line',
          label: 'PFChang Google Review Counts',
          backgroundColor: '#ffffff00',
          borderColor: '#7CB342',
          data: [37, 38, 39, 38, 40],
          yAxisID: 'axis-1'
        },
        {
          label: 'PFChang Google Ratings',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [3.7, 3.8, 3.9, 3.8, 4.0],
          yAxisID: 'axis-2'
        }
      ]
    };

    this.rating_by_topic_opt = {
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'axis-1',
        }, {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'axis-2',
          ticks: {
            min: 0,
            max: 5
          },
          // grid line settings
          gridLines: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        }],
      }
    };
  }

  ngOnInit() {
  }

}
