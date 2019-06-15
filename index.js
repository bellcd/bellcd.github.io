let btn = document.getElementById('menu-btn');
let navSections = document.getElementById('nav-sections');
btn.addEventListener('click', function() {
  if (navSections.style.display === 'block') {
    navSections.style.display = 'none';
  } else {
    navSections.style.display = 'block';
  }
});
