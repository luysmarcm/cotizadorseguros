import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import styled from "@emotion/styled";
import Spinner from "./components/Sprinner";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {

  

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''

  }});

  const {cotizacion, datos} = resumen;

  const [cargando, setCargando] = useState(false)

  

  return (
    <Contenedor>
      <Header titulo="Cotizador de Seguros" />

      <ContenedorFormulario>
        <Formulario 
        setResumen={setResumen}
        setCargando={setCargando}
         />


        {cargando ?  <Spinner/> : null  }
       

        <Resumen
          datos={datos}
        />

        <Resultado
          cotizacion={cotizacion}
        />
      </ContenedorFormulario> 
    </Contenedor>
  );
}

export default App;
