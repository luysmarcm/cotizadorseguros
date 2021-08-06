import React from 'react';
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper';


const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #50afaa;
  color: #fff;
  margin-top: 1rem;
`;


const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '' ) return null;

    return ( 

        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>MARCA: {primerMayuscula(marca)} </li>
                <li>PLAN: {primerMayuscula(plan)} </li>
                <li>AÑO DEL AUTO: {year } </li>
            </ul>
        </ContenedorResumen>

     );
}
 
export default Resumen;