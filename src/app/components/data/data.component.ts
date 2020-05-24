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
    pasatiempos: ['comer'],
    password1:null,
    password2:null
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
        'apellido': new FormControl('', [Validators.required, this.nollanos])

      }),
      'correo': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos': new FormArray([
        new FormControl('Correr', Validators.required)
      ]),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()

    })

    this.forma.controls['password2'].setValidators([Validators.required, 
                                                    this.noigual.bind(this.forma)
                                                  ])
    this.forma.setValue(this.usuario);

  }

  agregarPasatiempos(){
    console.log('pasatiempo agregado');
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  nollanos(control:FormControl):{ [ s:string ]:boolean }{

    if (control.value === 'llanos') {
      return {
        nollanos:true
      }
    }
    return null;
  }
  noigual(control:FormControl):{ [ s:string ]:boolean }{
    console.log(this);
    let forma:any = this;

    if (control.value !== forma.controls['password1'].value ) {
      return {
        noigual:true
      }
    }
    return null;
  }

  guardarCambios() {
    console.log(this.forma);
    console.log(this.forma.value);

    this.forma.reset(this.usuario);
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
