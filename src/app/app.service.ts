import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  readonly endpoint = 'http://18.237.252.206:8080/';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public year: number;
  public month: string;
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  getPieData(month: any, year: any): Observable<any> {
    month = month;
    year = year;
    var k = this.endpoint + 'data/' + year + '/' + month;
    return this.http.get(k).pipe(map(this.extractData));
  }
  getMockPieData(): Observable<any> {
    return of([25, 60, 15]);
  }
}
