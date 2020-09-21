import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
const _API_HOSTNAME = 'http://localhost:5000/';

@Injectable({
  providedIn: 'root'
})

export class AssignmentService {

  constructor(private readonly _http: HttpClient) { }


}
