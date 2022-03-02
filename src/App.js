import logo from './logo.svg';
import './App.css';

import React, { Fragment } from 'react';
import { Header } from './components/Header';
import { ContentView } from './components/ContentView';
import { Footer } from './components/Footer';



export function App() {
  return (
    <Fragment>
      <Header/>
      <ContentView/>      
      <Footer/>    
    </Fragment>
  )
}

export default App;
