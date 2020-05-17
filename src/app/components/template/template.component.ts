import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  // .ng-touched.ng-invalid:not(form){
  //   border: solid red 1px;
  // }
  `]
})
export class TemplateComponent implements OnInit {
usuario:object = {
  nombre:null,
  apellido:null,
  correo:""   
}
  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("guardar formulario");
    console.log({forma}); 
    console.log(forma.value);
    console.log("usuario:", this.usuario);
    
      
    
  }

}
