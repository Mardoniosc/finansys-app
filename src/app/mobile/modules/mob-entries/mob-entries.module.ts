import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobEntriesRoutingModule } from './mob-entries-routing.module';
import { MobEntryFormComponent } from './pages/mob-entry-form/mob-entry-form.component';
import { MobEntryListComponent } from './pages/mob-entry-list/mob-entry-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobConfimDelComponent } from './pages/mob-confim-del/mob-confim-del.component';
import { MobDetailsComponent } from './pages/mob-details/mob-details.component';

@NgModule({
  declarations: [MobEntryFormComponent, MobEntryListComponent, MobConfimDelComponent, MobDetailsComponent],
  imports: [CommonModule, MobEntriesRoutingModule, SharedModule],
})
export class MobEntriesModule {}
