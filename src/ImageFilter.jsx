import React from "react";
import { Icono } from "./UI";
import alimentacion from "./assets/images/alimentacion.svg"
import utilidades from "./assets/images/utilidades.svg"
import salud from "./assets/images/salud.svg"
import transporte from "./assets/images/transporte.svg"
import otros from "./assets/images/otros.svg"


export default (type) => {
    // Definimos un objeto Images que contiene diferentes componentes Icono según el tipo.
    const Images = {
        Restaurante: <Icono src={alimentacion} alt="Restaurante"/>,
        Utilidades: <Icono src={utilidades} alt="Utilidades"/>,
        Salud: <Icono src={salud} alt="Salud"/>,
        Transporte: <Icono src={transporte} alt="Transporte"/>,
        otros: <Icono src={otros} alt="otros"/>
    };

    //Devuelve el componente Icono correspondiente al tipo (type) especificado. Si no existe un componente para ese tipo, devolverá otros
    return Images[type] || Images["otros"];
}