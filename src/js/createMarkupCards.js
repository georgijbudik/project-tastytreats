export function createMarkup({ _id, preview, description, rating, title }) {
  return `<li >
                <div class="icon-heart">
              <button class="heart-svg-button" data-heart="${_id}">
              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">
              <path class="svg" fill="none" opacity="0.9" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>
              </svg>
              </button>
                </div>
                <img
                  src="${preview}"
                  alt=""
                />
                <div class="description-rating-container">
                  <h3 class="title-cards">${
                    title.length > 20 ? title.slice(0, 22) + '...' : title
                  }</h3>
                  <p>${
                    description.length > 65
                      ? description.slice(0, 65) + '...'
                      : description
                  }</p>
                  <div class="rating">
                    <p class="number js-number">${rating}</p>
                    <div class="rating-body">
                    <div class="rating-active"></div>
                    <div class="rating-items">
                      <input type="radio" class="rating-item" value="1" name="rating">
                      <input type="radio" class="rating-item" value="2" name="rating">
                      <input type="radio" class="rating-item" value="3" name="rating">
                      <input type="radio" class="rating-item" value="4" name="rating">
                      <input type="radio" class="rating-item" value="5" name="rating">
                  </div>
                  </div>
                    <div style="margin-left: auto">
                    <button class="see-recipe-button js-see-recipe" type="button" data-id="${_id}" >
                        See recipe
                      </button>
                    </div>
                  </div>
                </div>
              </li>`;
}

export function renderGalleryCard(arr) {
  const listOfCards = document.querySelector('.list-of-cards');
  const markup = arr.map(createMarkup).join('');
  listOfCards.insertAdjacentHTML('beforeend', markup);
}

export let likedRecipes = [];

// Load existing data from local storage
const storedLikedRecipes = localStorage.getItem('liked-recipes');
if (storedLikedRecipes) {
  likedRecipes = JSON.parse(storedLikedRecipes);
}

export function clickCardHeartIcon() {
  const heartBtn = document.querySelectorAll('.heart-svg-button');

  heartBtn.forEach(btn => {
    btn.addEventListener('click', ({ currentTarget }) => {
      currentTarget.blur();
      const heartSvg = btn.querySelector('.svg');
      heartSvg.classList.add('svg-is-active');
      btn.disabled = true;
      likedRecipes.push(currentTarget.dataset.heart);
      localStorage.setItem('liked-recipes', JSON.stringify(likedRecipes));
    });
  });
}
