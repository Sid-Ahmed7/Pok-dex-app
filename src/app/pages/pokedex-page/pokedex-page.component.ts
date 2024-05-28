import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../shared/pokedex.service';
import { PokemonDetailComponent } from '../../components/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from '../../components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent implements OnInit {
  
  pokemons: Pokemon[] = [];
  pokemonDetail!: Pokemon;

  pokemonService = inject(PokedexService);

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data;
    })
  }

  onReceivePokemon(event: Pokemon) {
    this.pokemonDetail = event
  }

}
