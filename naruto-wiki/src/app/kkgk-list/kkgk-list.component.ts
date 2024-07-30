import { Component, OnInit } from "@angular/core";
import { KekkeigenkaiService } from "../../services/kekkeigenkai.service";
import { KekkeiGenkai } from "../interfaces/kekkeigenkai";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-kkgk-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './kkgk-list.component.html',
  styleUrls: ['./kkgk-list.component.scss']
})
export class KkgkListComponent implements OnInit {
  kekkeiGenkais: KekkeiGenkai[] = [];
  errorMessage: string = '';
  page: number = 1;
  limit: number = 15;
  totalKekkeiGenkais: number = 0;
  totalPages: number = 0;

  constructor(private kekkeiGenkaiService: KekkeigenkaiService) { }

  ngOnInit(): void {
    this.loadKekkeiGenkai();
  }

  loadKekkeiGenkai(): void {
    this.kekkeiGenkaiService.getKekkeiGenkai(this.page, this.limit).subscribe({
      next: data => {
        console.log("Kekkei Genkai data: ", data);
        if (data && data.kekkeigenkai && data.kekkeigenkai.length > 0) {
          this.kekkeiGenkais = data.kekkeigenkai;
          this.totalKekkeiGenkais = data.totalKekkeiGenkai;
          this.totalPages = Math.ceil(this.totalKekkeiGenkais / this.limit);
        } else {
          this.errorMessage = 'No Kekkei Genkai found';
        }
      },
      error: error => {
        console.error("Error fetching Kekkei Genkai: ", error);
        this.errorMessage = 'Failed to fetch Kekkei Genkai';
      }
    });
  }

  goToPage(page: number): void {
    this.page = page;
    this.loadKekkeiGenkai();
  }

  goToNextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadKekkeiGenkai();
    }
  }

  goToPreviousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadKekkeiGenkai();
    }
  }
}
