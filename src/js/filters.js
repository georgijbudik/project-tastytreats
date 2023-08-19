import Notiflix from 'notiflix';
import { filtrCards } from './api/filters-api';
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

filtrCards().then(response => {
  console.log(response.results);
  renderSelectOptions(refs.selectTimeEl, response.results, 'time');
  renderSelectOptions(refs.selectAreaEl, response.results, 'area');
  renderSelectOptions(refs.selectFoodEl, response.results, '_id');
});
const renderSelectOptions = (selectElement, results, value) => {
  console.log(results);
  const optionsHTML = results
    .map(result => {
      const id = result._id;
      const label = value === 'time' ? `${result[value]} min` : result[value];
      return `<option value="${id}">${label}</option>`;
    })
    .join('');
  selectElement.insertAdjacentHTML('beforeend', optionsHTML);
};
