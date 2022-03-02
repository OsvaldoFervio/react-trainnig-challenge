import React, { useEffect, useState } from 'react';
import { PokeList } from './PokeList';
import styled from 'styled-components';
import {pokemons} from '../api/pokemons'

const AppContainer = styled.div`
background-color: #00b392;
margin:0 auto;
padding: 2rem;
`;

export function ContentView(){    
    const [count,setCount] = useState(0);
    const [searchName,setSearchName] = useState('');
    const [details,setDetails] = useState(0);
    
    const pokemonFiltered = pokemons.filter((pokemons) => pokemons.pokeName.startsWith(searchName.toLocaleLowerCase()));

    const handleChange =(event)=> {
        setSearchName(event.target.value);
    };

    const handleBack =(event)=> {
        setSearchName('');
    };
    
    
    useEffect( () => {
        if(!searchName) {
            setDetails(0);
        }else{
            setDetails(1);
        }
        
        console.log(searchName);
    },[searchName])

    
    return(
        <AppContainer>
            <div className='container'>
                <h1>
                    My Album!
                </h1>
                <div>
                    <label >Ingresa el nombre de un pokemon:</label>
                    <input 
                    type="text" 
                    placeholder='Buscar'
                    value={searchName} 
                    onChange={ handleChange } 
                    />
                </div>
                <PokeList items = { pokemonFiltered} onCardClick = {handleChange} 
                backClick={handleBack} details= {details}/>
                <div align="Center">                    
                <button > {'<<'} </button>{' '}
                <button >{'<'} </button>{' '}
                <button >{'>'} </button>{' '}
                <button >{'>>'} </button>{' '}
            </div>
            </div>
    </AppContainer>
    )
}