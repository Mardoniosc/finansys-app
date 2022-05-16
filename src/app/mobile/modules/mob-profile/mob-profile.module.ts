import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobProfileRoutingModule } from './mob-profile-routing.module';
import { MobProfileComponent } from './pages/mob-profile/mob-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MobProfileComponent],
  imports: [CommonModule, MobProfileRoutingModule, SharedModule],
})
export class MobProfileModule {}
