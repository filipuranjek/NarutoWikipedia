import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { Character } from '../interfaces/character';
import { switchMap, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  templateUrl: './character-detail.component.html',
  imports: [CommonModule],
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: Character | null = null;
  isLoading: boolean = true;
  characterNotFound: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.isLoading = true;
        this.characterNotFound = false;
        this.errorMessage = '';

        if (params['name']) {
          return this.characterService.getCharacterByName(params['name']);
        }
        return of(null);
      })
    ).subscribe({
      next: (character: Character | null) => {
        if (character) {
          this.character = character;
        } else {
          this.characterNotFound = true;
          this.errorMessage = 'Character not found.';
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        if (err.status === 404) {
          this.characterNotFound = true;
          this.errorMessage = 'Character not found.';
        }
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
