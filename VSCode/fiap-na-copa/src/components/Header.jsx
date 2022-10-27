import React from "react";
import { Link } from "react-router-dom";

const myStyle = {
        textDecoration: "none",
        fontSize: "25px",
        color: "rgb(204, 204, 204)",
        padding: "1px 20px 20px 10px"
};

export default function Header() {
  const cliente = sessionStorage.getItem("usuario-validado");

  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };
  const sinal = () => {
    if (!cliente) {
      alert("é preciso logar antes");
    }
  };

  return (
    <header
      style={{
        width: "100%",
        height: "48px",
        marginTop: "40px",
        marginBottom: "40px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <h1 style={{ fontSize: "40px", color: "rgb(204, 204, 204)" }}>
        FIAP + Qatar
      </h1>
      {cliente ? (
        <div className="menu" style={myStyle}>
          <div className="logout">
            <span className="itemLogout">{cliente}</span>
            <button className="itemLogout" onClick={logout}>
              Logout
            </button>
          </div>
          <Link className="item" to="/home">
            Home
          </Link>
          <Link className="item" to="/figuInter">
            Figurinhas internacionais
          </Link>
          <Link className="item" to="/figuNacio">
            Figurinha nacionais
          </Link>
        </div>
      ) : (
        <div className="menu" style={{myStyle}}>
          <Link className="item" to="/">
            Login
          </Link>
          <Link className="item" onClick={sinal}>
            Home
          </Link>
          <Link className="item" onClick={sinal}>
            Figurinhas internacionais
          </Link>
          <Link className="item" onClick={sinal}>
            Figurinha nacionais
          </Link>
        </div>
      )}
    </header>
  );
}
