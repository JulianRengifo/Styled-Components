import React from "react";
import { Box } from "../../UI";
import {lista} from "../../info"

const List = () => {
    return <Box>
        {
            // Destructuramos los datos que queremos mostrar
            // Con map accedemos a los cargos
            lista.cargos.map(({id, type, value, date, from}) => {
                // Key siempre se usa al usar map y es unico
                return <div key={id}>
                    // Muestra el valor de las propiedades 
                    <span>{type}</span>
                    <span>{value}</span>
                    <span>{date}</span>
                    <span>{from}</span>
                </div>
            })
        }
    </Box>
}

export default List;