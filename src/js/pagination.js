import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { pageCards, categorsCards } from './api/gallery-api';
import { renderGalleryCard } from './createMarkupCards';
import { callAllFunctionsInPagination } from './callFunctions';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const paginationElement = document.getElementById('pagination');
const listOfCards = document.querySelector('.list-of-cards');
let clickModal = '';

export const tuiPagination = (category, totalPages, limit, visiblePages) => {
  const pagination = new Pagination(paginationElement, {
    totalItems: totalPages,
    itemsPerPage: limit,
    visiblePages: visiblePages,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<button href="#" class="tui-page-btn {{classes}}" name="{{page}}">{{page}}</button>',
      currentPage:
        '<button class="tui-page-btn s tui-is-selected {{classes}}">{{page}}</button>',
      moveButton:
        '<button href="#" class="tui-page-btn tui-{{type}} {{classes}}">{{customValue}}</button>',
      disabledMoveButton:
        '<button class="tui-page-btn tui-is-disabled tui-{{type}} {{classes}}">{{customValue}}</button>',
      moreButton:
        '<button href="#" class="tui-page-btn tui-{{type}}-is-ellip {{classes}}"><span class="tui-ico-ellip">...</span></button>',
    },
  });

  paginationElement.querySelector('.tui-first').innerText = '<<';
  paginationElement.querySelector('.tui-prev').innerText = '<';
  paginationElement.querySelector('.tui-last').innerText = '>>';
  paginationElement.querySelector('.tui-next').innerText = '>';

  pagination.on('afterMove', event => {
    const newPage = event.page;

    paginationElement.querySelector('.tui-first').innerText = '<<';
    paginationElement.querySelector('.tui-prev').innerText = '<';
    paginationElement.querySelector('.tui-last').innerText = '>>';
    paginationElement.querySelector('.tui-next').innerText = '>';
    listOfCards.innerHTML = '';

    if (category) {
      categorsCards(category, newPage, limit)
        .then(({ results }) => {
          Loading.standard('Loading...');
          callAllFunctionsInPagination(results);
          Loading.remove();
        })
        .catch(error => console.log(error.message));
    } else {
      pageCards(newPage, limit)
        .then(({ results }) => {
          Loading.standard('Loading...');
          callAllFunctionsInPagination(results);
          Loading.remove();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  });
};
