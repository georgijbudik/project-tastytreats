import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { pageCards } from './api/gallery-api';
import { createMarkupOfCard } from './categories';
import { categorsCards } from './api/gallery-api';
import { createMarkup } from './createMarkupCards';
import { openModal } from './pop-up';

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
        .then(data => {
          createMarkup(data.results);
        })
        .catch(error => console.log(error.message));
    } else {
      pageCards(newPage, limit)
        .then(data => {
          createMarkup(data.results);
          clickBtnModal();
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  });
};

function clickBtnModal() {
  const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
  jsSeeRecipeBtnRef.forEach(btn => {
    btn.addEventListener('click', e => {
      clickModal = e.target.dataset.id;
      openModal(clickModal);
    });
  });
}
