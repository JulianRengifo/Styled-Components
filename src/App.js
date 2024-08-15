import React, {useState} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./UI";
import SwitcherThema from "./Components/SwitcherThema";


function App() {

  //tema es el nombre de la variable y setTema es la funcion que se llama para pder hacer el cambio de esa variable
  const [tema, setTema] = useState(true)

  // La función toggleTema que alterna (cambia) el valor del estado tema entre true y false
  const toggleTema = () => {
    //React actualiza el estado con el valor opuesto al actual.
    setTema((tema) => ! tema)
  }

  return (
    //Encapsulamos los componentes que van a eredar los colores dependiendo del tema
    //Pasamos el objeto como el tema a utilizar. Esto significa que todos los componentes hijos que consumen el tema recibirán los valores definidos
    /* En el componente ThemeProvider pasamos a la prop theme del ThemeProvider, es una expresión ternaria que evalúa la variable tema*/
    <ThemeProvider theme = {tema ? temaClaro : temaOscuro}>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherThema tema = {tema}/>  {/*pasamos una prop llamada tema con el valor true*/}
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
