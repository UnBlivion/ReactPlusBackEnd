import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="Login">
                <h2>FAZER LOGIN</h2>
                <input type="text" placeholder="Digite seu Nome" />
                <input type="text" placeholder="Digite sua Senha" />
                <button>LOGAR</button>
            </div>
        );
    }
}

export default Login;