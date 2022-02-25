import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegheta',
            poder: 7500
        }
    ];

    get personajes(){
        return [...this._personajes]; //buena practica de javascript
    }
    constructor() {
        //console.log('servicio inicializado');
    }
    
    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }
}