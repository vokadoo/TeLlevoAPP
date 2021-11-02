import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIURL } from 'src/environments/RegionesAPI';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  constructor(
    private http: HttpClient
  ) { }
  getRegiones() {
    return this.http.get(APIURL.regiones);
  }
}
