import React from 'react';
import '../css/Header.css';
import search from '../img/search.png';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <section>
      <header>
        <h1> SUNO <span className="mov-title">MOVIES</span></h1>
        <div>
          <nav>
            <Link>INICIO</Link>
            <Link>CATALOGO</Link>
          </nav>
          <input 
            type="image" 
            src={ search } 
            alt="search magnifier glass" 
          />
        </div>
      </header>
    </section>
  );
}

export default Header;
