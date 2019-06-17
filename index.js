let list = document.getElementsByClassName('container');
let navLi = document.getElementById('nav-li');
let menu = list[0];
let nav = document.getElementsByTagName('nav')[0];
let menuUl = document.getElementById('menu-ul');

menu.addEventListener('click', function() {
  // console.log('hello!');
  console.log(nav);
  if (navLi.style.display === 'block') {
    navLi.style.display = 'none';
    menuUl.classList.toggle('full-screen');
    menu.classList.toggle('change');
  } else {
    navLi.style.display = 'block';
    menuUl.classList.toggle('full-screen');
    menu.classList.toggle('change');
  }
});

let navLinks = document.getElementsByClassName('nav-links');
for (let link of navLinks) {
  link.addEventListener('click', function() {
    if (window.innerWidth <= 600) {
      menu.classList.remove('change');
      menuUl.classList.toggle('full-screen');
      navLi.style.display = 'none';
    }
  })
}

if (window.innerWidth >= 600) {
  let header = document.getElementById('header-ul');
  let sidebarHeader = header.cloneNode(true);
  let nav = document.getElementsByTagName('nav')[0];


  nav.insertBefore(sidebarHeader, menuUl);
  document.getElementById('details').style.display = 'none';
}
