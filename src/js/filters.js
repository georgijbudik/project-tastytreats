import Notiflix from 'notiflix';
import { filterAreas } from './api/areas-api';
import { filterIngredients } from './api/ingredients-api';
import { filterIngredientCards } from './api/ingredients-api';
import debounce from 'lodash.debounce';
import { filterCards, filterFood } from './api/filters-api';
import { selectTime } from './api/filters-api';
import { selectArea } from './api/filters-api';
import { pageCards } from './api/gallery-api';
import { createMarkup } from '../js/createMarkupCards';
import { render } from './renderCards';
import { tuiPagination } from '../js/pagination';
import { openModal } from './pop-up';

const refs = {
  filterInputEl: document.querySelector('.js-filter-input'),
  selectTimeEl: document.querySelector('.js-select-time'),
  selectAreaEl: document.querySelector('.js-select-area'),
  selectFoodEl: document.querySelector('.js-select-food'),
  resetFilterBtnEl: document.querySelector('.filter-reset-btn'),
  galleryListEl: document.querySelector('.list-of-cards'),
  starsListEl: document.querySelector('.rating-stars-list'),
};

let prevSearchQuery = '';
const windowWidth = window.innerWidth;

const handleInput = e => {
  const value = e.target.value.trim();

  if (value === '') {
    Notiflix.Notify.warning('Please enter a search term.');
    clearGallery();
    render();
    return;
  }
  let page = 1;
  filterCards(value, page).then(response => {
    const data = response.results;
    if (data.length === 0) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      clearGallery();
      return;
    }
    page += 1;

    clearGallery();
    createMarkup(data);
    const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
    jsSeeRecipeBtnRef.forEach(btn => {
      btn.addEventListener('click', e => {
        clickModal = e.target.dataset.id;
        openModal(clickModal);
      });
    });
  });
};

const clearGallery = () => {
  refs.galleryListEl.innerHTML = '';
};

const handleSelectTime = () => {
  let page = 1;
  let limit = 6;
  const time = refs.selectTimeEl.value;
  clearGallery();

  if (windowWidth < 768) {
    selectTime(time, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else if (windowWidth < 1280) {
    limit = 8;
    selectTime(time, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else {
    limit = 9;
    selectTime(time, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  }
};

const handleSelectArea = () => {
  let page = 1;
  let limit = 6;
  const area = refs.selectAreaEl.value;
  clearGallery();

  if (windowWidth < 768) {
    selectArea(area, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else if (windowWidth < 1280) {
    limit = 8;
    selectArea(area, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else {
    limit = 9;
    selectArea(area, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  }
};
// const createRecipeCard = recipe => {
//   return `<li>
//                 <div class="icon-heart">
//                 <a>
//               <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
//               <path class="svg" fill="none" opacity="0.8" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
//               </svg>
//               </a>
//                 </div>
//                 <img
//                   src="${recipe.preview}"
//                   alt=""
//                   width="335px"
//                   height="335px"
//                 />
//                 <div class="description-rating-container">
//                   <h3>${recipe.title}</h3>
//                   <p>${recipe.description}a</p
//                   >
//                   <div class="rating">
//                   <div>
//                     <span class="number">${recipe.rating}</span>
//                       <ul class="rating-stars-list">
//                       </ul>
//                       </div>
//                       <button class="see-recipe-button" type="button">
//                         See recipe
//                       </button>
//                   </div>
//                 </div>
//               </li>`;
// };

// const renderCards = recipes => {
//   const markup = recipes.map(createRecipeCard).join('');
//   refs.galleryListEl.innerHTML = markup;
// };

const handleSelectIngredients = () => {
  let page = 1;
  let limit = 6;
  const ingredient = refs.selectFoodEl.value;
  clearGallery();

  if (windowWidth < 768) {
    filterFood(ingredient, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else if (windowWidth < 1280) {
    limit = 8;
    filterFood(ingredient, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  } else {
    limit = 9;
    filterFood(ingredient, limit, page)
      .then(data => {
        if (data.results.length === 0) {
          clearGallery();
          return render();
        }
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
  }

  // // filterFood(ingredient, limit, page)
  //   .then(data => {
  //     if (data.results.length === 0) {
  //       clearGallery();
  //       return render();
  //     }
  //
  //     clearGallery();
  //     createMarkup(data.results);
  //     const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
  //     jsSeeRecipeBtnRef.forEach(btn => {
  //       btn.addEventListener('click', e => {
  //         clickModal = e.target.dataset.id;
  //         openModal(clickModal);
  //       });
  //     });
  //   })
  //   .catch();
};
const debouncedOnChange = debounce(handleInput, 300);

refs.filterInputEl.addEventListener('input', debouncedOnChange);
refs.selectAreaEl.addEventListener('change', handleSelectArea);
refs.selectFoodEl.addEventListener('change', handleSelectIngredients);
refs.selectTimeEl.addEventListener('change', handleSelectTime);

filterAreas().then(response => {
  renderAreas(response);
});

const renderAreas = areas => {
  const optionsHTML = areas
    .map(
      area =>
        `<option value="${area.name}" class="select-option">${area.name}</option>`
    )
    .join('');
  refs.selectAreaEl.insertAdjacentHTML('beforeend', optionsHTML);
};

filterIngredients().then(response => renderIngredients(response));

const renderIngredients = ingredients => {
  const optionsHTML = ingredients
    .map(
      ingredient =>
        `<option value="${ingredient._id}" class="select-option">${ingredient.name}</option>`
    )
    .join('');
  refs.selectFoodEl.insertAdjacentHTML('beforeend', optionsHTML);
};

// selectTime().then(response => {
//   console.log(response);
//   renderTime(response);
// });

// const renderTime = time => {
//   const optionsHTML = time
//     .map(
//       option =>
//         `<option value="${option._id}" class="select-option">${option.time} min</option>`
//     )
//     .join('');
//   refs.selectTimeEl.insertAdjacentHTML('beforeend', optionsHTML);
// };

// refs.selectTimeEl.addEventListener('change', renderTime);

// const renderArea = areas => {
//   const optionsHTML = areas
//     .map(
//       area =>
//         `<option value="${option._id}" class="select-option">${option.time} min</option>`
//     )
//     .join('');
//   refs.selectTimeEl.insertAdjacentHTML('beforeend', optionsHTML);
// };

// refs.selectTimeEl.addEventListener('change', renderArea);

const handleResetFilters = () => {
  let page = 1;
  let limit = 6;

  refs.filterInputEl.value = '';
  refs.selectTimeEl.value = 'time';
  refs.selectFoodEl.value = 'product';
  refs.selectAreaEl.value = 'region';
  refs.galleryListEl.innerHTML = '';

  if (windowWidth > 768 && windowWidth < 1280) {
    limit = 8;
    creatPageCards(page, limit);
    tuiPagination('', totalItems, limit, 3);
  } else if (windowWidth < 768) {
    limit = 6;
    creatPageCards(page, limit);
    tuiPagination('', totalItems, limit, 2);
  } else {
    limit = 9;
    creatPageCards(page, limit);
    tuiPagination('', totalItems, limit, 3);
  }

  pageCards(page, limit)
    .then(data => {
      const totalItems = data.results.length * data.totalPages;
      createMarkup(data.results);
      const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
      jsSeeRecipeBtnRef.forEach(btn => {
        btn.addEventListener('click', e => {
          clickModal = e.target.dataset.id;
          openModal(clickModal);
        });
      });
    })
    .catch();
};
refs.resetFilterBtnEl.addEventListener('click', handleResetFilters);

function createArrayWithStep(start, end, step) {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

const valuesArr = createArrayWithStep(5, 120, 5);

createOptions(valuesArr);

function createOptions(arr) {
  const markup = arr.map(
    option =>
      `<option value="${option}" class="select-option">${option} min</option>`
  );
  refs.selectTimeEl.insertAdjacentHTML('beforeend', markup);
  refs.selectTimeEl.style.overflow = 'auto';
}

function creatPageCards(page, limit) {
  pageCards(page, limit)
    .then(data => {
      const totalItems = data.results.length * data.totalPages;
      createMarkup(data.results);
      const jsSeeRecipeBtnRef = document.querySelectorAll('.js-see-recipe');
      jsSeeRecipeBtnRef.forEach(btn => {
        btn.addEventListener('click', e => {
          clickModal = e.target.dataset.id;
          openModal(clickModal);
        });
      });
    })
    .catch();
}
