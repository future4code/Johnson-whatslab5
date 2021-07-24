import React from "react";
import "./App.css";
import styled from "styled-components";
import ContainerHistorico from "./components/ContainerHistorico/ContainerHistorico";

const CardContainer = styled.div`
  background-color: rgb(220, 248, 198);
  padding: 8px;
  color: white;
  text-align: center;
  height: 80vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(7,94,84);
  justify-content: space-between;
  align-items: center;


`;
const InputUsuario = styled.input`
    width: 100px;
    border: 1px solid rgb(7,94,84);
    padding: 0 10px;
    
    `
const InputMensagem = styled.input `
    width: 250px;
    border: 1px solid rgb(7,94,84);
    padding: 0 10px;
    margin: 0 10px;
`

const InputBotao = styled.input `
    width: 70px;
    border: 1px solid rgb(7,94,84);
    

`
const Formulario = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

`

export default class App extends React.Component {
  state = {
    valorMensagem: '',
    valorNome: '',
  };
  
  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  }
  onChangeMensagem = (event) => {
    this.setState({valorMensagem: event.target.value})
  }

  adicionarUsuario = () => {

  }

  adicionarMensagem = () => {
    console.log('Adicionando Mensagem', this.state.textoMensagemEnviada)
  }
  F
  apagarMensagem = () => {
    console.log('Apagar Mensagem')
  }
  

  render() {
    return (
      <CardContainer>
        <ContainerHistorico />
        <Formulario>
            <label>
                <InputUsuario  
                    name={"nome"} 
                    onChange={this.onChangeNome} 
                    value={this.state.valorNome} 
                    placeholder="Usuário" 
                />
                <InputMensagem
                    name="message"
                    onChange={this.onChangeMensagem}
                    value={this.state.valorMensagem}
                    placeholder="Mensagem"
                />
            </label>
            <InputBotao type="submit" value="Enviar" />
        </Formulario>
      </CardContainer>
    );
  }
}



