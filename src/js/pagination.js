// import Pagination from 'tui-pagination';
// import { pageCards } from './api/gallery-api';
// import { createMarkup } from './categories';

// const listOfCards = document.querySelector('.test');

// export const tuiPagination = (page, totalPages, limit) => {
//   const pagination = new Pagination(document.getElementById('pagination'), {
//     totalItems: totalPages,
//     itemsPerPage: limit,
//     visiblePages: 3,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     template: {
//       page: '<button href="#" class="tui-page-btn" name="{{page}}">{{page}}</button>',
//       currentPage:
//         '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<button href="#" class="tui-page-btn tui-{{type}}">' +
//         '<button class="tui-ico-{{type}}">{{type}}</button>' +
//         '</button>',
//       disabledMoveButton:
//         '<button class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<button class="tui-ico-{{type}}">{{type}}</button>' +
//         '</button>',
//       moreButton:
//         '<button href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//         '<button class="tui-ico-ellip">...</button>' +
//         '</button>',
//     },
//   });

//   pagination.on('afterMove', event => {
//     const newPage = event.page;
//     listOfCards.innerHTML = '';

//     pageCards(newPage, limit)
//       .then(data => {
//         createMarkup(data.results);
//       })
//       .catch(error => {
//         console.error(error.message);
//       });
//   });
// };
