import { Component, OnInit, inject } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../shared/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent implements OnInit {
  pokemons: Pokemon[] = [];

  pokemonService = inject(PokedexService);

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(data => {
      this.pokemons = data;
    })
  }

}
