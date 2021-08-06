import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
  background-color: #11989c;
  padding: 30px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2rem;
`;

const TextoHeader = styled.h1`
        font-size: 2rem;
        margin: 0;
        font-family: 'Work Sans', sans-serif;
        text-align: center;

`

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>



     );
}
 
export default Header;

