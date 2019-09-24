import { Injectable } from '@angular/core';
import { Card } from '../models/models';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class CardService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private cardsUrl = 'api/data';

  constructor(
    private http: HttpClient,
    private messageSrv: MessageService
  ) { }

  addCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.cardsUrl, card, this.httpOptions).pipe(
      tap((newCard: Card) => this.log(`added card w/ id=${newCard.id}`)),
      catchError(this.handleError<Card>('addCard'))
    );
  }

  getCard(id: number): Observable<Card> {
    const url = `${this.cardsUrl}/${id}`;
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
    );
  }

  updateCard(card: Card): Observable<any> {
    return this.http.put(this.cardsUrl, card, this.httpOptions).pipe(
      tap(_ => this.log(`updated card id=${card.id}`)),
      catchError(this.handleError<any>('updateCard'))
    );
  }

  deleteCard(card: Card | number): Observable<Card> {
    const id = typeof card === 'number' ? card : card.id;
    const url = `${this.cardsUrl}/${id}`;

    return this.http.delete<Card>(url, this.httpOptions);
  }


  private log(message: string) {
    this.messageSrv.add(`CardService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
