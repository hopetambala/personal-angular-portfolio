import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { PCollaborationComponent } from './pages/p-collaboration/p-collaboration.component';
import { PCitizenComponent } from './pages/p-citizen/p-citizen.component';
library.add(fas);


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'collaboration', component: PCollaborationComponent},
  { path: 'citizen', component: PCitizenComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PCollaborationComponent,
    PCitizenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule // Add this
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
