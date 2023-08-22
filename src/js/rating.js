import { openModal } from './pop-up';

export function createRating(ratings) {
  let ratingActive, ratingValue;

  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    for (let i = 0; i < ratings.length; i += 1) {
      const rating = ratings[i];
      initRating(rating);
    }
  }

  function initRating(rating) {
    initRatingsVars(rating);
    setRatingActiveWidth();
  }

  function initRatingsVars(rating) {
    ratingActive = rating.querySelector('.rating-active');
    ratingValue = rating.querySelector('.js-number');
  }

  function setRatingActiveWidth() {
    const index = parseFloat(ratingValue.textContent);

    const ratingActiveWidth = (index / 5) * 100;
    ratingActive.style.width = `${ratingActiveWidth.toFixed(2)}%`;
  }
}

export const createRatingInModal = ratings => {
  let ratingActive, ratingValue;

  if (ratings.length > 0) {
    initRatings();
  }

  function initRatings() {
    for (let i = 0; i < ratings.length; i += 1) {
      const rating = ratings[i];
      initRating(rating);
    }
  }

  function initRating(rating) {
    initRatingsVars(rating);
    setRatingActiveWidth();
  }

  function initRatingsVars(rating) {
    ratingActive = rating.querySelector('.modal-rating-active');
    ratingValue = rating.querySelector('.modal-recipe-info-rating-points');
  }

  function setRatingActiveWidth() {
    const index = parseFloat(ratingValue.textContent);
    const ratingActiveWidth = (index / 5) * 100;
    ratingActive.style.width = `${ratingActiveWidth.toFixed(2)}%`;
    console.log(ratingActiveWidth);
  }
};
