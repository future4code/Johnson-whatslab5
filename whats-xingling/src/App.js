import React from "react";
import "./App.css";
import styled from "styled-components";
import ContainerHistorico from "./components/ContainerHistorico/ContainerHistorico";
import background  from './components/imagens/background.png'


const CardContainer = styled.div`
  background-color: rgb(255, 169, 73);
  padding: 8px;
  color: white;
  text-align: center;
  height: 80vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(255,121,26);
  justify-content: space-between;
  align-items: center;



`;
const InputUsuario = styled.input`
    width: 8vw;
    height: 4vh;
    border: 1px solid rgb(156,177,191);
    border-radius: 0.5em;
    padding: 0 10px;
    
    `
const InputMensagem = styled.input `
    width: 24vw;
    height: 4vh;
    border: 1px solid rgb(156,177,191);
    border-radius: 0.5em;
    padding: 0 10px;
    margin: 0 10px;
`

const  InputBotao = styled.input `
    width: 6vw;
    height: 4vh;
    border: 0.5px solid rgb(255,121,26);
    border-radius: 0.5em;
    background-color: rgb(255,121,26);
    cursor: pointer;
    text-align: center;
   

`
const Formulario = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60vw;
    

`

export default class App extends React.Component {
  state = {
    mensagens:[],
    valorTexto: '',
    valorNome: '',
  };
  
  onChangeNome = (event) => {
    this.setState({valorNome: event.target.value})
  }
  onChangeMensagem = (event) => {
    this.setState({valorTexto: event.target.value})
  }

  getMessagePosition = () => {
    if(this.state.valorNome === "eu" || this.state.valorNome === "EU") {
       return "right"
     } 
    return "left"
   


  }

  adicionarMensagem = () => {
    if (this.state.valorNome.length && this.state.valorTexto.length) {
       const novaMensagem = {
        nome:this.state.valorNome,
        texto:this.state.valorTexto,
        messagePosition: this.getMessagePosition()
      }

      this.setState({mensagens:[...this.state.mensagens, novaMensagem],valorNome:"", valorTexto:""})
    } else {
      alert('Digite alguma coisa!')
    }
  }
  
  deletarMensagem = (indice) => {
    const mensagens = this.state.mensagens
    mensagens.splice(indice, 1)

    this.setState({
      mensagens
    })
  }
  captureSubmit = (event) => {
    event.preventDefault();
    this.adicionarMensagem();

  };
  

  render() {
    return (
      <CardContainer>
        <ContainerHistorico mensagens={this.state.mensagens} deletarMensagem={this.deletarMensagem} />
      
        <Formulario onSubmit={this.captureSubmit}>
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
                    value={this.state.valorTexto}
                    placeholder="Mensagem"
                />
            </label>
            <InputBotao type="submit" value="Enviar" onClick={this.captureSubmit} />
        </Formulario>
      </CardContainer>
    );
  }
}



