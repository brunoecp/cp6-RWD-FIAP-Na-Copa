import React,{useState} from 'react';

export default function Login() {
    const [cliente, setCliente] = useState({
        login: "",
        senha: "",
        rm: "",
        nome: ""
      });

    const handleChange= (e) =>{
        setCliente({...cliente,[e.target.name]: e.target.value})
    }
    const logar = async (e) =>{
        e.preventDefault();

        const request ={
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cliente),
        };

        const response = await fetch(
            "http://localhost:8080/FIAP-Copa/rest/login",
            request
        )
        const data = await response.json();

        if(data.login){
            sessionStorage.setItem("usuario-validado", data.nome)
            window.location = "/home"
            alert("tenha um bom entreterimento " + data.nome)
        }else if(data.login == null){
            alert("Usuario inválido")
        }
    }

  return( 
  <div>
    <h1>Login</h1>
    <form onSubmit={logar}>
        <fieldset>
            <legend>LOGIN</legend>
            <div>
                <label htmlFor="idLogin">Login</label>
                <input type="text" name="login" id ="idLogin" placeholder="Login" value={cliente.login} onChange = {handleChange}/>
            </div>
            <div>
                <label htmlFor="idLogin">Senha</label>
                <input type="password" name="senha" id ="idPassword" placeholder="Senha" value={cliente.senha} onChange = {handleChange}/>
            </div>
            <div>
                <label htmlFor="idLogin">Rm</label>
                <input type="text" name="rm" id ="idRm" placeholder="RM" value={cliente.rm} onChange = {handleChange}/>
            </div>
            <div>
                <label htmlFor="idLogin">Nome</label>
                <input type="text" name="nome" id ="idNome" placeholder="Nome" value={cliente.nome} onChange = {handleChange}/>
            </div>
            <button>Entrar</button>
        </fieldset>
    </form>
  </div> 
    );
}