import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  arrHeroesBorrados: string[] = [];

  borrarHeroe() {

    this.heroeBorrado = this.heroes.shift() || '';
    this.arrHeroesBorrados.push(this.heroeBorrado);
    console.log(this.arrHeroesBorrados);

  }

  

}
