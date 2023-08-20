// import axios from 'axios';

// const BASE_URL = 'https://tasty-treats-backend.p.goit.global/api/';
// const ID = '6462a8f74c3d0ddd28898040';

// export default async function renderModal() {
//   try {
//     const recipe = await getRecipeDataById(ID);
//     console.log(recipe);
//     renderModalByRecipe(recipe.data[0]);
//   } catch (error) {
//     console.warn(error.message);
//   }
// }

// function getRecipeDataById(id) {
//   return axios.get(`${BASE_URL}/recipes/${id}`);
// }

// function renderModalByRecipe(recipe) {
//   const markup = `
//     <div class="modal-wrapper" id="myModal">
//       <button class="close-modal-button" data-action="close">
//         <svg class="close-modal-button-icon">
//           <use href="./images/sprite/sprite.svg#icon-cross"></use>
//         </svg>
//       </button>

//       <div class="modal-recipe-name-and-img">
//         <h2 class="modal-recipe-name">${recipe.title}</h2>
//         <img class="modal-recipe-img" src="${recipe.preview}" alt="${
//     recipe.title
//   }" style="background: linear-gradient(
//       0deg,
//       rgba(5, 5, 5, 0.4) 0%,
//       rgba(5, 5, 5, 0.4) 100%
//     ),
//     url('${recipe.thumb}'), lightgray -34.64px -20px / 109.993% 120%;"/>
//       </div>

//       <div class="modal-recipe-info">
//         <ul class="modal-recipe-info-tag-list">
//         ${recipe.tags.map(tag => {
//           return `<li class="modal-recipe-info-tag-item">#${tag}</li>`;
//         })}
//         </ul>
//         <div class="modal-recipe-info-rating">
//           <p class="modal-recipe-info-rating-points">${recipe.rating}</p>
//           <ul class="modal-recipe-info-rating-stars-list">
//             <li class="modal-recipe-info-rating-star">
//               <svg class="modal-recipe-info-rating-star-svg">
//                 <use href="./images/sprite/sprite.svg#icon-star-rating"></use>
//               </svg>
//             </li>
//             <li class="modal-recipe-info-rating-star">
//               <svg class="modal-recipe-info-rating-star-svg">
//                 <use href="./images/sprite/sprite.svg#icon-star-rating"></use>
//               </svg>
//             </li>
//             <li class="modal-recipe-info-rating-star">
//               <svg class="modal-recipe-info-rating-star-svg">
//                 <use href="./images/sprite/sprite.svg#icon-star-rating"></use>
//               </svg>
//             </li>
//             <li class="modal-recipe-info-rating-star">
//               <svg class="modal-recipe-info-rating-star-svg">
//                 <use href="./images/sprite/sprite.svg#icon-star-rating"></use>
//               </svg>
//             </li>
//             <li class="modal-recipe-info-rating-star">
//               <svg class="modal-recipe-info-rating-star-svg">
//                 <use href="./images/sprite/sprite.svg#icon-star-rating"></use>
//               </svg>
//             </li>
//           </ul>
//           <p class="modal-recipe-info-cooking-time">${recipe.time} min</p>
//         </div>
//       </div>

//       <ul class="modal-recipe-ingredient-list">
//       ${recipe.ingredients
//         .map(ingredient => {
//           return `
//         <li class="modal-recipe-ingredient-item">
//         <p class="modal-recipe-ingredient-item-name">${ingredient.name}</p>
//         <p class="modal-recipe-ingredient-item-quantity">${ingredient.measure}</p>
//         </li>`;
//         })
//         .join('')}
//       </ul>

//       <p class="modal-recipe-cooking-description">
//       ${recipe.instructions}
//       </p>

//       <ul class="modal-recipe-button-list">
//         <li class="modal-recipe-button-item">
//           <button
//             type="button"
//             class="modal-recipe-add-button modal-recipe-button"
//           >
//             Add to favorite
//           </button>
//         </li>
//         <li class="modal-recipe-button-item">
//           <button
//             data-rating-open
//             type="button"
//             class="modal-recipe-rating-button modal-recipe-button"
//           >
//             Give rating
//           </button>
//         </li>
//       </ul>
//     </div>`;
//   backdrop.innerHTML = markup;
// }
