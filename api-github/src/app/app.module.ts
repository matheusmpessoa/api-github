// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Root declarations on application
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layout
import { LayoutModule } from './layout/layout.module';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { InstructionsComponent } from './pages/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    LayoutModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
