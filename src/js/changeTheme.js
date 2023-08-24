document.addEventListener('DOMContentLoaded', function () {
  desktopSwitcher.addEventListener('change', changeToDarkTheme);

  function changeToDarkTheme() {
    if (desktopSwitcher.checked) {
      enableDarkTheme();
    } else {
      disableDarkTheme();
      //   desktopSwitcher.classList.add('dark-theme');
    }
  }

  mobileSwitcher.addEventListener('change', mobileToDarkTheme);

  function mobileToDarkTheme() {
    if (mobileSwitcher.checked) {
      enableDarkTheme();
    } else {
      disableDarkTheme();
    }
  }
  function themeReload() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      desktopSwitcher.checked = true;
      mobileSwitcher.checked = true;
      bodyBackgroundColor.classList.add('dark-theme');
    } else {
      desktopSwitcher.checked = false;
      mobileSwitcher.checked = false;
      bodyBackgroundColor.classList.remove('dark-theme');
    }
  }

  themeReload();

  window.addEventListener('pageshow', function (event) {
    themeReload();
  });
});

const bodyBackgroundColor = document.body;
const desktopSwitcher = document.querySelector('.header-switch input');
const mobileSwitcher = document.querySelector('.switch input');

function enableDarkTheme() {
  bodyBackgroundColor.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark');
}

function disableDarkTheme() {
  bodyBackgroundColor.classList.remove('dark-theme');
  localStorage.setItem('theme', 'light');
}
