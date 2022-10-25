import React from 'react';
import { Link } from "react-router-dom";
import './style/style.css'

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
        <div className='logout'>
            <span className='itemLogout' >{cliente}</span>
            <button className ='itemLogout' onClick={logout}>logout</button>
        </div> 
        <Link className='item' to="/home">home</Link>   
        <Link className='item' to="/figuInter">Figurinhas internacionais</Link>   
        <Link className='item' to="/figuNacio">Figurinha nacionais</Link>
    </div>
    :
    <div className='menu'> 
    <Link className='item' to="/">login</Link>
    <Link className='item' onClick={sinal}>home</Link>  
    <Link className='item' onClick={sinal}>Figurinhas internacionais</Link> 
    <Link className='item' onClick={sinal}>Figurinha nacionais</Link>
    </div>} 
  </header> 
    );
}