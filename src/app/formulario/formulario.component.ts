import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  title = 'Formulario de Información';
  formularioContacto :FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formularioContacto = this.fb.group({
      nombre:['', [Validators.required, Validators.minLength(3)]],
      telefono:[''],
      email:['', [Validators.email, Validators.required]],
      mensaje:['', [Validators.maxLength(100)]]
    })
  }

  submit(){
    console.log(this.formularioContacto.value)
  }

}
