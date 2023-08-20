import { fetchCategories } from './api/categories-api';
import { categorsCards } from './api/gallery-api';
import { pageCards } from './api/gallery-api';
import Notiflix from 'notiflix';
import { tuiPagination } from './pagination';

const listOfCategories = document.querySelector('.js-categories');
const btnAllCategories = document.querySelector('.js-btn-all-categories');
const listOfCards = document.querySelector('.list-of-cards');

let page = 1;
const limit = 9;
let selectedCategoryId = null;
let category = '';

btnAllCategories.addEventListener('click', handleResetCategory);
listOfCategories.addEventListener('click', handleSelectCategory);

function handleSelectCategory(evt) {
  listOfCards.innerHTML = '';
  page = 1;

  if (evt.target.tagName === 'LI') {
    selectedCategoryId = evt.target.dataset.id;
    category = evt.target.dataset.name;

    categorsCards(category, page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;

        createMarkup(data.results);
        tuiPagination(page, totalItems, limit);
      })
      .catch(error => console.log(error.message));
  }
}

function handleResetCategory() {
  listOfCards.innerHTML = '';
  selectedCategoryId = null;

  pageCards(page, limit)
    .then(data => {
      const totalItems = data.results.length * data.totalPages;

      createMarkup(data.results);
      tuiPagination(data.page, totalItems, limit);
    })
    .catch();
}

const createMarkupOfCategories = arr => {
  return arr
    .map(
      ({ _id, name }) => `
  <li data-id="${_id}" data-name="${name}">${name}</></li>`
    )
    .join('');
};

const fetchAllCategories = () => {
  fetchCategories()
    .then(response => {
      const { data } = response;

      listOfCategories.insertAdjacentHTML(
        'beforeend',
        createMarkupOfCategories(data)
      );
    })
    .catch(error => {
      console.log(error.message);
    });
};

fetchAllCategories();

export function createMarkup(arr) {
  const markup = arr
    .map(({ preview, title, description, rating }) => {
      return `<li>
            <div class="icon-heart">
              <svg height="16px" id="icon-heart" viewBox="0 0 36 32">
                <path
                  d="M17.767 4.814c-3.258-3.809-8.691-4.834-12.774-1.346s-4.657 9.32-1.451 13.445c2.665 3.43 10.732 10.664 13.376 13.005 0.296 0.262 0.444 0.393 0.616 0.444 0.151 0.045 0.315 0.045 0.466 0 0.173-0.052 0.321-0.183 0.616-0.444 2.644-2.341 10.71-9.575 13.376-13.005 3.206-4.125 2.701-9.994-1.451-13.445s-9.516-2.463-12.774 1.346z"
                ></path>
              </svg>
            </div>
            <img
              src="${preview}"
              alt=""
              width="250px"
              height="287px"
            />
            <div class="description-rating-container">
              <p>${title}</p>
              <span>${description}a</span
              >
              <div class="rating">
                <p class="number">${rating}</p>
                <div>
                  <ul>
                    <li height="16px">
                      <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                        <path
                          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                        ></path>
                      </svg>
                    </li>
                    <li height="16px">
                      <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                        <path
                          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                        ></path>
                      </svg>
                    </li>
                    <li height="16px">
                      <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                        <path
                          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                        ></path>
                      </svg>
                    </li>
                    <li height="16px">
                      <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                        <path
                          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                        ></path>
                      </svg>
                    </li>
                    <li height="16px">
                      <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                        <path
                          d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                  <button class="see-recipe-button" type="button">
                    See recipe
                  </button>
                </div>
              </div>
            </div>
          </li>`;
    })
    .join('');

  listOfCards.insertAdjacentHTML('beforeend', markup);
}
