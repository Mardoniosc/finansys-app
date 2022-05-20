import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobCategoriesRoutingModule } from './mob-categories-routing.module';
import { MobCategoryListComponent } from './pages/mob-category-list/mob-category-list.component';
import { MobCategoryFormComponent } from './pages/mob-category-form/mob-category-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MobConfirmDelComponent } from './pages/mob-confirm-del/mob-confirm-del.component';

@NgModule({
  declarations: [
    MobCategoryListComponent,
    MobCategoryFormComponent,
    MobConfirmDelComponent,
  ],
  imports: [CommonModule, MobCategoriesRoutingModule, SharedModule],
})
export class MobCategoriesModule {}
