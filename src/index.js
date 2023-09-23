import './style/index.scss';

const cardsWrappers = document.querySelectorAll('.masonry-slider__card');

(async function () {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/');
    const data = await response.json();
    addBackgroundToCard(data.results);
  } catch (error) {
    console.error(error);
    return null;
  }
})();

const addBackgroundToCard = (data) => {
  for (let i = 0; i < cardsWrappers.length; i += 1) {
    if (cardsWrappers[i].getAttribute('data-half-image')) {
      cardsWrappers[i].style.backgroundImage = `url(${data[cardsWrappers.length].image})`;
    } else {
      cardsWrappers[i].style.backgroundImage = `url(${data[i].image})`;
    }
  }
};
