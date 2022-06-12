import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./App";
import './index.css';

function Componente(props) {
  const { titulo, contenido } = props;
  return (
    <div className="Container">
      <h1>{titulo}</h1>
      {contenido}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
