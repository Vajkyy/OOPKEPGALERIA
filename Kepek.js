import Kep from "./Kep.js";

export class Kepek{
    #lista;

    constructor (lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.listaMegjelenit();
    }
    listaMegjelenit(){
        for (let i = 0; i < this.#lista.length; i++) {
            const GALERIAKEP = new Kep(this.#lista[i].kep, this.#lista[i].cim, this.szuloElem);
        }
    }
}