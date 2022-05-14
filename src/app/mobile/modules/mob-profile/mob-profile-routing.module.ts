import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobProfileComponent } from './pages/mob-profile/mob-profile.component';

const routes: Routes = [
  { path: '', component: MobProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobProfileRoutingModule { }
