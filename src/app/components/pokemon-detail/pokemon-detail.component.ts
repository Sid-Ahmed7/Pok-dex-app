import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent {
  @Input() pokemon!: Pokemon;
}
