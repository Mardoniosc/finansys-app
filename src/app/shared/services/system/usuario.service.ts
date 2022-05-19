import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../../config';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly PATH: string = '/usuarios';

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(
      `${API_CONFIG.baseUrl + this.PATH}/email?email=${email}`,
    );
  }
}
