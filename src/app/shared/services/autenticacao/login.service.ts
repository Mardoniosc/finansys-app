import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { StorageService } from '..';
import { API_CONFIG } from '../../config';
import { AppStorage } from '../../models/enums/core/AppStorage';
import { TokenUser } from '../../models/local-user.model';
import { Login } from '../../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly PATH: string = '/auth';

  helper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private localStorangeService: StorageService,
  ) {}

  logar(login: Login): Observable<any> {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, login, {
      observe: 'response',
      responseType: 'text',
    });
  }

  successLogin(authorizationValue: string): void {
    const tok = authorizationValue.substring(7);

    const { sub } = this.helper.decodeToken(tok);

    const tokenUser: TokenUser = {
      token: tok,
      email: sub,
    };
    this.localStorangeService.setItem(AppStorage.TOKEN_USER, tokenUser);
  }

  logout(): void {
    this.localStorangeService.setItem(AppStorage.TOKEN_USER, null);
  }

  // forgot(email: Forgot): Observable<any> {
  //   return this.http.post(`${API_CONFIG.baseUrl + this.PATH}/forgot`, email);
  // }
}
