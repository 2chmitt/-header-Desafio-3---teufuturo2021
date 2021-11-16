import React from "react"
import { Component } from "react/cjs/react.development";
import "./estilo.css"
import logo from "./imagens/teu.png"
import imed from "./imagens/imed-white.png"

 export default class Cabecalho extends Component{
    render(){
        return(
            <header>
                <div className="conteiner">
                    <h1><img alt="logo" className="logo" src={logo}/></h1>
                        <nav>
                            <ul>
                                <li className = "b"><a href="https://www.imed.edu.br"><img alt="imed" src={imed}/></a></li>
                                <li><a className="a" data-title="Sobre" href="teufuturodelas.html">&#128464;</a></li>
                                <li><a className="a" data-title="Video" href="#video1">▶</a></li>
                                <li><a className="a" data-title="Contato" href="#contact">&#9743;</a></li>
                            </ul>
                        </nav>
                </div>      
           
            
           
            </header>

            
        );    
    }
}
