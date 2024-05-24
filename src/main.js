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
// axios
import axios from 'axios';

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

const formEl = document.querySelector('.form-input');
const ulEl = document.querySelector('.js-gallery');
const target = document.querySelector('.js-backdrop');
const loadBtn = document.querySelector('.js-load');
// const scrollEl = document.querySelector('.js-box');
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
let page = 1;
let query = null;
const limit = 15;

formEl.addEventListener('submit', async e => {
  e.preventDefault();
  ulEl.innerHTML = '';
  page = 1;

  spinner.spin(target);
  target.classList.remove('is-hidden');
  query = e.currentTarget.elements.query.value.trim();

  try {
    const response = await getPhotos(query, page);

    iziToast.show({
      title: `${response.data.total}`,
      message: 'Pictures',
    });
    if (response.data.totalHits === 0) {
      loadBtn.classList.add('is-hidden');
      iziToast.error({
        //   iconUrl: exit,
        title: 'ERROR',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    }
    ulEl.innerHTML = createMarkup(response.data.hits);
    response.data.totalHits < limit
      ? loadBtn.classList.add('is-hidden')
      : loadBtn.classList.remove('is-hidden');

    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'ERROR',
    });
  } finally {
    spinner.stop();
    target.classList.add('is-hidden');
    e.target.reset();
  }
});
loadBtn.addEventListener('click', async e => {
  page += 1;
  spinner.spin(target);
  target.classList.remove('is-hidden');

  try {
    const response = await getPhotos(query, page);
    ulEl.insertAdjacentHTML('beforeend', createMarkup(response.data.hits));
    const lastPage = Math.ceil(response.data.totalHits / limit);
    if (lastPage === page) {
      loadBtn.classList.add('is-hidden');
      iziToast.show({
        message: 'Last page',
      });
    }
    lightbox.refresh();
  } catch (error) {
    iziToast.error({
      title: 'ERROR',
    });
  } finally {
    spinner.stop();
    scroolBy();
    target.classList.add('is-hidden');
  }
});

// !============
function scroolBy() {
  const liEl = ulEl.firstElementChild;
  const height = liEl.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}
