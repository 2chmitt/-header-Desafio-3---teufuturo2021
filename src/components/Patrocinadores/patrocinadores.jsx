import React from "react"
import { Component } from "react/cjs/react.development";
import "./estilo.css"
import yaman from "./imagens/logo-yaman@2x.png"
import IMED from "./imagens/imed.png"

export default class Patrocinador extends Component{
    render(){
        return(
            <section className="transicao">
                <div className="conteiner1">
                    <p className="textoyaman"> Patrocinadores </p>
                </div>
                    <img alt="yaman" className="yaman" src={yaman}/>
                    <img alt="IMED" className="imed" src={IMED}/>
            </section>
        );
    }
}