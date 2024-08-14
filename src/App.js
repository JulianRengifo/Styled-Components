import React from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./UIC/temas";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    //Encapsulamos los componentes que van a eredar los colores dependiendo del tema
    //Pasamos el objeto como el tema a utilizar. Esto significa que todos los componentes hijos que consumen el tema recibirán los valores definidos
    <ThemeProvider theme = {temaOscuro}>
      <GlobalStyle/>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
