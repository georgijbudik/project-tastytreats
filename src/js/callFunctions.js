import { calcTotalItems } from './totalItems';
import { renderGalleryCard } from './createMarkupCards';
import { tuiPagination } from './pagination';
import { clickBtnModal } from './pop-up';
import { createRating } from './rating';
import { clickCardHeartIcon } from './createMarkupCards';

export function callAllOftenedFunctions(results, totalPages, category, limit) {
  const totalItems = calcTotalItems(results.length, totalPages);

  renderGalleryCard(results);
  tuiPagination(category, totalItems, limit, 2);
  clickBtnModal();
  createRating();
  clickCardHeartIcon();
}

export function callAllFunctionsInPagination(results) {
  renderGalleryCard(results);
  createRating();
  clickBtnModal();
  clickCardHeartIcon();
}
