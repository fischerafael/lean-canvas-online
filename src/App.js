import React from 'react';
import './App.css';

import Field from './Components/Fields/Field'

function App() {
  return (    
     <div className="lean-container">
       <div className="lean-header">
        <h1>Lean Canvas Online</h1>
        <p>Crie e valide a sua startup</p>
       </div>
       <div className="lean-body">
        <div className="lean-body-top">
          <div className="problema">
            <Field 
              name="Problema"
            />
          </div>
          <div className="solucao">
            <Field 
              name="Solução"
            />
          </div>
          <div className="proposta">
            <Field 
              name="Proposta de Valor"
            />
          </div>
          <div className="vantagem">
            <Field 
              name="Vantagem Competitiva"
            />
          </div>
          <div className="segmento">
            <Field 
              name="Segmento de Clientes"
            />
          </div>
          <div className="metricas">
            <Field 
              name="Métricas"
            />
          </div>
          <div className="canais">
            <Field 
              name="Canais"
            />
          </div>
        </div>
        <div className="lean-body-bottom">
          <div className="custos">
            <Field 
              name="Estrutura de Custos"
            />
          </div>
          <div className="receitas">
            <Field 
              name="Receitas"
            />
          </div>
        </div>        
       </div>
       <div className="lean-footer">
        <p>Desenvolvido por <a>Design Fischer</a></p>
       </div>
     </div>    
  );
}

export default App;
