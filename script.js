/**
 * Gerenciador de Tema (Dark/Light Mode)
 */
class ThemeManager {
  constructor() {
    this.themeToggleBtn = document.getElementById('theme-toggle');
    this.htmlElement = document.documentElement;
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    this.init();
  }

  init() {
    // 1. Resgata o tema correto para iniciar
    const initialTheme = this.getPreferredTheme();
    this.applyTheme(initialTheme);

    // 2. Event Listener no botão de troca
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => {
        const currentTheme = this.htmlElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.applyTheme(nextTheme);
        this.savePreference(nextTheme);
      });
    }

    // 3. Listener para responder a mudanças no SO em tempo real
    this.mediaQuery.addEventListener('change', (e) => {
      // Aplica apenas se o usuário NÃO salvou uma preferência manual
      if (!this.getSavedPreference()) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  getSavedPreference() {
    try {
      return localStorage.getItem('theme-preference');
    } catch (e) {
      // Trata restrições do modo anônimo no navegador
      console.warn('Acesso ao localStorage bloqueado pelo navegador.');
      return null;
    }
  }

  savePreference(theme) {
    try {
      localStorage.setItem('theme-preference', theme);
    } catch (e) {
      console.warn('Não foi possível salvar a preferência no localStorage.');
    }
  }

  getPreferredTheme() {
    const saved = this.getSavedPreference();
    if (saved) return saved;
    return this.mediaQuery.matches ? 'dark' : 'light';
  }

  applyTheme(theme) {
    // Define o atributo global
    this.htmlElement.setAttribute('data-theme', theme);

    // Atualiza a acessibilidade (Aria-Label)
    if (this.themeToggleBtn) {
      const nextThemeText = theme === 'dark' ? 'modo claro' : 'modo escuro';
      this.themeToggleBtn.setAttribute('aria-label', `Alternar para ${nextThemeText}`);
    }
  }
}

// Inicializa o script quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
