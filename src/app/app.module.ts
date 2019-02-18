import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {SlideshowModule} from 'ng-simple-slideshow';


import * as $ from 'jquery';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { PCollaborationComponent } from './pages/p-collaboration/p-collaboration.component';
import { PCitizenComponent } from './pages/p-citizen/p-citizen.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PPuenteAppComponent } from './pages/p-puente-app/p-puente-app.component';
import { PPuenteDashComponent } from './pages/p-puente-dash/p-puente-dash.component';
import { TimelineComponent } from './components/timeline/timeline.component';
library.add(fas);


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'collaboration', component: PCollaborationComponent},
  { path: 'citizen', component: PCitizenComponent},
  { path: 'puenteApp',component:PPuenteAppComponent},
  { path: 'puenteDash',component:PPuenteDashComponent},
  { path: 'timeline', component:TimelineComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    PCollaborationComponent,
    PCitizenComponent,
    CarouselComponent,
    SlideshowComponent,
    PPuenteAppComponent,
    PPuenteDashComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    Ng2CarouselamosModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
