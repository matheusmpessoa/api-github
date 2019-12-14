import { NgModule } from '@angular/core';

// Layout
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  // Declarar no export para que o componente seja acessivel em outro modulo
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
