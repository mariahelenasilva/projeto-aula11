import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-eventos',
  styleUrl: './eventos.css',
  templateUrl: './eventos.html',
})
export class Eventos {
  cadastro = new FormGroup({
    
    nome:new FormControl('',[
        Validators.required,
        Validators.minLength(3)
    ]),
    email:new FormControl('',[
        Validators.required,
        Validators.email
    ])

  })
}
