// Angular imports
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// Root declarations on application
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { LayoutModule } from './layout/layout.module';

// Pages
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    // Created modules
    PagesModule,
    LayoutModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
