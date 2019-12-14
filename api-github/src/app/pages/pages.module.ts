import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Layout
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [
    HomeComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // Declarar no export para que o componente seja acessivel em outro modulo
  exports: [
    HomeComponent,
    InstructionsComponent
  ]
})
export class PagesModule { }
