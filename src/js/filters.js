import Notiflix from 'notiflix';
import { filterAreas } from './api/areas-api';
import { filterIngredients } from './api/ingredients-api';
import debounce from 'lodash.debounce';
import {
  filterCards,
  filterFood,
  selectTime,
  selectArea,
} from './api/filters-api';
import { pageCards } from './api/gallery-api';
import { render, createError } from './renderCards';
import { callAllOftenedFunctions } from './callFunctions';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix';

const refs = {
  galleryError: document.querySelector('.gallery-container'),
  filterInputEl: document.querySelector('.js-filter-input'),
  selectTimeEl: document.querySelector('.js-select-time'),
  selectAreaEl: document.querySelector('.js-select-area'),
  selectFoodEl: document.querySelector('.js-select-food'),
  resetFilterBtnEl: document.querySelector('.filter-reset-btn'),
  galleryListEl: document.querySelector('.list-of-cards'),
  starsListEl: document.querySelector('.rating-stars-list'),
};

let prevSearchQuery = '';
let page = 1;
let limit = 6;
const windowWidth = window.innerWidth;

const handleInput = e => {
  const value = e.target.value.trim();

  if (value === '') {
    Notiflix.Notify.warning('Please enter a search term.');
    clearGallery();
    render();
    return;
  }
  if (prevSearchQuery === value) {
    return;
  }
  prevSearchQuery = value;

  if (windowWidth < 768) {
    filterCards(value, page, limit)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          clearGallery();
          return;
        }

        clearGallery();
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
      })
      .catch();
  } else if (windowWidth < 1280) {
    limit = 8;
    filterCards(value, page, limit)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          clearGallery();
          return;
        }

        clearGallery();
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
      })
      .catch();
  } else {
    limit = 9;
    filterCards(value, page, limit)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
          clearGallery();
          return;
        }
        clearGallery();
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
      })
      .catch();
  }
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
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else if (windowWidth < 1280) {
    limit = 8;
    selectTime(time, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else {
    limit = 9;
    selectTime(time, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
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
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else if (windowWidth < 1280) {
    limit = 8;
    selectArea(area, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else {
    limit = 9;
    selectArea(area, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  }
};

const handleSelectIngredients = () => {
  let page = 1;
  let limit = 6;
  const ingredient = refs.selectFoodEl.value;
  clearGallery();

  if (windowWidth < 768) {
    filterFood(ingredient, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else if (windowWidth < 1280) {
    limit = 8;
    filterFood(ingredient, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  } else {
    limit = 9;
    filterFood(ingredient, limit, page)
      .then(({ results, totalPages }) => {
        if (results.length === 0) {
          clearGallery();
          return render();
        }
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch(error => {
        createError();
        console.error('Error:', error);
      });
  }
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

const handleResetFilters = () => {
  refs.resetFilterBtnEl.blur();
  let page = 1;
  let limit = 6;

  refs.filterInputEl.value = '';
  refs.selectTimeEl.value = 'time';
  refs.selectFoodEl.value = 'product';
  refs.selectAreaEl.value = 'region';
  refs.galleryListEl.innerHTML = '';

  if (windowWidth > 768 && windowWidth < 1280) {
    limit = 8;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 2);
        Loading.remove();
      })
      .catch();
  } else if (windowWidth < 768) {
    limit = 6;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch();
  } else {
    limit = 9;
    pageCards(page, limit)
      .then(({ results, totalPages }) => {
        Loading.standard('Loading...');
        callAllOftenedFunctions(results, totalPages, '', limit, 3);
        Loading.remove();
      })
      .catch();
  }
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
