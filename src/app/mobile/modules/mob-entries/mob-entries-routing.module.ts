import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobConfimDelComponent } from './pages/mob-confim-del/mob-confim-del.component';
import { MobDetailsComponent } from './pages/mob-details/mob-details.component';
import { MobEntryFormComponent } from './pages/mob-entry-form/mob-entry-form.component';
import { MobEntryListComponent } from './pages/mob-entry-list/mob-entry-list.component';

const routes: Routes = [
  { path: '', component: MobEntryListComponent },
  { path: 'new', component: MobEntryFormComponent },
  { path: ':id/edit', component: MobEntryFormComponent },
  { path: ':id/delete', component: MobConfimDelComponent },
  { path: ':id/detail', component: MobDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobEntriesRoutingModule {}
