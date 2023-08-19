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

  console.log(value);
};

const debouncedOnChange = debounce(onChange, 300);

refs.filterInputEl.addEventListener('change', debouncedOnChange);
