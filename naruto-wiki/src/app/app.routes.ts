import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { TailedbListComponent } from './tailedb-list/tailedb-list.component';
//import { TailedbDetailComponent } from './tailedb-detail/tailedb-detail.component';
import { KkgkListComponent } from './kkgk-list/kkgk-list.component';
import { KkgkDetailComponent } from './kkgk-detail/kkgk-detail.component';

export const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "home", component: HomeComponent },   
    { path: "character", component: CharacterListComponent },
    { path: "character/:id", component: CharacterDetailComponent },
    { path: "character/search/:name", component: CharacterDetailComponent },
    { path: "tailed-beast", component: TailedbListComponent },
    { path: "tailed-beast/:id", component: CharacterDetailComponent },
    { path: "tailed-beast/search/:name", component: CharacterDetailComponent },
    { path: "kekkei-genkai", component: KkgkListComponent },
    { path: "kekkei-genkai/:id", component: KkgkDetailComponent },
    { path: "kekkei-genkai/search/:name", component: KkgkDetailComponent },
    { path: "**", redirectTo: "home" }
];
