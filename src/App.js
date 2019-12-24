import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
  }

  return (
    <div className="container">
      <img src={logo} alt="AirCnC Logo" />
      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e econtre <strong>talentos</strong> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="text"
            id="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <button type="submit" className="btn">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
