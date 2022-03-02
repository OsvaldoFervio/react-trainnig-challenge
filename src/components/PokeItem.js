import React, { Fragment, useState } from 'react';

import styled from 'styled-components';
const ImgContainer = styled.img`
width: 100px;
`;


export const PokeItem= ({ item,  onCardClick, backClick, details}) =>{
    const { pokeName, pokeType, description, url, key } = item

    if(details){
        return(
            <Fragment>
                <li>
                    <ImgContainer src={url} alt ="pokelogo"/>
                </li>
                <div>
                    <label>Name:</label><a>{pokeName}</a>
                </div>                
                <div>
                    <label>Type:</label>{pokeType}
                </div>
                <div>
                    <label>Description:</label>{description}
                </div>
                <button
                    className='success'
                    value={pokeName}
                    onClick ={backClick}
                    >Back
                </button> 
            </Fragment>
            );
        }
        else{
            return(
                <Fragment>
                    <li>
                        <ImgContainer src={url} alt ="pokelogo"/>
                    </li>
                    <div>
                        <label>Name:</label><a>{pokeName}</a>
                    </div>                                    
                    <div>
                        <button  
                            className='success'
                            value={pokeName}
                            onClick ={onCardClick}
                            >Show Details</button> 
                    </div>
                </Fragment>
                );
        }
    
    
        
    
}