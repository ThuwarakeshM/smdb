import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { ChartModule } from "primeng/chart";

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ThemesComponent } from './themes/themes.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { CompetitionComponent } from './competition/competition.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'highlights', component: HighlightsComponent },
  { path: 'themes', component: ThemesComponent },
  { path: 'forecasts', component: ForecastsComponent },
  { path: 'competition', component: CompetitionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    HighlightsComponent,
    ThemesComponent,
    ForecastsComponent,
    CompetitionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToolbarModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
