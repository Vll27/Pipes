import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {

  people = [
    { name: 'Mateo' },
    { name: 'Juan' },
    { name: 'Cr7' },
    { name: 'Camila' },
    { name: 'Talita' },
    { name: 'Patricia' },
    { name: 'Cesar'}
  ];


}
