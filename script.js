document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('.theme-icon');
  const htmlElement = document.documentElement;

  // 1. Verifica se há preferência salva no localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // 2. Verifica a preferência do sistema operacional do usuário
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Define o tema inicial
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // 3. Alterna o tema ao clicar no botão
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  // Função para aplicar o tema e salvar a preferência
  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza o ícone
    if (theme === 'dark') {
      themeIcon.textContent = '☀️'; // Mostra o sol para mudar para claro
    } else {
      themeIcon.textContent = '🌙'; // Mostra a lua para mudar para escuro
    }
  }
});
