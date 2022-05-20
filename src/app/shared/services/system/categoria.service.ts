import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { API_CONFIG } from '../../config';
import { Categoria } from '../../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private readonly PATH: string = API_CONFIG.baseUrl + '/categorias';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Categoria[]> {
    return this.http
      .get<Categoria[]>(this.PATH)
      .pipe(
        map(this.jsonDataToResources.bind(this)),
        catchError(this.handleError)
      );
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.PATH}/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  create(resource: Categoria): Observable<Categoria> {
    return this.http
      .post(this.PATH, resource)
      .pipe(catchError(this.handleError));
  }

  update(resource: Categoria): Observable<Categoria> {
    const url = `${this.PATH}/${resource.id}`;
    return this.http.put(url, resource).pipe(
      map(() => resource),
      catchError(this.handleError)
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this.PATH}/${id}`;
    return this.http.delete(url).pipe(
      map(() => null),
      catchError(this.handleError)
    );
  }

  // PROTECTED METHODS
  protected jsonDataToResources(jsonData: any[]): Categoria[] {
    const resources: Categoria[] = [];
    jsonData.forEach((element) =>
      resources.push(Object.assign(new Categoria(), element))
    );
    return resources;
  }

  protected jsonDataToResource(jsonData: any[]): Categoria {
    return Object.assign(new Categoria(), jsonData);
  }

  protected handleError(error: any): Observable<any> {
    console.log('Erro na requisição => ', error);
    return throwError(error);
  }
}
