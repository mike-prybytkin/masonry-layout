import './style/index.scss';

const fetchData = async function () {
  const baseUrl = 'https://rickandmortyapi.com/api/character/';
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    renderMasonryCards(data.results);
  } catch (error) {
    console.error(error);
    return null;
  }
};

fetchData();

const cardsWrappers = document.querySelectorAll('.masonry-slider__card');
const halfImages = document.querySelectorAll('[data-half-image="true"]');

const renderMasonryCards = (data) => {
  for (let i = 0; i < cardsWrappers.length; i += 1) {
    if (cardsWrappers[i].getAttribute('data-half-image')) {
      cardsWrappers[i].style.backgroundImage = `url(${data[cardsWrappers.length].image})`;
    } else {
      cardsWrappers[i].style.backgroundImage = `url(${data[i].image})`;
    }
  }
};

const createTemplate = (cadrData) => {
  console.log(cadrData.image
    );
  return `<img src="" alt="${cadrData.name}">`;
}
