/* Estilos Padrão (Modo Claro) */
:root {
  --bg-color: #ffffff;
  --text-color: #1a1a1a;
  --card-bg: #f4f4f9;
  --accent-color: #0066cc;
}

/* Estilos para o Modo Escuro */
[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #e0e0e0;
  --card-bg: #1e1e1e;
  --accent-color: #4da6ff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
  margin: 0;
  padding: 20px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 10px;
}

button {
  background-color: var(--accent-color);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
}
