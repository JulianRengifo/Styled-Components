import React from "react";
import styled from "styled-components";
import ImageFilter from "../../ImageFilter";

const Card = styled.div`
    box-shadow: 4px 4px 20px 0px rgb(0,0,0,0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`

//Creamos un componente para la informacion llamado Info con sus estilos
const Info = styled.div`
    display: flex;
    flex-direction: column;

    //Dentro de la estructura styled-components se pueden crear clases
    //Creamos una clase dentro de la const Info para agregar el resalte en negro al span type
    .type{
        font-weight: bold;
    }
`

export default ({cargo}) => {
    /*Destructuramos la informacion y lo obtenemos del objeto cargo, para poder acceder a la informacion de cada uno de los cargos*/
    const{id, type, value, from, date} = cargo
    return <Card>
        {/*atravez del type le decimos cual es el icono*/}
        {ImageFilter(type)}
        <Info>
            <span className="type">{type}</span>
            <span>{value}</span>
            <span>{from}</span>
        </Info>
            <span>{date}</span>
    </Card>
}