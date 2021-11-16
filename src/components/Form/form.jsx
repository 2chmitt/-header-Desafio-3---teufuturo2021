import React from "react"
import { Component } from "react/cjs/react.development";
import "./estilo.css"

export default class Formulario extends Component{

    render(){
        return(
            <section className="contact">
                    <form id="contact" action="https://formsubmit.co/phoenixsteam.tf@gmail.com" method="POST" className="formulario">
                        <div className="projeto"  id="mensagem1">
                            Caso tenha se interessado pelo projeto e deseje participar ou apoiar, escreva seu email abaixo para contato, que será enviado a equipe <b>PHOENIX</b> para mais detalhes.
                            <p>E também caso queira, deixe uma mensagem de feedback para nós!</p>
                        </div>
                        <div className="mensagem">
                            
                            <label for="text">Nome</label>
                            <input type="name" name="nome" required placeholder="seunome"/>

                            <label for="text">Email para contato</label>
                            <input type="email" name="email" required placeholder="seuemail@dominio.com"/>
                           
                            <label for="sugestao">FeedBack</label>
                            <textarea cols="50" id="sugestao" rows="10"></textarea>
                        </div>
                        <input type="submit" value="Enviar contato" className="enviar"/>

                 </form>
                               
                </section>

        );
    }



}
