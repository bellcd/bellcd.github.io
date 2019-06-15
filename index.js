let list = document.getElementsByClassName('container');
let navLi = document.getElementById('nav-li');
let menu = list[0];

menu.addEventListener('click', function() {
  if (navLi.style.display === 'block') {
    navLi.style.display = 'none';
    menu.classList.toggle('change');
  } else {
    navLi.style.display = 'block';
    menu.classList.toggle('change');
  }
});

let navLinks = document.getElementsByClassName('nav-links');
for (let link of navLinks) {
  link.addEventListener('click', function() {
    let width = Window.innerWidth;
    if (width <= 600) {
      menu.classList.remove('change');
      navLi.style.display = 'none';
    }
  })
}
