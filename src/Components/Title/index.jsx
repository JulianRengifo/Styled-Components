import React from "react";
import styled from "styled-components";

const Title = styled.h1`
color: grey;
padding: 25px 0;
`

/*El componente Title es un componente funcional simple que recibe children como prop y devuelve un elemento <h1> con esos children dentro*/
/* const Title = ({ children }) => {
  return <h1 className="title">{children}</h1>;
}; */
export default Title;
