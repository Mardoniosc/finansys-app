import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobReportsRoutingModule } from './mob-reports-routing.module';
import { MobReportsComponent } from './pages/mob-reports/mob-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MobReportsComponent
  ],
  imports: [
    CommonModule,
    MobReportsRoutingModule,
    SharedModule
  ]
})
export class MobReportsModule { }
