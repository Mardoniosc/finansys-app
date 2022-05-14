import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRotas } from '../shared/models/enums/core/AppRoutes';
import { MobReportsComponent } from './modules/mob-reports/pages/mob-reports/mob-reports.component';

const routes: Routes = [
  {
    path: AppRotas.REPORT,
    loadChildren: () =>
      import('./modules/mob-reports/mob-reports.module').then(
        (m) => m.MobReportsModule
      ),
  },
  {
    path: AppRotas.CATEGORY,
    loadChildren: () =>
      import('./modules/mob-categories/mob-categories.module').then(
        (m) => m.MobCategoriesModule
      ),
  },
  {
    path: AppRotas.ENTRY,
    loadChildren: () =>
      import('./modules/mob-entries/mob-entries.module').then(
        (m) => m.MobEntriesModule
      ),
  },
  {
    path: AppRotas.PROFILE,
    loadChildren: () =>
      import('./modules/mob-profile/mob-profile.module').then(
        (m) => m.MobProfileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileRoutingModule {}
