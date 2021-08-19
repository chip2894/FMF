import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { generos } from '../data/generos';
import { nacionalidades } from '../data/nacionalidades';

@Injectable()
export class GenericoService{

    private generos = generos;
    private nacionalidades = nacionalidades;

    constructor(){
        console.log("Servicio listo para usar");
    }

    obtenerGeneros(){
        return this.generos;
    }

    obtenerNacionalidades(){
        return this.nacionalidades;
    }

}