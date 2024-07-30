import { Component, OnInit } from '@angular/core';
import { TailedbService } from '../../services/tailedb.service';
import { TailedBeast } from '../interfaces/tailedb';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tailedb-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tailedb-list.component.html',
  styleUrls: ['./tailedb-list.component.scss']
})
export class TailedbListComponent implements OnInit {
  tailedBeasts: TailedBeast[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private tailedbService: TailedbService) {}

  ngOnInit(): void {
    this.loadTailedBeasts();
  }

  loadTailedBeasts(): void {
    this.isLoading = true;
    this.tailedbService.getTailedBeasts().subscribe({
      next: data => {
        console.log('Received data:', data);
        this.tailedBeasts = data.tailedBeasts;
        this.isLoading = false;
      },
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to load tailed beasts';
        this.isLoading = false;
      }
    });
  }
}
