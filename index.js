const cardApps = document.querySelectorAll('.card-apps');
let showcased = document.querySelector('.showcased');
const SHOWCASED = 'showcased';
const wrapper = document.querySelector('.wrapper');

cardApps.forEach(card => {
  card.addEventListener('click', (event) => {
    const classes = event.currentTarget.classList;
    if (Array.from(classes).includes(SHOWCASED)) {
      classes.remove(SHOWCASED);
      wrapper.classList.remove('visible');
      return;
    }

    removeShowcaseFromEverything();
    addShowcase(classes);
  })
});

const removeShowcaseFromEverything = () => {
  cardApps.forEach(card => {
    card.classList.remove(SHOWCASED);
  });
  wrapper.classList.remove('visible');
};

const addShowcase = (classes) => {
  classes.add(SHOWCASED);
  wrapper.classList.add('visible');
}

window.addEventListener('keyup', (event) => {
  if (event.code === 'Escape') removeShowcaseFromEverything();
});
wrapper.addEventListener('click', removeShowcaseFromEverything);