// import { fetchCategories } from './api/categories-api';
// import { categorsCards } from './api/gallery-api';
// import { pageCards } from './api/gallery-api';
// import Notiflix from 'notiflix';
// import { tuiPagination } from './pagination';

// const listOfCategories = document.querySelector('.js-categories');
// const btnAllCategories = document.querySelector('.js-btn-all-categories');
// const listOfCards = document.querySelector('.test');

// let page = 1;
// const limit = 9;
// let selectedCategoryId = null;
// let category = '';

// btnAllCategories.addEventListener('click', handleResetCategory);
// listOfCategories.addEventListener('click', handleSelectCategory);

// function handleSelectCategory(evt) {
//   listOfCards.innerHTML = '';

//   if (evt.target.tagName === 'BUTTON') {
//     selectedCategoryId = evt.target.dataset.id;
//     category = evt.target.name;

//     categorsCards(category, page, limit)
//       .then(data => {
//         const totalItems = data.results.length * data.totalPages;

//         createMarkup(data.results);
//         tuiPagination(data.page, totalItems, limit);
//       })
//       .catch(error => console.log(error.message));
//   }
// }

// function handleResetCategory(evt) {
//   listOfCards.innerHTML = '';
//   selectedCategoryId = null;

//   pageCards(page, limit)
//     .then(data => {
//       const totalItems = data.results.length * data.totalPages;

//       createMarkup(data.results);
//       tuiPagination(data.page, totalItems, limit);
//     })
//     .catch();
// }

// const createMarkupOfCategories = arr => {
//   return arr
//     .map(
//       ({ _id, name }) => `
//   <li><button data-id="${_id}" name="${name}">${name}</button></li>`
//     )
//     .join('');
// };

// const fetchAllCategories = () => {
//   fetchCategories()
//     .then(response => {
//       const { data } = response;

//       listOfCategories.insertAdjacentHTML(
//         'beforeend',
//         createMarkupOfCategories(data)
//       );
//     })
//     .catch(error => {
//       Notiflix.Notify.failure(
//         `Categories is not defined. ${error.message}. Try again`
//       );
//       console.log(error.message);
//     });
// };

// fetchAllCategories();

// export function createMarkup(arr) {
//   const markup = arr
//     .map(({ preview, title, description, rating }) => {
//       return `<div>
//         <img width ="200px" src="${preview}"/>
//             <h2>${title}</h2>
//             <div >
//             <p>${description}</p>
//             <p>${rating}</p>
//             </div>
//             <a href="">See recipe</a>
//         </div>`;
//     })
//     .join('');

//   listOfCards.insertAdjacentHTML('beforeend', markup);
// }
