import React, { Component } from 'react';
import './Cadastro.css';

class Cadastro extends Component {
    render() {
        return (
            <div className="Cadastro">
                <h2>CADASTRE-SE</h2>
                <input type="text" placeholder="Digite seu Nome" />
                <input type="text" placeholder="Digite sua Senha" />
                <button>Cadastrar</button>
            </div>
        );
    }
}

export default Cadastro;