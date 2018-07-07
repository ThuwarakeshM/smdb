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

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { ThemesComponent } from './themes/themes.component';
import { ForecastsComponent } from './forecasts/forecasts.component';
import { CompetitionComponent } from './competition/competition.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Highlights', component: HighlightsComponent },
  { path: 'Themes', component: ThemesComponent },
  { path: 'Forecasts', component: ForecastsComponent },
  { path: 'Competition', component: CompetitionComponent },
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
    CompetitionComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
