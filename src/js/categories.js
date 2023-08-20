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

        createMarkupOfCard(data.results);
        tuiPagination(category, totalItems, limit);
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

      createMarkupOfCard(data.results);
      tuiPagination(category, totalItems, limit);
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

export function createMarkupOfCard(arr) {
  const markup = arr
    .map(({ preview, title, description, rating }) => {
      return `<li>
            <div class="icon-heart">
            <a>
              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
              <path class="svg" fill="none" opacity="0.8" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
              </svg>
              </a>
            </div>
            <img
              src="${preview}"
              alt=""
              width="335px"
              height="335px"
            />
            <div class="description-rating-container">
              <p>${title}</p>
              <span>${description}</span
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
