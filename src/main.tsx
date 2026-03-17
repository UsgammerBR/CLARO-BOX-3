
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log("Main.tsx: Starting initialization...");
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Main.tsx: Root element not found!");
    throw new Error("Could not find root element to mount to");
  }

  console.log("Main.tsx: Creating root...");
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log("Main.tsx: Render called.");
} catch (error) {
  console.error("Main.tsx: Initialization error:", error);
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = `<div style="padding: 20px; color: red; font-family: sans-serif; background: white; height: 100vh;">
      <h2 style="margin: 0 0 10px 0;">Erro de Inicialização</h2>
      <p style="margin: 0 0 20px 0;">${error instanceof Error ? error.message : 'Erro desconhecido'}</p>
      <pre style="background: #fee; padding: 10px; border-radius: 4px; overflow: auto; max-height: 200px;">${error instanceof Error ? error.stack : ''}</pre>
      <button onclick="location.reload()" style="padding: 12px 24px; background: #0f172a; color: white; border: none; border-radius: 12px; cursor: pointer; font-weight: bold; margin-top: 20px;">Recarregar Aplicativo</button>
    </div>`;
  }
}
