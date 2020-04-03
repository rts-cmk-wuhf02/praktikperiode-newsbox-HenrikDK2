const toggle = document.getElementById('themeToggle');
let dark = false;

if (toggle) {
  toggle.addEventListener('click', changeTheme);
}

if (JSON.parse(localStorage.getItem('dark')) !== null) {
  dark = JSON.parse(localStorage.getItem('dark'));;
} if (dark === true) { changeTheme() }

function changeTheme(e) {
  if (e && e.currentTarget === toggle) {
    if (dark === false) {
      document.documentElement.setAttribute('data-theme', 'dark')
      dark = true;
    } else if (dark === true) {
      document.documentElement.setAttribute('data-theme', 'light')
      dark = false;
    }
  } else {
    document.documentElement.setAttribute('data-theme', 'dark')
  }

  localStorage.setItem('dark', dark);
}