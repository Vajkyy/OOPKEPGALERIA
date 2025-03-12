import { Kepek } from "./Kepek.js";
import { KEPEKLISTA } from "./adat.js";

const GALERIAELEM = document.querySelectorAll(".galeria")[0]
const GALERIAKEP = new Kepek(KEPEKLISTA, GALERIAELEM)
