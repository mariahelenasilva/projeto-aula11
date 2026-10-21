import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-fornecedores',
  styleUrl: './fornecedores.css',
  templateUrl: './fornecedores.html',
})
export class Fornecedores {
  razaoSocial:string = "";
  cnpj:string = "";
  email:string = "";

  registros:any[] = [];

  salvar(){
    this.registros.push({
      razaoSocial: this.razaoSocial,
      cnpj: this.cnpj,
      email: this.email
    })
  }
}
