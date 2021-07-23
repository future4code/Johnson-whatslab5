import React from "react";
import styled from "styled-components";

const InputUsuario = styled.input`
    width: 100px;
    border: none;
    padding: 0 10px;
    
    `
const InputMensagem = styled.input `
    width: 250px;
    border: none;
    padding: 0 10px;
    margin: 0 10px;
`

const InputBotao = styled.input `
    width: 70px;
    border: none;
    

`
const Formulario = styled.form `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    

`

const CaixaMensagem = () => {
    return (
        <Formulario>
            <label>
                <InputUsuario type="text" name="usuario" placeholder="Usuário" />
                <InputMensagem type="text" name="message" placeholder="Mensagem" />
            </label>
            <InputBotao type="submit" value="Enviar" />
        </Formulario>

    )
}

export default CaixaMensagem;