import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchesGridComponent } from './modules/matches-grid/matches-grid.component';
import { SportsbookTreeComponent } from './modules/sportsbook-tree/sportsbook-tree.component';
import { MatchesRequestService } from './shared/services/matches/matches-request-service.service';
import { SportsRequestService } from './shared/services/sports/sports-request-service.service';
import { CountriesComponent } from './modules/sportsbook-tree/countries/countries.component';
import { LeaguesComponent } from './modules/sportsbook-tree/leagues/leagues.component';
import { DatetimePipe } from './shared/pipes/datetime.pipe';
import { HeaderComponent } from './shared/layout/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    MatchesGridComponent,
    SportsbookTreeComponent,
    CountriesComponent,
    LeaguesComponent,
    DatetimePipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SportsRequestService , MatchesRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
