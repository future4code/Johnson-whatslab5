import React from "react";
import styled from "styled-components";

const ContainerMensagens = styled.div `
    height:90%;
    width: 80%;
    background-color: #ece5dd;
    border: 1px solid rgb(156,177,191);
    border-radius: 0.5em;

`

const ContainerHistorico = (props) => {
    console.log(props.mensagens)
    const renderizarMensagens=() => {
        return props.mensagens.map((mensagem, indice) => (
          <div key={indice}>
              <p>
                  {mensagem.nome}
              </p>
              <p>
                  {mensagem.texto}
              </p>
          </div>  
        ))
            
    }
    return (
        <ContainerMensagens>
            {renderizarMensagens()}
        </ContainerMensagens>

    )
}

export default ContainerHistorico;