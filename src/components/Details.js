import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
const ImgContainer = styled.img`
width: 75%;
`;


const POKEURL = 'https://pokeapi.co/api/v2/pokemon/';

const Pokemon = (name) =>{
  const [pokemon, setPokemon] = useState(null);

  useEffect( ()=>{
    const fetchPokemon = async () =>{
      const pokemonResponse = await fetch(POKEURL+name);
      const pokemonData = await pokemonResponse.json();

      setPokemon(pokemonData);
    };

    fetchPokemon();
  },[])

  return (
    <div>
      pokemon
      {JSON.stringify(pokemon)}
    </div>
  )
}

const img ='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png';

export const Details = () =>{
    return(
        <Fragment>
            <div>               
                <h1>Pokemon Details!</h1>
            <div className='col-25' >
                <ImgContainer src={img} alt ="pokelogo"/>
            </div>
            <div className='col-75'>
                <div>
                    <h1>Pokemon: pikachu</h1>
                </div>
                <div>
                    <p>Detalles:</p>{Pokemon("pikachu")}
                </div>
            </div>
            </div>
        </Fragment>

        );
    }    

