import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommandService {
  constructor(private _httpClient: HttpClient) {}
  executeAsync(url: string, body?: any, headers?: any): Observable<any> {
    return this._httpClient.post(url, body, { headers: headers });
  }
}
