import React, {useState, useEffect} from "react";
import Cabecalho from "./components/cabecalho/header"
import Oficial from "./components/cabecalho2/oficial"
import Main from "./components/Main/main"
import Foot from "./components/Foot/Foot";
import Yaman from "./components/Patrocinadores/patrocinadores"
import Formulario from "./components/Form/form";
import Intro from "./components/Intro/intro";



function App() {   

  return (
      
        <div className= "corpo">
          <section>
            <Intro/>
          </section>
          <section>
            <Cabecalho/>     
          </section>
      
          <section>
            <Oficial/>
          </section>
    
          <section>
            <Main/>
          </section>
    
          <section>
            <Formulario/>
          </section>
    
          <section>
            <Yaman/>
          </section>
      
          <section>
            <Foot/>
          </section>

        </div>
      );
    }

export default App;
