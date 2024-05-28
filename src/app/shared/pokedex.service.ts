import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { Observable, of } from 'rxjs';
import { POKEMONS } from './pokemons-mock';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  pokemons: Pokemon[] = POKEMONS;
  constructor() { }
  
  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
  }

  getPokemons(): Observable<Pokemon[]> {
    return of(this.pokemons);
  }
}
