
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
//não existe mais switch no react-dom, ele foi substituido por Routes
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav className='navbar navbar-dark navbar-expand-lg' data-bs-theme='dark'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link to="/" className='nav-link'>
              Catálogo
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/dados" className='nav-link'>
              Novo
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={LivroLista}/>
        <Route path='/dados' Component={LivroDados}/>
      </Routes>
    </Router>
  );
}

export default App;
