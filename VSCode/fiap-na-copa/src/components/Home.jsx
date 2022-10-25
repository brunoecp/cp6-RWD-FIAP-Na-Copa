import React from 'react';
import album from './img/album.png'
import figurinhas from './img/figurinhas.png'
import { divImgs } from './style/styled';

export default function Home() {
  return( 
  <div>
    <h1>Home</h1>
    <divImgs>
        <img src={album} alt="album" />
        <img src={figurinhas} alt="figurinhas"/>
    </divImgs>
    <div className='texto'></div>
  </div> 
    );
}