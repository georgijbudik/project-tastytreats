import Notiflix from 'notiflix';
import { filterAreas } from './api/areas-api';
import { filterIngredients } from './api/ingredients-api';
import debounce from 'lodash.debounce';

const refs = {
  filterInputEl: document.querySelector('.js-filter-input'),
  selectTimeEl: document.querySelector('.js-select-time'),
  selectAreaEl: document.querySelector('.js-select-area'),
  selectFoodEl: document.querySelector('.js-select-food'),
  resetFilterBtnEl: document.querySelector('.filter-reset-btn'),
};

const onChange = e => {
  const value = e.target.value.trim();
  if (value === '') {
    Notiflix.Notify.failure('Введи что-то');
    return;
  }

  console.log(value);
};

const debouncedOnChange = debounce(onChange, 300);

refs.filterInputEl.addEventListener('change', debouncedOnChange);

filterAreas().then(response => {
  console.log(response);
  renderAreas(response);
  // renderSelectOptions(refs.selectTimeEl, response.results, 'time');
  // renderSelectOptions(refs.selectAreaEl, response.results, 'area');
  // renderSelectOptions(refs.selectFoodEl, response.results, '');
});
// const renderSelectOptions = (selectElement, results, value) => {
//   console.log(results);
//   const optionsHTML = results
//     .map(result => {
//       const id = result._id;
//       const label = value === 'time' ? `${result[value]} min` : result[value];
//       return `<option value="${id}" class="select-option">${label}</option>`;
//     })
//     .join('');
//   selectElement.insertAdjacentHTML('beforeend', optionsHTML);
// };

const renderAreas = areas => {
  const optionsHTML = areas
    .map(
      area =>
        `<option value="${area._id}" class="select-option">${area.name}</option>`
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
