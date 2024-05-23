// SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Spinner
import { Spinner } from 'spin.js';
// iziTost
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Pixaday
import { getPhotos } from './js/pixaday-api.js';
import { createMarkup } from './js/render-fuctions.js';
// icon
// import exit from './img/error.svg';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

const formEl = document.querySelector('.form-input');
const ulEl = document.querySelector('.js-gallery');
const target = document.querySelector('.js-backdrop');
const opts = {
  lines: 11, // The number of lines to draw
  length: 0, // The length of each line
  width: 52, // The line thickness
  radius: 34, // The radius of the inner circle
  scale: 0.85, // Scales overall size of the spinner
  corners: 0.8, // Corner roundness (0..1)
  speed: 1.1, // Rounds per second
  rotate: 28, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#a928a5', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);

formEl.addEventListener('submit', e => {
  e.preventDefault();
  ulEl.innerHTML = '';

  spinner.spin(target);
  target.classList.remove('is-hidden');
  const query = e.currentTarget.elements.query.value.trim();
  getPhotos(query)
    .then(res => {
      if (res.hits.length === 0) {
        iziToast.error({
          //   iconUrl: exit,
          title: 'ERROR',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      ulEl.innerHTML = createMarkup(res.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'ERROR',
        message: res.status,
      });
    })
    .finally(() => {
      spinner.stop();
      target.classList.add('is-hidden');
      e.target.reset();
    });
});

// comments: 14;
// downloads: 12055;

// largeImageURL: 'https://pixabay.com/get/g18176df01580116c952c79668f7c512c93e9658df1ea2e1cc83088e45212c8f365a2a83854d2a4da0737f6a92ca9d13ff1d9cf1ffb038b382dd3176c058a48af_1280.jpg';
// likes: 89;
//img.webformatURL
// tags: 'labrador, dog, animal';

// views: 14789;
