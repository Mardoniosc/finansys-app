import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ButtonSecundaryComponent } from './components/button/button-secundary/button-secundary.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonSecundaryComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule],
  exports: [
    ButtonComponent,
    ButtonSecundaryComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
