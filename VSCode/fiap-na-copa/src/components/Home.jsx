import React from 'react';
import album from './img/album.png'
import figurinhas from './img/figurinhas.png'
import './style/style.css'
import { divImgs } from './style/styled';

export default function Home() {
  return( 
  <div>
    <h1>Home</h1>
    <div className='imgs'>
        <img className='imgs' src={album} alt="album" />
        <img className='imgs' src={figurinhas} alt="figurinhas"/>
    </div>
    <div className='texto'></div>
  </div> 
    );
}