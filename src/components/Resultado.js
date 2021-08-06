import React from "react";
import styled from "@emotion/styled";
//import { TransitionGroup, CSSTransition  } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: #c273da;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: #c273da;
  margin-top: 1rem;
  position: relative;
`;

const Resultado = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige marca, año y tipo de Seguro</Mensaje>
  ) : (
    <ResultadoCotizacion>El total es: ${cotizacion} </ResultadoCotizacion>
  );
};

export default Resultado;
