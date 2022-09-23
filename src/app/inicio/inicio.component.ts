import { Component} from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{

  title = 'tutorialName';

  nombre: string = 'Eduardo';
  colonia: string = 'UniDAD de ProPositO';
  fecha : Date = new Date();
  salario : number = 12000.5;
  PI : number = Math.PI;

  friend = [
    {name: 'John'},
    {name: 'Mary'},
    {name: 'Mike'},
    {name: 'Adam'},
    {name: 'Julie'}
  ];

}


