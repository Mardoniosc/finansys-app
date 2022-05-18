import { Injectable } from '@angular/core';
import { AppStorage } from '../models/enums/core/AppStorage';
import { TokenUser } from '../models/local-user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getAll(): Array<any> {
    let list: Array<{ key: string; value: any }> = [];
    let values = Object.values(AppStorage);

    values.forEach((key) => {
      let object: string | null = localStorage.getItem(key);
      if (object != null) {
        list.push({ key: key, value: JSON.parse(object) });
      }
    });

    return list;
  }

  removeAll(): void {
    localStorage.clear();
  }

  removeItem(key: AppStorage): void {
    localStorage.removeItem(key);
  }

  getItem(key: AppStorage): any {
    let object: null | string = localStorage.getItem(key);
    if (object != null) {
      let objectConv = JSON.parse(object);
      return objectConv;
    }
    return null;
  }

  setItem(key: AppStorage, value: any): void {
    let object: string = JSON.stringify(value);
    localStorage.setItem(key, object);
  }

  mergeItem(key: AppStorage, objSource: any): any {
    let objTarget: any = this.getItem(key);
    objTarget = this._mergeItens(objTarget, objSource, false);

    this.setItem(key, objTarget);

    return objTarget;
  }

  private _mergeItens(
    objTarget: any,
    objSource: any,
    isChildren: boolean
  ): any {
    let isEqualAttr: boolean = false;
    if (objTarget) {
      if (objSource) {
        let undefinedObj: string[] = [];
        let keys: string[] = Object.keys(objSource);

        keys.forEach((chave) => {
          if (typeof objTarget[chave] !== 'undefined') {
            isEqualAttr = true;
            if (typeof objTarget[chave] !== 'object') {
              objTarget[chave] = objSource[chave];
            } else {
              if (objTarget[chave] == null) {
                objTarget[chave] = objSource[chave];
              } else {
                objTarget[chave] = this._mergeItens(
                  objTarget[chave],
                  objSource[chave],
                  true
                );
              }
            }
          } else {
            undefinedObj.push(chave);
          }
        });

        if (!isEqualAttr || isChildren) {
          undefinedObj.forEach((chave) => {
            objTarget[chave] = objSource[chave];
          });
        }
      }
    } else {
      objTarget = objSource;
    }
    return objTarget;
  }
}
