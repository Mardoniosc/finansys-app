import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRotas } from './shared/models/enums/core/AppRoutes';
import { LoggedGuard } from './shared/services/guard';

const routes: Routes = [
  {
    path: AppRotas.LOGIN,
    loadChildren: () =>
      import('./security/autetication/autetication.module').then(
        (m) => m.AuteticationModule
      ),
  },
  {
    path: AppRotas.MOBILE,
    canActivate: [LoggedGuard],
    loadChildren: () =>
      import('./mobile/mobile.module').then((m) => m.MobileModule),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
