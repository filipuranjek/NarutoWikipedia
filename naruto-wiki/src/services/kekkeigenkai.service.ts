import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { KekkeiGenkai } from '../app/interfaces/kekkeigenkai';

@Injectable({
  providedIn: 'root'
})
export class KekkeigenkaiService {
  private apiUrl = 'http://localhost:3000/api/kekkei-genkai';

  constructor(private http: HttpClient) { }

  getKekkeiGenkai(page: number, limit: number): Observable<{ kekkeigenkai: KekkeiGenkai[], currentPage: number, pageSize: number, totalKekkeiGenkai: number }> {
    return this.http.get<{ kekkeigenkai: KekkeiGenkai[], currentPage: number, pageSize: number, totalKekkeiGenkai: number }>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getCharacter(id: string): Observable<KekkeiGenkai> {
    return this.http.get<KekkeiGenkai>(`${this.apiUrl}/${id}`);
  }

  getCharacterByName(name: string): Observable<KekkeiGenkai | null> {
    return this.http.get<KekkeiGenkai>(`${this.apiUrl}/search/${name}`).pipe(
      catchError(() => of(null))
    );
  }
}

