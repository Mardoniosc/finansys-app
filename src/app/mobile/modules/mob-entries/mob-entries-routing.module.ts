import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobEntryFormComponent } from './pages/mob-entry-form/mob-entry-form.component';
import { MobEntryListComponent } from './pages/mob-entry-list/mob-entry-list.component';

const routes: Routes = [
  { path: '', component: MobEntryListComponent },
  { path: 'new', component: MobEntryFormComponent },
  { path: ':id/edit', component: MobEntryFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobEntriesRoutingModule {}
