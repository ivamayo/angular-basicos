import { Component
  // , OnInit 
} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent 
// implements OnInit 
{

  // constructor() { 
  //   console.log('Constructor');
  // }

  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

  heroes: string[] = ['Spiderman', 'Ironman','Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando....');
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
  
}