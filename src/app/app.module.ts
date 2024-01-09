import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './common-components/navmenu/navmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './common-components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { ExporterService } from './servicios/api/exporter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    routingComponents,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatNativeDateModule,
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ExporterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
