import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

// interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // agregar( event:any ) {
  //   event.preventDefault(); //prevee el corpotamiento de un formulario.
  //   console.log('Hey!!!');
  // }
  // personajes: Personaje[] = [
  //   {
  //     nombre: 'Goku',
  //     poder: 15000
  //   },
  //   {
  //     nombre:'Vegheta',
  //     poder: 7500
  //   }
  // ];
  //personajes: Personaje[] = [];

  nuevo:Personaje={
    nombre: 'Maestro Roshi',
    poder:1000
  }

  // get personajes():Personaje[]{
  // return this.dbzService.personajes;  
  // }

  // agregarNuevoPersonaje( argumento: Personaje) {
  //   //console.log(argumento);
  //   //debugger;
  //   this.personajes.push(argumento);
    
  // }

  // constructor(private dbzService: DbzService){
  //  // this.personajes = this.dbzService.personajes;
  // }

  constructor(){}
}
