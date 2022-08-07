import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import App from './App';
import { MostrarFrutasProvider } from './contexts/MostrarFrutas';
import { LimparBuscaProvider } from './contexts/LimparBusca';
import { CarrinhoComprasProvider } from './contexts/CarrinhoCompras';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <LimparBuscaProvider>
    <MostrarFrutasProvider>
      <CarrinhoComprasProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </CarrinhoComprasProvider>
    </MostrarFrutasProvider>
  </LimparBuscaProvider>


);
