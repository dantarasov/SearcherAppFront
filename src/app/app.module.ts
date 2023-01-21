import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearcherService } from './searcher.service';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { MeetingsPageComponent } from './meetings-page/meetings-page.component';
import { FindSearcherPageComponent } from './find-searcher-page/find-searcher-page.component';
import { FindMeetingPageComponent } from './find-meeting-page/find-meeting-page.component';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'', component: AppComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'meetings', component: MeetingsPageComponent },
  { path: 'findmeeting', component: FindMeetingPageComponent },
  { path: 'findseracher', component: FindSearcherPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MeetingsPageComponent,
    FindSearcherPageComponent,
    FindMeetingPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [SearcherService], 
  bootstrap: [AppComponent,
    MeetingsPageComponent,
    FindSearcherPageComponent,
    FindMeetingPageComponent]
})
export class AppModule { }
