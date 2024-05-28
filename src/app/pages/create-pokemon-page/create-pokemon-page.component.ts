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

  constructor(private router: Router) { }

  pokemonService = inject(PokedexService);

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
