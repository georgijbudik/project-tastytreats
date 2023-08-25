import { pageCards } from './api/gallery-api';
import { callAllOftenedFunctions } from './callFunctions';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix';

export function createError() {
  const gallery = document.querySelector('.gallery-container');
  const errorImg = document.createElement('img');
  errorImg.src = 'https://beonspeak.com/wp-content/uploads/2016/07/error.jpg';
  gallery.innerHTML = '';
  Notify.failure('No information');
  gallery.append(errorImg);
}

const windowWidth = window.innerWidth;

export let clickModal = '';
render();

export function render() {
  let page = 1;
  let limit = 6;
  if (windowWidth < 768) {
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
    return;
  } else if (windowWidth < 1280) {
    limit = 8;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
    return;
  } else {
    limit = 9;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
      });
  }
}
