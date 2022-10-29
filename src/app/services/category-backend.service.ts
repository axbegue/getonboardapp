import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServerResponse } from '@core/models';
import { Category } from '../models';
import { BaseService } from '@core/services';

@Injectable({providedIn: 'root'})
export class CategoryBackendService extends BaseService<Category> {
  // private apiServerUrl = `${environment.getonbrdApiBaseUrl}/categories`;
  
  constructor(protected override http: HttpClient) {
    super(http, environment.getonbrdApiBaseUrl);
  }

  public search(page?: number): Observable<ServerResponse<Category[]>> {
    let query: string = '?';
    if (!!page && page > 0) {
      query = `${query}page=${page}`;
    }

    return this.get(`/categories${query}`);
    // return this.http.get<ServerResponse<Category>>(`${query}`);
  }
  
}
