import { Component, Input, OnInit } from '@angular/core';
import { FormularioModel } from 'src/app/models/FormularioModel.interface';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {

  @Input() fichaFormulario: FormularioModel = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    genero:"",
    nacionalidad:"",
    club: "",
    rfc: "",
    ocupacion:""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
