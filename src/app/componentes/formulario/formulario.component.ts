import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClubesService } from '../../Servicios/clubes.service';
import { GenericoService } from '../../Servicios/generico.service';
import * as moment from 'moment';
import { FormularioModel } from 'src/app/models/FormularioModel.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  @Output() 
  datosFicha: EventEmitter<FormularioModel> = new EventEmitter<FormularioModel>();

  formularioFicha: FormularioModel = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    genero:"",
    nacionalidad:"",
    club: "",
    rfc: "",
    ocupacion:"",
  }

  formulario: FormGroup = new FormGroup({});;

  ocultarRfc: boolean = true;

  comboClubes:any[] = [];
  comboGenero:any[] = [];
  comboNacionalidades:any[] = [];

  constructor(private _cubesService: ClubesService, private _genericoService: GenericoService, private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    this.comboClubes = this._cubesService.obtenerClubes();
    this.comboGenero = this._genericoService.obtenerGeneros();
    this.comboNacionalidades = this._genericoService.obtenerNacionalidades();
  }

  /** Validaciones */
  get validacionNombre(){
    return this.formulario.get('nombre')?.invalid && this.formulario.get('nombre')?.touched
  }

  get validacionApellidoPaterno(){
    return this.formulario.get('apellidoPaterno')?.invalid && this.formulario.get('apellidoPaterno')?.touched
  }

  get validacionFechaNacimiento(){
    return this.formulario.get('fechaNacimiento')?.invalid && this.formulario.get('fechaNacimiento')?.touched
  }

  get validacionNacionalidad(){
    return this.formulario.get('nacionalidad')?.invalid && this.formulario.get('nacionalidad')?.touched
  }

  get validacionClubFutbol(){
    return this.formulario.get('clubFutbol')?.invalid && this.formulario.get('clubFutbol')?.touched
  }

  get validacionOcupacion(){
    return this.formulario.get('ocupacion')?.invalid && this.formulario.get('ocupacion')?.touched
  }

  get validacionRfc(){
    return this.formulario.get('rfc')?.invalid && this.formulario.get('rfc')?.touched
  }

  get validacionGenero(){
    return this.formulario.get('genero')?.invalid && this.formulario.get('genero')?.touched
  }

  validarMayorEdad(){

    let fechaActual: Date = new Date();

    let fechaNacimiento: Date = new Date(this.formulario.get('fechaNacimiento')?.value);
    
    let anios = moment(fechaActual).diff(fechaNacimiento, 'years');

    if(anios >= 18)
    {
      this.ocultarRfc = false;
    }
    else
    {      
      this.ocultarRfc = true;
    }

  }

  /** End Validaciones */

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      apellidoPaterno:['', [Validators.required]],
      apellidoMaterno:[''],
      fechaNacimiento:['', [Validators.required]],
      genero:['', [Validators.required]],
      nacionalidad:['',[Validators.required]],
      clubFutbol:['',[Validators.required]],
      rfc:['',Validators.pattern('^(([A-Z]|[a-z]){4})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))')],
      ocupacion:['',[Validators.required]],
    });
  }

  guardarFormulario(){

    if(this.formulario.invalid)
    {
      return Object.values(this.formulario.controls).forEach( control => { control.markAsTouched() });
    }

    this.formularioFicha.nombre = this.formulario.get('nombre')?.value;
    this.formularioFicha.apellidoPaterno = this.formulario.get('apellidoPaterno')?.value;
    this.formularioFicha.apellidoMaterno = this.formulario.get('apellidoMaterno')?.value;
    this.formularioFicha.fechaNacimiento = this.formulario.get('fechaNacimiento')?.value;
    this.formularioFicha.genero = this.formulario.get('genero')?.value;
    this.formularioFicha.nacionalidad = this.formulario.get('nacionalidad')?.value;
    this.formularioFicha.club = this.formulario.get('clubFutbol')?.value;
    this.formularioFicha.rfc = this.formulario.get('rfc')?.value;
    this.formularioFicha.ocupacion = this.formulario.get('ocupacion')?.value;

    this.datosFicha.emit(this.formularioFicha);
  }

  resetearFormulario(){
    this.formulario.reset();
  }

}
