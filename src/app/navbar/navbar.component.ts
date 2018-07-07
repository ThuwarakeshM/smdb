import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mods = [
    'Highlights',
    'Themes',
    'Forecasts',
    'Competition',
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigate(e: string) {
    this.router.navigateByUrl('/' + e.toLowerCase());
  }

}
