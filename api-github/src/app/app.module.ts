import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

// Services
import { RepositoriesService } from './services/repositories/repositories.service';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    RepositoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
