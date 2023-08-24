import { calcTotalItems } from './totalItems';
import { renderGalleryCard,clickCardHeartIcon } from './createMarkupCards';
import { tuiPagination } from './pagination';
import { clickBtnModal } from './pop-up';
import { createRating } from './rating';

export function callAllOftenedFunctions(
  results,
  totalPages,
  category,
  limit,
  visiblePages
) {
  const totalItems = calcTotalItems(results.length, totalPages);

  renderGalleryCard(results);
  tuiPagination(category, totalItems, limit, visiblePages);
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
