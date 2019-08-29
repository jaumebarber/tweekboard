import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { Task } from '../models/task';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private dataUrl = 'api/data';


  constructor(
    private http: HttpClient,
    private messageSrv: MessageService
  ) { }

// create
  add(item: Column | Task ): Observable<Column | Task>  {
    return this.http.post<Column | Task>(this.dataUrl, item, this.httpOptions).pipe(
      tap((newItem: Column | Task) => this.log(`added ${newItem.type} w/ id=${newItem.id}`)),
      catchError(this.handleError<Column | Task>(`add`))
    );
  }
// read
  get(id: number): Observable<Column | Task> {
    const url = `${this.dataUrl}/${id}`;
    return this.http.get<Column | Task>(url).pipe(
      tap(item => this.log(`fetched ${item.type} id=${id}`)),
      catchError(this.handleError<Column | Task>(`get id=${id}`))
    );
  }
// update
  update(item: Column | Task): Observable<Column | Task> {
    return this.http.put(this.dataUrl, item, this.httpOptions).pipe(
      tap((newItem: Column | Task) => this.log(`updated column id=${newItem.id}`)),
      catchError(this.handleError<Column | Task>('update'))
    );
  }
// delete
  delete(item: Column | Task | number): Observable<Column | Task> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.dataUrl}/${id}`;

    return this.http.delete<Column | Task>(url, this.httpOptions);
  }
// retrieve all data
  getData(): Observable<any>{
    return this.http.get(this.dataUrl).pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError('getData', []))
    );
  }

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
