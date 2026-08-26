const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

// 1. Verifica se já existe um tema salvo ou usa a preferência do sistema
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
setTheme(initialTheme);

// 2. Função para alternar o tema e atualizar a interface
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Modo Claro';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Modo Escuro';
  }
}

// 3. Evento de clique no botão
toggleButton.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});
