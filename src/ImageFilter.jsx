import React from "react";
import { Icono, IconoTema } from "./UI";
import alimentacion from "./assets/images/alimentacion.svg"
import utilidades from "./assets/images/utilidades.svg"
import salud from "./assets/images/salud.svg"
import transporte from "./assets/images/transporte.svg"
import otros from "./assets/images/otros.svg"


export default (type) => {
    // Definimos un objeto Images que contiene diferentes componentes Icono según el tipo.
    const Images = {
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"/>,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades"/>,
        Salud: <IconoTema src={salud} alt="Salud"/>,
        Transporte: <IconoTema src={transporte} alt="Transporte"/>,
        otros: <IconoTema src={otros} alt="otros"/>
    };

    //Devuelve el componente Icono correspondiente al tipo (type) especificado. Si no existe un componente para ese tipo, devolverá otros
    return Images[type] || Images["otros"];
}