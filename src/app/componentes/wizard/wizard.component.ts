import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION } from 'ng-wizard';
import { FormularioModel } from 'src/app/models/FormularioModel.interface';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  formularioFicha: FormularioModel = {
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

  stepStates = {
    normal: STEP_STATE.normal,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };
 
  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.circles,
    lang: { next: 'Siguinte', previous: 'Anterior' },
    toolbarSettings:{
      toolbarPosition: TOOLBAR_POSITION.bottom,
      toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.start
    }
  };

  constructor(private ngWizardService: NgWizardService) {
  }
 
  ngOnInit() {
  }

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }
 
  showNextStep(event?: Event) {
    this.ngWizardService.next();
  }
 
  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }
 
  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }
 
  stepChanged(args: StepChangedArgs) {
    console.log(args.step);
  }
 
  isValidTypeBoolean: boolean = true;
 
  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }
 
  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }

  recibirFicha(ficha:FormularioModel){
    this.formularioFicha.nombre = ficha.nombre;
    this.formularioFicha.apellidoPaterno = ficha.apellidoPaterno;
    this.formularioFicha.apellidoMaterno = ficha.apellidoMaterno;
    this.formularioFicha.fechaNacimiento = ficha.fechaNacimiento;
    this.formularioFicha.genero = ficha.genero;
    this.formularioFicha.nacionalidad = ficha.nacionalidad;
    this.formularioFicha.club = ficha.club;
    this.formularioFicha.rfc = ficha.rfc;
    this.formularioFicha.ocupacion = ficha.ocupacion;
    console.log(this.formularioFicha);
  }

}
 