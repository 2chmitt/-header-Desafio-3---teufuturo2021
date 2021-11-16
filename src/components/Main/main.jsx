
import React from 'react'
import { Component } from "react/cjs/react.development";
import "./estilo.css"
import Rheader from "./imagens/Rheader.png"
import LeiaMais from 'react-show-more-button'

export default class Main extends Component{
    render(){
        return(
            <main> 

            <div className="programa"> 
                <p>____________________________________________</p>
                                    
                                <LeiaMais>    
                                    <h2>Mulheres na área de TI</h2>
                                    
                                    <p>Há muitos anos as mulheres são vistas como um tabu na área da tecnologia, de acordo com o levantamento da pesquisa Nacional por Amostra de Domicílios (PNAD), dos mais de 580 mil profissionais de TI cerca de apenas 20% são mulheres que estão neste cargo, e esse percentual não se estende apenas ao Brasil, mas a boa parte do mundo.</p>
                                
                                    <p>79% das mulheres que ingressam em cursos relacionados a área de TI abandonam a faculdade ainda no primeiro ano.</p>
                                    <p>Para Barbara Castro doutorada em sociologia especializada em relações de trabalho no setor de tecnologia, o problema começa na infância, ainda de acordo com a pesquisadora, o tipo de educação que as crianças recebem nas escolas e famílias influencia as futuras decisões de carreira.</p>
                                    
                                    <p>Pesquisas feitas pela empresa TWIRI indicam que cerca de 27% das empresas não têm nenhuma mulher fazendo parte da liderança, a falta de representatividade tem servido como um dos diversos motivos para as mulheres se distanciarem desse setor.</p>
                                    <p>Temos também questões culturais e educacionais que aparecem desde cedo, um exemplo disso é que meninos quando crianças são apresentados por grande parte das famílias a brincadeiras envolvendo vídeo games e computadores, já as meninas o contrário, são abordadas por bonecas, kits de cozinha, entre outros.</p>
                                    
                                    <p>A presença feminina trará o empoderamento da mulher na TI, sendo uma ótima forma de chamar a atenção de outras mulheres que tem o sonho de ingressarem nesses  cargos mas ainda tem insegurança quanto a isso.</p>
                                </LeiaMais>
                                
            </div> 
            
            <div className="img" > 
                <p> ____________________________</p>
                <img alt="#teufuturodelas"  className="img1" src={Rheader}/> 
                <p> ____________________________</p>
            </div>
            
            <section class="texto">
                    
                        <div className="sobre">
                            
                                <h2>Sobre o programa #TeuFuturoDelas</h2>
                                
                                <p> Não é de hoje que observamos a predominância do homem no estudo e atuação da tecnologia e mais especificamente na programação.</p>
                                <p> O motivo PRINCIPAL para isso é devido ao estereótipo que está em meio a nossa sociedade há muitos anos que tenta incessantemente fazer com que as pessoas se encaixem em profissões pelas quais elas pensam ser "de acordo com determinado gênero"</p>

                                <p>Parece tão ultrapassado né gente?! Mas infelizmente é atual ainda esse "papinho".</p>

                                <p id="center">Abaixo mostraremos um vídeo relacionado ao assunto.</p>

                                <div className="video">
                                    <iframe id="video1" width="560" height="315" src="https://www.youtube.com/embed/C3hAYLgLnlU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                                <h2>COM ISSO, viemos aqui falar sobre o projeto #TeuFuturo Delas</h2>

                                <p> O #TeuFuturo Delas é uma iniciativa do Teufuturo que busca promover a participação feminina na tecnologia através de conteúdo, mentoria, rede de apoio e bolsas de estudos para formação inicial e para graduação no curso de Ciência da Computação.</p>
                                <p> Temos como intuíto cativar as mulheres e fazer elas não só conhecerem esse universo, mas sim PERMANECEREM nesse espaço.</p>
                                <p> Se você assim como nós também quer que isso seja uma realidade, sinta-se a vontade de apoiar o projeto como puder, seja doando algum valor ou divulgando.</p>
                                <p> Os recursos arrecadados serão destinados ao financiamento das bolsas de estudos.</p>
                                
                        </div>  
                    
            </section> 
        </main>
        );
    }
}