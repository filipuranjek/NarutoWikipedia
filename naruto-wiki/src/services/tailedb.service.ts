import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { TailedBeast } from '../app/interfaces/tailedb';

@Injectable({
  providedIn: 'root'
})
export class TailedbService {
  private apiUrl = 'http://localhost:3000/api/tailed-beast';

  constructor(private http: HttpClient) { }

  getTailedBeasts(): Observable<{ tailedBeasts: TailedBeast[], totalTailedBeasts: number }> {
    return this.http.get<{ tailedBeasts: TailedBeast[], totalTailedBeasts: number }>(`${this.apiUrl}`);
  }

  getTailedBeast(id: string): Observable<TailedBeast> {
    return this.http.get<TailedBeast>(`${this.apiUrl}/${id}`);
  }

  getTailedBeastsByName(name: string): Observable<TailedBeast | null> {
    return this.http.get<TailedBeast>(`${this.apiUrl}/search/${name}`).pipe(
      catchError(() => of(null))
    );
  }
}