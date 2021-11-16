import React from "react"
import { Component } from "react/cjs/react.development";
import "./estilo.css"
import cabecalho from "./imagens/b0.png"

export default class oficial extends Component{
   render(){
            return(
                <div className="cabecalho">
                    <img alt="imed" class="cabecalho1" src={cabecalho} />
                </div>
           );
    } 
}

