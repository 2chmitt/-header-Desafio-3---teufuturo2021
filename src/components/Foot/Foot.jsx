import React from "react"
import { Component } from "react/cjs/react.development";
import "./estilo.css"
import Phoenix from "./imagens/phoenix.jpg"
export default class Foot extends Component{
    render(){
        return(
            <footer>  
                <div className="phoenix">
                    <img alt="logo-phoenix" className="phoenix" src={Phoenix}/>
                </div>
                <p className="copy" >&copy;Copyright Phoenix - 2021</p>
                <p className="contato">Contatos:</p>
                <p className="contatos">phoenixsteam.tf@gmail.com</p>
            </footer>
        );
    }
}