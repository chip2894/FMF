import { ReturnStatement } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { generos } from '../data/clubes';

@Injectable()
export class ClubesService{

    private clubes = generos;

    constructor(){
        console.log("Servicio listo para usar");
    }

    obtenerClubes(){
        return this.clubes;
    }

}