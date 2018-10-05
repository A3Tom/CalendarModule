import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarViewComponent } from './shared/calendar-view/calendar-view.component';
import { CalendarDetailComponent } from './shared/calendar-detail/calendar-detail.component';
import { SplashScreenComponent } from './display/splash-screen/splash-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent,
    CalendarDetailComponent,
    SplashScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
