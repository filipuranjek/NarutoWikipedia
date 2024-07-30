import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../../services/character.service";
import { Character } from "../interfaces/character";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  errorMessage: string = '';
  page: number = 1;
  limit: number = 20;
  totalCharacters: number = 0;
  totalPages: number = 0;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters(this.page, this.limit).subscribe({
      next: data => {
        console.log("Characters data: ", data);
        if (data && data.characters && data.characters.length > 0) {
          this.characters = data.characters.map(character => {
            if (!character.images || character.images.length === 0) {
              character.images = ["../../assets/images/placeholder.webp"];
            }
            return character;
          });
          this.totalCharacters = data.totalCharacters;
          this.totalPages = Math.ceil(this.totalCharacters / this.limit);
        } else {
          this.errorMessage = 'No characters found';
        }
      },
      error: error => {
        console.error("Error fetching characters: ", error);
        this.errorMessage = 'Failed to fetch characters';
      }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadCharacters();
  }

  goToNextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadCharacters();
    }
  }

  goToPreviousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters();
    }
  }
}
