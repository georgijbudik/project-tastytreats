import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { pageCards } from './api/gallery-api';
import { createMarkup } from './categories';
const paginationElement = document.getElementById('pagination');

const listOfCards = document.querySelector('.list-of-cards');

export const tuiPagination = (page, totalPages, limit) => {
  const pagination = new Pagination(document.getElementById('pagination'), {
    totalItems: totalPages,
    itemsPerPage: limit,
    page: page,
    visiblePages: 3,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<button href="#" class="tui-page-btn {{classes}}" name="{{page}}">{{page}}</button>',
      currentPage:
        '<button class="tui-page-btn tui-is-selected {{classes}}">{{page}}</button>',
      moveButton:
        '<button href="#" class="tui-page-btn tui-{{type}} {{classes}}">{{customValue}}</button>',
      disabledMoveButton:
        '<button class="tui-page-btn tui-is-disabled tui-{{type}} {{classes}}">{{customValue}}</button>',
      moreButton:
        '<button href="#" class="tui-page-btn tui-{{type}}-is-ellip {{classes}}"><span class="tui-ico-ellip">...</span></button>',
    },
  });

  paginationElement.querySelector('.tui-prev').innerText = '<';
  paginationElement.querySelector('.tui-next').innerText = '>';
  paginationElement.querySelector('.tui-first').innerText = '<<';
  paginationElement.querySelector('.tui-last').innerText = '>>';

  pagination.on('afterMove', event => {
    const newPage = event.page;
    listOfCards.innerHTML = '';

    pageCards(newPage, limit)
      .then(data => {
        createMarkup(data.results);
      })
      .catch(error => {
        console.error(error.message);
      });
  });

  //   pagination.reset();
};
