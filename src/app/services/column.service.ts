import { Injectable } from '@angular/core';
import { Column } from '../models/column';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class ColumnService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private columnsUrl = 'api/columns';
  columns: Column[];

  constructor(
    private http: HttpClient,
    private messageSrv: MessageService
  ) { }

// create
  addColumn(column: Column): Observable<Column> {
    return this.http.post<Column>(this.columnsUrl, column, this.httpOptions).pipe(
      tap((newColumn: Column) => this.log(`added column w/ id=${newColumn.id}`)),
      catchError(this.handleError<Column>('addColumn'))
    );
  }
// read
  getColumn(id: number): Observable<Column> {
    const url = `${this.columnsUrl}/${id}`;
    return this.http.get<Column>(url).pipe(
      tap(_ => this.log(`fetched column id=${id}`)),
      catchError(this.handleError<Column>(`getColumn id=${id}`))
    );
  }
// update
  updateColumn(column: Column): Observable<any> {
    return this.http.put(this.columnsUrl, column, this.httpOptions).pipe(
      tap(_ => this.log(`updated column id=${column.id}`)),
      catchError(this.handleError<any>('updateColumn'))
    );
  }
// delete
  deleteColumn(column: Column | number): Observable<Column> {
    const id = typeof column === 'number' ? column : column.id;
    const url = `${this.columnsUrl}/${id}`;

    return this.http.delete<Column>(url, this.httpOptions);
  }
// retrieve all data
  getColumns(): Observable<Column[]> {
    const request = this.http.get<Column[]>(this.columnsUrl)
    return request.pipe(
      tap(_ => this.log('fetched columns')),
      catchError(this.handleError<Column[]>('getColumns', []))
    );
  }

  private log(message: string) {
    this.messageSrv.add(`ColumnService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
