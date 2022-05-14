import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobReportsComponent } from './pages/mob-reports/mob-reports.component';

const routes: Routes = [
  { path: '', component: MobReportsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobReportsRoutingModule { }
