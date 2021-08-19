import { Component, Input, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import { FormularioModel } from 'src/app/models/FormularioModel.interface';

const doc = new jsPDF();

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

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

  descargarPdf(){
    let fechaActual: Date = new Date();
    doc.setFontSize(20);
    doc.addImage("assets/img/logo_fmf.png", "PNG", 5, 5, 30, 30);
    doc.text("Federación Mexicana de Fútbol Asociación, A.C.", 35, 25);    
    doc.text("Nombre Completo: " + this.fichaFormulario.nombre.toUpperCase() + " " + this.fichaFormulario.apellidoPaterno.toUpperCase() + " " + this.fichaFormulario.apellidoMaterno.toUpperCase() , 25, 50);    
    doc.text("Nacionalidad: " + this.fichaFormulario.nacionalidad.toUpperCase() , 25, 75);    
    doc.text("Club de Fútbol: " + this.fichaFormulario.club.toUpperCase() , 25, 100);    
    doc.text("Ocupación: " + this.fichaFormulario.ocupacion.toUpperCase() , 25, 125);    
    doc.text("RFC: " + this.fichaFormulario.rfc.toUpperCase() , 25, 150);    
    doc.text("fecha de Nacimiento: " + this.fichaFormulario.fechaNacimiento.toUpperCase() , 25, 175);
    doc.text("Genero: " + this.fichaFormulario.genero.toUpperCase() , 25, 200);
    doc.save("FichaFMF"+ this.fichaFormulario.nombre.toUpperCase() + " " + this.fichaFormulario.apellidoPaterno.toUpperCase()+fechaActual+".pdf");
  }

}
