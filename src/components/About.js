import React from 'react';

import styled from 'styled-components';
const Div = styled.body`
text-align:center;
color:blue;
background-color:orange;
height: 100px;
`;

export const About = () =>{
    return(
        <Div>
            <h1>Hi I'm a About page!!!</h1>
        </Div>
        );
    }    
