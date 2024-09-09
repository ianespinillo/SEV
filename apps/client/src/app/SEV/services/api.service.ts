import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signals } from '@repo/db';
import { Observable } from 'rxjs';
import { Signal } from '../interface/signal.interface';

@Injectable({ providedIn: 'root' })
export class SignalService {
  // private baseurl = 'http://localhost:3000/apí';
  // signals: Signals[] = [];
  private urlApi= 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  // getAllSignals(): void {
  //   this.http.get<Signals[]>(this.baseurl + '/signals')
  //     .subscribe(res => this.signals = res)
  // }

  getAllSignals(): Observable<any>
  {
    return this.http.get<any>(`${this.urlApi}/signals`)
  }

// getSignalsByCategory(category_id: string): Observable<Signal>
// {
//   return this.http.get<Signal>(`${this.urlApi}/category`)
// }

}
