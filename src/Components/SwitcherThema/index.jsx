import React from "react";
import themeOn from "../../assets/images/themeOn.svg"
import themeOff from "../../assets/images/themeOff.svg"
import { Icono } from "../../UI";

/* Alternar visualmente entre dos íconos dependiendo de si el tema de la aplicación es claro u oscuro.*/
export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema claro"/>
    const oscuro = <Icono src={themeOff} alt="Tema oscuro"/>

    {/*La función anónima exportada maneja este cambio y retorna el ícono correspondiente basado en el valor de tema.*/}
    return <>{tema ? oscuro : claro}</>;
}