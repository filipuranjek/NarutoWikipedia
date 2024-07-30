import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { CharacterService } from './character.service';
import { KekkeigenkaiService } from './kekkeigenkai.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(
    private characterService: CharacterService,
    private kekkeigenkaiService: KekkeigenkaiService
  ) {}

  search(term: string): Observable<'character' | 'kekkei-genkai' | 'none'> {
    return this.characterService.getCharacterByName(term).pipe(
      switchMap(character => {
        if (character) {
          return of<'character' | 'kekkei-genkai' | 'none'>('character');
        } else {
          return this.kekkeigenkaiService.getCharacterByName(term).pipe(
            switchMap(kekkeiGenkai => kekkeiGenkai ? of<'character' | 'kekkei-genkai' | 'none'>('kekkei-genkai') : of<'character' | 'kekkei-genkai' | 'none'>('none'))
          );
        }
      })
    );
  }
}
