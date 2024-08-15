import {
    fondoClaro,
    contenidoClaro,
    textoFondoClaro,
    fondoOscuro,
    contenidoOscuro,
    textoFondoOscuro
} from "./Variables"

export const temaClaro = {
    body: fondoClaro,          //Define el color de fondo para el cuerpo de la aplicación
    inside: contenidoClaro,    //Define el color de fondo para los contenedores internos
    text: textoFondoClaro,      //Define el color del texto 
    filter: ""
}

export const temaOscuro = {
    body: fondoOscuro,
    inside: contenidoOscuro,
    text: textoFondoOscuro,
    //Invertirá completamente los colores del elemento. Por ejemplo, el negro se convertirá en blanco
    filter:"invert(100%)"
}