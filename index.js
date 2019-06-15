let btn = document.getElementById('menu-btn');
let navLi = document.getElementById('nav-li');
btn.addEventListener('click', function() {
  if (navLi.style.display === 'block') {
    navLi.style.display = 'none';
  } else {
    navLi.style.display = 'block';
  }
});
