import React from 'react';
import Menu from './components/Header'
import Footer from './components/Footer';
import MainRoutes from './routes/MainRoutes';

export default function App() {
  return(
  <div>
    <Menu/>
    <MainRoutes/>
    <Footer/>
  </div>
  );
}
