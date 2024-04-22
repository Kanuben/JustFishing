import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatchService {
  constructor(private http: HttpClient) {}

  getCatches(userId: number) {
    let url = `http://localhost:3000/catch/${userId}`;
    return this.http.get(url, {
      headers: {'Access-Control-Allow-Origin':'*'}
   });
  }
}
