import React from "react";
import { Box, Btn } from "../../UI";
import {lista} from "../../info"
import Card from "../Card";

const List = () => {
    return <Box>
        {
            // Cargo es cada objeto e i es la posicion dentro del arreglo 0,1,2...
            lista.cargos.map((cargo, i) => {
                // Key siempre se usa al usar map y es unico
                // Se está pasando el valor de cargo como una prop al componente
                return <Card key={i} cargo={cargo}/>
            })
        }
        <Btn>Ver mas</Btn>
    </Box>
}

export default List;