import { pageCards } from './api/gallery-api';
import { tuiPagination } from '../js/pagination';
import { renderModal, openModal } from './pop-up';

const listOfCards = document.querySelector('.list-of-cards');

const windowWidth = window.innerWidth;
// console.log(windowWidth);

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
        const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
        jsSeeRecipeBtnRef.forEach(btn => {
          btn.addEventListener('click', e => {
            clickModal = e.target.dataset.id;
            openModal(clickModal);
          });
        });
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
        const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
        jsSeeRecipeBtnRef.forEach(btn => {
          btn.addEventListener('click', e => {
            clickModal = e.target.dataset.id;
            openModal(clickModal);
          });
        });
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
        console.log(data);
        tuiPagination('', totalItems, limit, 3);
        const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
        jsSeeRecipeBtnRef.forEach(btn => {
          btn.addEventListener('click', e => {
            clickModal = e.target.dataset.id;
            openModal(clickModal);
          });
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

// pageCards(page, limit)
//   .then(data => {
//     page = 1;
//     const totalItems = data.results.length * data.totalPages;
//     createMarkup(data.results);
//     if(windowWidth >768){
//       tuiPagination("",totalItems, limit,3);
//     }else if(windowWidth < 768){
//       tuiPagination("",totalItems, limit,2);
//     }
//   })
//   .catch();

export function createMarkup(arr) {
  const markup = arr
    .map(({ preview, title, description, rating, _id }) => {
      return `<li >
              <div class="icon-heart">
              <button class="heart-svg-button">
              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
              <path class="svg" fill="none" opacity="0.9" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
              </svg>
              </button>
              
              </div>
              <img
                src="${preview}"
                alt=""
                width="335px"
                height="335px"
              />
              <div class="description-rating-container">
                <h3 class="title-cards">${title}</h3>
                <p>${description}</p>
                <div class="rating">
                <div><p class="number">${rating}</p>
                <ul class="list-cards">
                <li  height="16px">
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
                <li  height="16px">
                  <svg height="14px" viewBox="0 0 32 32" fill="#EEA10C">
                    <path
                      d="M13.826 3.262c0.684-2.106 3.663-2.106 4.348 0l1.932 5.945c0.306 0.942 1.184 1.579 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674c-0.801 0.582-1.136 1.614-0.83 2.556l1.931 5.945c0.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674c-0.801-0.582-1.886-0.582-2.687 0l-5.057 3.674c-1.791 1.302-4.202-0.45-3.517-2.555l1.932-5.945c0.306-0.942-0.029-1.973-0.83-2.556l-5.057-3.674c-1.791-1.302-0.871-4.135 1.344-4.135h6.251c0.99 0 1.868-0.638 2.174-1.579l1.932-5.945z"
                    ></path>
                  </svg>
                </li>
              </ul>
                </div>
                  <div>
                    <button class="see-recipe-button js-see-recipe" type="button" data-id="${_id}" data-action="open">
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
