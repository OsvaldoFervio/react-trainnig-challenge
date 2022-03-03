import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ContentView } from './components/ContentView';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Home } from './components/Home';
import { Details } from './components/Details';
import { Routes, Route, Outlet} from "react-router-dom";

const Layout = () => (
  <Fragment>
    <Header/>
    <div>
      <Outlet />
    </div>
  </Fragment>
)

const POKEURL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

const Pokemon = () =>{
  const [pokemon, setPokemon] = useState(null);

  useEffect( ()=>{
    const fetchPokemon = async () =>{
      const pokemonResponse = await fetch(POKEURL);
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
export function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="pokemon" element={<Pokemon />} />
          <Route path="album" element={<ContentView />} />
          <Route path="about" element={<About />} />
          <Route path="details" element={<Details />} />

        </Route>
      </Routes>
      <Footer/>    
    </Fragment>
  )
}

export default App;
