import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../../shared/pokemon';
import { Router } from '@angular/router';
import { PokedexService } from '../../shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-pokemon-page.component.html',
  styleUrl: './create-pokemon-page.component.css'
})
export class CreatePokemonPageComponent {

  pokemon: Pokemon = {
    name: '',
    imageUrl: '',
    description: '',
    types: [],
  };

  pokemonTypes: string[] = ['Feu', 'Eau', 'Plante', 'Insecte', 'Normal', 'Vol', 'Fée', 'Psy', 'Electrik', 'Combat', 'Acier', 'Dragon', 'Glace', 'Poison', 'Roche', 'Sol', 'Spectre', 'Ténèbres'];
  selectedTypes: { [key: string]: boolean } = {};

  constructor(private router: Router) { }

  pokemonService = inject(PokedexService);

  onTypeChange(type: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;

    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  
  createPokemon(): void {
    const newPokemon: Pokemon = {
      name: this.pokemon.name,
      imageUrl: this.pokemon.imageUrl,
      description: this.pokemon.description,
      types: this.pokemon.types
    }
    this.pokemonService.addPokemon(newPokemon);
    this.router.navigate(['/']);

  }
}
