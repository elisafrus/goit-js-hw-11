import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

//-------------------------------------------------------------------------------------------------

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loader = document.querySelector('.loader');
const backdrop = document.querySelector('.backdrop');

//-------------------------------------------------------------------------------------------------

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = ''; // Очищуєм галерею перед додаванням нових зображ.

  const query = searchInput.value.trim();
  if (query === '') {
    return;
  }

  loader.classList.remove('hidden');
  backdrop.classList.remove('hidden');

  searchImages(query)
    .then(images => {
      if (images.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 5000,
        });
      } else {
        renderImages(images.hits);
      }

      loader.classList.add('hidden');
      backdrop.classList.add('hidden');
    })
    .catch(error => {
      console.log(error);
    });
  searchForm.reset();
}

// // testing
// searchImages('pug')
//   .then(images => {
//     const markup = renderImages(images.hits);
//     console.log(markup);
//   })
//   .catch(error => console.log(error));
