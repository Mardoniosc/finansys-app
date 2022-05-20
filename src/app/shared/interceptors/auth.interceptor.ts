import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { StorageService } from '../services';
import { AppStorage } from '../models/enums/core/AppStorage';

@Injectable()
export class Authinterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const localUser = this.storage.getItem(AppStorage.TOKEN_USER);

    const N = API_CONFIG.baseUrl.length;
    const requestToAPI = req.url.substring(0, N) === API_CONFIG.baseUrl;

    if (localUser && requestToAPI) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localUser.token}`),
      });

      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
