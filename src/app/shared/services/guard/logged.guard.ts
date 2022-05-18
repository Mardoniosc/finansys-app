import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '..';
import { AppStorage } from '../../models/enums/core/AppStorage';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  canActivate(): boolean {
    const userLogged = this.storageService.getItem(AppStorage.USUARIO);
    if (userLogged) {
      if (userLogged.status === 1) {
        return true;
      }
    }

    this.storageService.setItem(AppStorage.USUARIO, null);
    this.router.navigate(['/login']);
    return false;
  }
}
