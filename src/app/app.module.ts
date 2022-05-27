import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhotoHandlerComponent } from './photo-handler/photo-handler.component';
import { PhotoSingleComponent } from './photo-single/photo-single.component';
import { PhotoInfoComponent } from './photo-info/photo-info.component';
import { MoreParamComponent } from './more-param/more-param.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoHandlerComponent,
    PhotoSingleComponent,
    PhotoInfoComponent,
    MoreParamComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
