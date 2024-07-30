import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Character } from '../app/interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:3000/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, limit: number): Observable<{ characters: Character[], currentPage: number, pageSize: number, totalCharacters: number }> {
    return this.http.get<{ characters: Character[], currentPage: number, pageSize: number, totalCharacters: number }>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getCharacter(id: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  getCharacterByName(name: string): Observable<Character | null> {
    return this.http.get<Character>(`${this.apiUrl}/search/${name}`).pipe(
      catchError(() => of(null))
    );
  }
}