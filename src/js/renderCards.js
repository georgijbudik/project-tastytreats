import { pageCards } from './api/gallery-api';
import { tuiPagination } from '../js/pagination';
import { openModal } from './pop-up';
import { createMarkup, clickCardHeartIcon } from './createMarkupCards';
import { createRating } from './rating';

const listOfCards = document.querySelector('.list-of-cards');

const windowWidth = window.innerWidth;

export let clickModal = '';
render();

export function render() {
  let page = 1;
  let limit = 6;
  if (windowWidth < 768) {
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination('', totalItems, limit, 2);
        clickBtnModal();
        const ratings = document.querySelectorAll('.rating');
        createRating(ratings);
        clickCardHeartIcon();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    return;
  } else if (windowWidth < 1280) {
    limit = 8;
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination('', totalItems, limit, 3);
        clickBtnModal();
        const ratings = document.querySelectorAll('.rating');
        createRating(ratings);
        clickCardHeartIcon();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    return;
  } else {
    limit = 9;
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination('', totalItems, limit, 3);
        const ratings = document.querySelectorAll('.rating');
        createRating(ratings);
        clickBtnModal();
        clickCardHeartIcon();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

function clickBtnModal() {
  const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
  jsSeeRecipeBtnRef.forEach(btn => {
    btn.addEventListener('click', e => {
      e.currentTarget.blur();
      clickModal = e.target.dataset.id;
      openModal(clickModal);
    });
  });
}
