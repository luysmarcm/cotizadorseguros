import React from "react";
import styled from "@emotion/styled";
//import { TransitionGroup, CSSTransition  } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: #50afaa;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #50afaa;
  background-color: #50afaa;
  margin-top: 1rem;
  color: #ffffff;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>ELIGUE MARCAR, AÑO Y TIPO DE SEGURO</Mensaje>
  ) : (
    <ResultadoCotizacion>El total es: ${cotizacion} </ResultadoCotizacion>
  );
};

export default Resultado;
