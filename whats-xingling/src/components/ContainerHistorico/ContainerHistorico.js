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
    position: relative;
    width: 60%;
    font-size: 1em;
    height: 20%;
    background-color: rgb(255, 169, 73,.6);
    color: rgb(50,50,50);
    margin:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: ${(props) => props.position === "left"? "flex-start" : "flex-end"};
    align-items: ${(props) => props.position === "left"? "flex-start" : "flex-end"};
    border-radius: 30px 0;
      
        
`
const NomeUsuario = styled.h5 `
    margin: 5px 30px 0px;
    font-size: .9em;
`
const TextoUsuario = styled.p `
    margin: 0 50px;
`

const Deletar = styled.button`
    font-size: .5em;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px;
    border: 0;
    background-color: #ef5656;
    border-radius: 50%;
    cursor: pointer;
`
const ContainerHistorico = (props) => {
    console.log(props.mensagens)
    const renderizarMensagens=() => {
        return props.mensagens.map(({nome, texto, messagePosition}, indice) => (
            <ContainerTexto key={indice} position={messagePosition}>
                <NomeUsuario>
                    {nome}
                </NomeUsuario>
                <TextoUsuario>
                    {texto}
                </TextoUsuario>
                <Deletar onClick={() => props.deletarMensagem(indice)}>
                    X
                </Deletar>
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