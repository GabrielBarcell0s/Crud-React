import React from "react";
import styled from "@emotion/styled";

function Carregamento(props) {
  const CarregamentoCss = {
    display: "flex",
    width: props.tipo === "editar" ? 200 : "100vw",
    height: props.tipo === "editar" ? 200 : 400,
    justifyContent: "center",
    alignItems: "center"
  }

  const Looding = styled.div`
    border: ${props.tipo === "editar" ? "8px solid rgba(0,0,0,0.1)": "15px solid rgba(0,0,0,0.1)"};
    border-Left-Color: #002980;
    width: ${props.tipo === "editar" ? "100px": "300px"};
    height: ${props.tipo === "editar" ? "100px": "300px"};
    border-Radius: 50%;
    animation: carregar 1s linear infinite;

    @keyframes carregar {
      to{
    transform: rotate(360deg);
      }
    }
  `

  return (
    <div style={CarregamentoCss}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Looding />
      </div>
    </div>)
}

export default Carregamento