import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  usuario: Object = {

    nombrecompleto: {
      nombre: 'sandra',
      apellido: 'llanos'
    },
    correo: 'sllanos@gmail.com',
    pasatiempos: ['comer']
  }

  forma: FormGroup;

  constructor() {
    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required)

      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ])

    })

    this.forma.setValue(this.usuario);

  }

  agregarPasatiempos(){
    console.log('pasatiempo agregado');
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }
  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);

    // this.forma.reset(this.usuario);
    this.forma.reset({
      nombrecompleto: {
        nombre: '',
        apellido: ''
      },
      correo: '',
      pasatiempos:['comer']
    });

  }

}
