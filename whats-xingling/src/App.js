import React from "react";
import "./App.css";
import styled from "styled-components";
import CaixaMensagem from "./components/CaixaMensagem/CaixaMensagem";
import ContainerHistorico from "./components/ContainerHistorico/ContainerHistorico";

const CardContainer = styled.div`
  background-color: rgb(81, 127, 164);
  padding: 8px;
  color: white;
  text-align: center;
  height: 80vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;


`;
//Funçao para adicionar item a postagem
// adicionarMensagem = () => {
//   console.log('Adicionando Mensagem', this.state.textoMensagemEnviada)
// }
//Funçao para excluir item a postagem
// adicionarMensagem = () => {
//   console.log('Apagar Mensagem')
// }

export default class App extends React.Component {
  state = {
    textoMensagemEnviada: '',
    textoNomeUsuario: '',
  };

  

  render() {
    return (
      <CardContainer>
        <ContainerHistorico />
        <CaixaMensagem />
      </CardContainer>
    );
  }
}



