import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private _httpClient: HttpClient) {}
  executeAsync(url: string, headers?: any, queryParams?: any): Observable<any> {
    return this._httpClient.get(url, { headers: headers, params: queryParams });
  }
  postAsync(
    url: string,
    body: any,
    headers?: any,
    queryParams?: any
  ): Observable<any> {
    return this._httpClient.post(url, body, {
      headers: headers,
      params: queryParams,
    });
  }
}
