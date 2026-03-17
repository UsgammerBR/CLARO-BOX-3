
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Could not find root element to mount to");
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Initialization error:", error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding: 20px; color: red; font-family: sans-serif;">
      <h2>Erro de Inicialização</h2>
      <p>${error instanceof Error ? error.message : 'Erro desconhecido'}</p>
      <button onclick="location.reload()" style="padding: 10px 20px; background: #0f172a; color: white; border: none; border-radius: 8px; cursor: pointer;">Recarregar</button>
    </div>`;
  }
}
