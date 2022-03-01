import React from 'react';
import AppContainer from './AppContainer.styled';

const formatText = (text) => text.toUpperCase();

const AppWrapper = ({ type, text }) => {
    return (
        <AppContainer type={type}>
            {formatText(text)}
        </AppContainer>
    )
}

export default AppWrapper;