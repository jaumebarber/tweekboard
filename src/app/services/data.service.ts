import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { Card } from '../models/card';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private dataUrl = 'http://127.0.0.1:3001/data';

  constructor(
    private http: HttpClient,
    private messageSrv: MessageService
  ) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl).pipe(
      tap(_ => this.log('fetched data')),
      catchError(this.handleError<object>('getData', []))
    );
  }

  // addData(data): Observable<any> {
  //   return this.http.post<any>(this.dataUrl, data, this.httpOptions).pipe(
  //     tap((newData) => this.log(`added data w/ id=${newData.id}`)),
  //     catchError(this.handleError<any>('addData'))
  //   );
  // }



  // getItem(id: number): Observable<any> {
  //   const url = `${this.dataUrl}/${id}`;
  //   return this.http.get<any>(url).pipe(
  //     tap(_ => this.log(`fetched data id=${id}`)),
  //     catchError(this.handleError<any>(`getItem id=${id}`))
  //   );
  // }

  // updateData(data): Observable<any> {
  //   return this.http.put(this.dataUrl, data, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated data id=${data.id}`)),
  //     catchError(this.handleError<any>('updateData'))
  //   );
  // }

  // deleteData(data): Observable<any> {
  //   const id = typeof data === 'number' ? data : data.id;
  //   const url = `${this.dataUrl}/${id}`;

  //   return this.http.delete<any>(url, this.httpOptions);
  // }


  private log(message: string) {
    this.messageSrv.add(`DataService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
