document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.theme-toggle');
  const body = document.body;
  const themeKey = 'primeSnackTheme';

  const applyTheme = (theme) => {
    if (theme === 'light') {
      body.classList.add('light');
      if (toggleButton) toggleButton.textContent = 'Dark mode';
    } else {
      body.classList.remove('light');
      if (toggleButton) toggleButton.textContent = 'Light mode';
    }
    localStorage.setItem(themeKey, theme);
  };

  const storedTheme = localStorage.getItem(themeKey);
  applyTheme(storedTheme === 'light' ? 'light' : 'dark');

  toggleButton?.addEventListener('click', () => {
    applyTheme(body.classList.contains('light') ? 'dark' : 'light');
  });
});
