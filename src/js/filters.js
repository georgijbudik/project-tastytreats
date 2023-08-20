import Notiflix from 'notiflix';
import { filterAreas } from './api/areas-api';
import { filterIngredients } from './api/ingredients-api';
import { filterIngredientCards } from './api/ingredients-api';
import debounce from 'lodash.debounce';
import { filterCards, filterFood } from './api/filters-api';
import { selectTime } from './api/filters-api';
import { selectArea } from './api/filters-api';

const refs = {
  filterInputEl: document.querySelector('.js-filter-input'),
  selectTimeEl: document.querySelector('.js-select-time'),
  selectAreaEl: document.querySelector('.js-select-area'),
  selectFoodEl: document.querySelector('.js-select-food'),
  resetFilterBtnEl: document.querySelector('.filter-reset-btn'),
  galleryListEl: document.querySelector('.list-of-cards'),
};

let prevSearchQuery = '';

const handleInput = e => {
  const value = e.target.value.trim();
  if (value === '') {
    Notiflix.Notify.warning('Please enter a search term.');
    return;
  }

  if (value === prevSearchQuery) {
    return;
  }
  prevSearchQuery === value;
  page = 1;
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
    renderCards(data);
  });
};

const clearGallery = () => {
  refs.galleryListEl.innerHTML = '';
};
const handleSelectArea = () => {
  const name = refs.selectAreaEl.value;
  selectArea(name)
    .then(response => {
      const data = response.results;
      renderCards(data);
    })
    .catch();
};
const createRecipeCard = recipe => {
  return `<li>
                <div class="icon-heart">
                <svg height="22px" width ="22px" id="icon-heart" viewBox="0 0 36 32">
                <path  opacity="0.5"   stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
                </svg>
                </div>
                <img
                  src="${recipe.preview}"
                  alt=""
                  width="335px"
                  height="335px"
                />
                <div class="description-rating-container">
                  <h3>${recipe.title}</h3>
                  <p>${recipe.description}a</p
                  >
                  <div class="rating">
                  <div>
                    <span class="number">${recipe.rating}</span>
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
                      </div>
                      <button class="see-recipe-button" type="button">
                        See recipe
                      </button>
                  </div>
                </div>
              </li>`;
};

const renderCards = recipes => {
  const markup = recipes.map(createRecipeCard).join('');
  refs.galleryListEl.innerHTML = markup;
};

const handleSelectIngredients = () => {
  const ingredient = refs.selectFoodEl.value;
  filterFood(ingredient)
    .then(response => {
      const data = response.results;
      console.log(response);
      renderCards(data);
    })
    .catch();
};
const debouncedOnChange = debounce(handleInput, 300);

refs.filterInputEl.addEventListener('input', debouncedOnChange);
refs.selectAreaEl.addEventListener('change', handleSelectArea);
refs.selectFoodEl.addEventListener('change', handleSelectIngredients);

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
  refs.filterInputEl.value = '';
  refs.selectTimeEl.value = 'time';
  refs.selectFoodEl.value = 'product';
  refs.selectAreaEl.value = 'region';
};
refs.resetFilterBtnEl.addEventListener('click', handleResetFilters);
