import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // @Input() personajes:Personaje[] = [];

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  //el evento ngmodel nos ayuda a resumir los eventos  como cambiarNombre
  // cambiarNombre(event:any){
  //   console.log(event);
  //}

  constructor(private DbzService:DbzService){

  }
  agregar( ) {
    // console.log('Esta es eun prueba');
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    //console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    //this.personaje.push(...)
    //this.nuevo = {....}

    // this.personajes.push(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
    // console.log(this.personajes);
  } 

}
