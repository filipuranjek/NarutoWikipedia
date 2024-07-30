import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KekkeigenkaiService } from '../../services/kekkeigenkai.service';
import { KekkeiGenkai } from '../interfaces/kekkeigenkai';
import { CommonModule } from '@angular/common';
import { switchMap, of } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kkgk-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './kkgk-detail.component.html',
  styleUrls: ['./kkgk-detail.component.scss']
})
export class KkgkDetailComponent implements OnInit {
  kekkeiGenkai: KekkeiGenkai | null = null;
  isLoading: boolean = true;
  kekkeiGenkaiNotFound: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private kekkeiGenkaiService: KekkeigenkaiService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        this.isLoading = true;
        this.kekkeiGenkaiNotFound = false;
        this.errorMessage = '';

        if (params['name']) {
          return this.kekkeiGenkaiService.getCharacterByName(params['name']);
        }
        return of(null);
      })
    ).subscribe({
      next: (kekkeiGenkai: KekkeiGenkai | null) => {
        if (kekkeiGenkai) {
          this.kekkeiGenkai = kekkeiGenkai;
        } else {
          this.kekkeiGenkaiNotFound = true;
          this.errorMessage = 'Kekkei Genkai not found.';
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        if (err.status === 404) {
          this.kekkeiGenkaiNotFound = true;
          this.errorMessage = 'Kekkei Genkai not found.';
        }
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}
