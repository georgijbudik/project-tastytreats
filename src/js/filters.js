import Notiflix from 'notiflix';
import { filterAreas } from './api/areas-api';
import { filterIngredients } from './api/ingredients-api';
import debounce from 'lodash.debounce';
import { filterCards } from './api/filters-api';
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
      return;
    }
    page += 1;

    refs.galleryListEl.innerHTML = '';
    renderCards(data);
  });
};
const handleSelectArea = () => {
  const name = refs.selectAreaEl.value;
  selectArea(name)
    .then(response => {
      const data = response.results;
      console.log(data);
      renderCards(data);
    })
    .catch();

  // selectArea().then(response => {});
};
refs.selectAreaEl.addEventListener('change', handleSelectArea);

const createRecipeCard = recipe => {
  return `<li>
                <div class="icon-heart">
                  <svg height="16px" id="icon-heart" viewBox="0 0 36 32">
                    <path
                      d="M17.767 4.814c-3.258-3.809-8.691-4.834-12.774-1.346s-4.657 9.32-1.451 13.445c2.665 3.43 10.732 10.664 13.376 13.005 0.296 0.262 0.444 0.393 0.616 0.444 0.151 0.045 0.315 0.045 0.466 0 0.173-0.052 0.321-0.183 0.616-0.444 2.644-2.341 10.71-9.575 13.376-13.005 3.206-4.125 2.701-9.994-1.451-13.445s-9.516-2.463-12.774 1.346z"
                    ></path>
                  </svg>
                </div>
                <img
                  src="${recipe.preview}"
                  alt=""
                  width="335px"
                  height="335px"
                />
                <div class="description-rating-container">
                  <p>${recipe.title}</p>
                  <span>${recipe.description}a</span
                  >
                  <div class="rating">
                    <p class="number">${recipe.rating}</p>
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
};

const renderCards = recipes => {
  const markup = recipes.map(createRecipeCard).join('');
  refs.galleryListEl.innerHTML = markup;
};
const debouncedOnChange = debounce(handleInput, 300);

refs.filterInputEl.addEventListener('input', debouncedOnChange);

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
