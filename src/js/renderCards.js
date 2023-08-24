import { pageCards } from './api/gallery-api';
import { callAllOftenedFunctions } from './callFunctions';

const windowWidth = window.innerWidth;

export let clickModal = '';
render();

export function render() {
  let page = 1;
  let limit = 6;
  if (windowWidth < 768) {
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    return;
  } else if (windowWidth < 1280) {
    limit = 8;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    return;
  } else {
    limit = 9;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}
