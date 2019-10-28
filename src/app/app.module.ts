import { BrowserModule} from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteformComponent } from './qouteform/qouteform.component';
import { QouteDetailsComponent } from './qoute-details/qoute-details.component';
import { CountInputComponent } from './count-input/count-input.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteformComponent,
    QouteDetailsComponent,
    CountInputComponent,
    DateCountPipe
  ],
  imports: [
  
    BrowserModule,
    FormsModule
    
    
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
