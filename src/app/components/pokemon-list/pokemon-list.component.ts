import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() pokemonClick: EventEmitter<Pokemon> = new EventEmitter();
  
  pokemon!: Pokemon ;
   
  sendPokemonNameToParent(pokemon : Pokemon): void {
    this.pokemonClick.emit(pokemon);
  }
}
