import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {

const cliente = sessionStorage.getItem("usuario-validado");

const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
};
const sinal = ()=>{
    if(!cliente){
        alert("é preciso logar antes")
    }
}

  return( 
  <header className='cabecalho'>
    <h1>FIAP</h1>
    {cliente ? 
    <div className='menu'>
        <span>{cliente}<button onClick={logout}>logout</button> | </span> 
        <Link onClick={sinal} to="/home">home</Link> |  
        <Link to="/figuInter">Figurinhas internacionais</Link> |  
        <Link to="/figuNacio">Figurinha nacionais</Link>
    </div>
    :
    <div className='menu'> 
    <span><Link to="/">login</Link> | </span>
    <Link onClick={sinal}>home</Link> |  
    <Link onClick={sinal}>Figurinhas internacionais</Link> |  
    <Link onClick={sinal}>Figurinha nacionais</Link>
    </div>} 
  </header> 
    );
}