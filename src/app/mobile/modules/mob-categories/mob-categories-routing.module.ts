import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobCategoryFormComponent } from './pages/mob-category-form/mob-category-form.component';
import { MobCategoryListComponent } from './pages/mob-category-list/mob-category-list.component';
import { MobConfirmDelComponent } from './pages/mob-confirm-del/mob-confirm-del.component';

const routes: Routes = [
  { path: '', component: MobCategoryListComponent },
  { path: 'new', component: MobCategoryFormComponent },
  { path: ':id/edit', component: MobCategoryFormComponent },
  { path: ':id/delete', component: MobConfirmDelComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobCategoriesRoutingModule {}
