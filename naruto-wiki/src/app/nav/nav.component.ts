import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkActive, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  searchTerm: string = '';
  notFound: boolean = false;

  constructor(private router: Router, private searchService: SearchService) {}

  search() {
    if (this.searchTerm) {
      this.searchService.search(this.searchTerm).subscribe(result => {
        this.notFound = (result === 'none');
        switch (result) {
          case 'character':
            this.router.navigate(['/character/search', this.searchTerm]);
            break;
          case 'kekkei-genkai':
            this.router.navigate(['/kekkei-genkai/search', this.searchTerm]);
            break;
        }
      });
    }
  }
}
