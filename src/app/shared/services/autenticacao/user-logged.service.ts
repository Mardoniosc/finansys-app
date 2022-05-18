import { Injectable } from '@angular/core';
import { StorageService } from '..';
import { AppStorage } from '../../models/enums/core/AppStorage';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedService  {
  constructor(private storange: StorageService) {}

  userLogged(): boolean {
    const localUser = this.storange.getItem(AppStorage.USUARIO);
    return !!localUser;
  }
}

