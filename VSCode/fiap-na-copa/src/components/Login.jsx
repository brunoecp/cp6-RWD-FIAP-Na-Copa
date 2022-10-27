import React, { useState } from "react";
import styled from "styled-components";

const DivLogin = styled.div`
    max-width: 500px;
    margin: auto;
    margin-top: 49px;
    margin-bottom: 20px;    
    padding: 100px;
    background: rgb(195,161,120);
    border-radius: 50px;
    form{
        background: rgb(195,161,120);
    }
    fieldset, div{
        padding: 15px;
        background: #91233e;
        border-radius: 50px;
        color: rgb(195,161,120);
        border: none;
        outline: none;    
    }
    button{
        padding: 10px;
        background-color:  rgb(204, 204, 204);
        border-radius: 10px;
        font-family: 'Lora';
        font-size: 16px;
        border: none;
        transition: ease-in-out 1s;
        margin-left: 39%;
    }
`

export default function Login() {
  const [cliente, setCliente] = useState({
    login: "",
    senha: "",
    rm: "",
    nome: "",
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };
  const logar = async (e) => {
    e.preventDefault();

    const request = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    };

    const response = await fetch(
      "http://localhost:8080/FIAP-Copa/rest/login",
      request
    );
    const data = await response.json();

    if (data.login) {
      sessionStorage.setItem("usuario-validado", data.nome);
      window.location = "/home";
      alert("tenha um bom entreterimento " + data.nome);
    } else if (data == null) {
      alert("Usuario inválido");
    }
  };

  return (
    <DivLogin>
      <form onSubmit={logar}>
        <fieldset>
          <div>
            <label htmlFor="idLogin">Login: </label>
            <input
              type="text"
              name="login"
              id="idLogin"
              value={cliente.login}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idLogin">Senha: </label>
            <input
              type="password"
              name="senha"
              id="idPassword"
              value={cliente.senha}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idLogin">RM: </label>
            <input
              type="text"
              name="rm"
              id="idRm"
              value={cliente.rm}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="idLogin">Nome: </label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={cliente.nome}
              onChange={handleChange}
            />
          </div>
          <button>Entrar</button>
        </fieldset>
      </form>
    </DivLogin>
  );
}
