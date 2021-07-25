import React from "react";
import styled from "styled-components";

const ContainerMensagens = styled.div `
    height:90%;
    width: 80%;
    background-color: #ece5dd;
    border: 1px solid rgb(156,177,191);
    border-radius: 0.5em;
    display: flex;
    flex-direction: column-reverse;
    `
const ContainerTexto = styled.div `
    width: 60%;
    font-size: 1em;
    height: 20%;
    background-color: rgb(255, 169, 73,.6);
    color: rgb(50,50,50);
    margin:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 30px 0;
        
`
const NomeUsuario = styled.h5 `
    margin: 5px 0px 0px 30px;
    font-size: .9em;
`
const TextoUsuario = styled.p `
    margin: 0 0 0 50px;
`

const ContainerHistorico = (props) => {
    console.log(props.mensagens)
    const renderizarMensagens=() => {
        return props.mensagens.map((mensagem, indice) => (
          <ContainerTexto key={indice}>
              <NomeUsuario>
                  {mensagem.nome}
              </NomeUsuario>
              <TextoUsuario>
                  {mensagem.texto}
              </TextoUsuario>
          </ContainerTexto>  
        ))
            
    }
    return (
        <ContainerMensagens>
            {renderizarMensagens()}
        </ContainerMensagens>

    )
}

export default ContainerHistorico;