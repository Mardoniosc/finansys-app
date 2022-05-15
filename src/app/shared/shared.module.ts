import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ButtonSecundaryComponent } from './components/button/button-secundary/button-secundary.component';

@NgModule({
  declarations: [ButtonComponent, ButtonSecundaryComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ButtonComponent, ButtonSecundaryComponent],
})
export class SharedModule {}
