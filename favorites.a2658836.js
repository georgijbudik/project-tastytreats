var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i.register("bEGRl",(function(e,t){var n=i("aM96l");const r=document.querySelector(".favorites-delete-recipes-btn"),a=document.querySelector(".favorites-recipe-list"),s=document.querySelector(".empty-meal"),o=JSON.parse(localStorage.getItem("liked-recipes"));if(console.log(o),0!==o.length&&(s.classList.add("is-hidden"),r.classList.remove("is-hidden")),o&&0!==o.length){console.log(o);for(const e of o)(0,n.renderFavoriterecipes)(e).then((({data:e})=>{l([e])}));r.addEventListener("click",(()=>{localStorage.setItem("liked-recipes",JSON.stringify([])),s.classList.remove("is-hidden"),r.classList.add("is-hidden"),a.innerHTML=0}))}function l(e){const t=e.map((({preview:e,title:t,description:n,rating:i,_id:r})=>`<li >\n                <div class="icon-heart">\n              <button class="heart-svg-button" data-heart="${r}">\n              <svg height="22px" id="icon-heart" viewBox="0 0 36 32">\n              <path class="svg" fill="none" opacity="0.9" stroke="#f8f8f8"  stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M15.991 6.848c-2.666-3.117-7.113-3.956-10.451-1.101-3.341 2.854-3.811 7.625-1.188 11.001 2.182 2.806 8.781 8.724 10.944 10.64 0.243 0.214 0.364 0.321 0.505 0.364 0.057 0.017 0.123 0.028 0.191 0.028s0.133-0.010 0.195-0.029l-0.005 0.001c0.141-0.042 0.262-0.15 0.505-0.364 2.163-1.916 8.762-7.834 10.943-10.64 2.624-3.375 2.211-8.177-1.187-11.001-3.398-2.825-7.785-2.016-10.451 1.101z"></path>\n              </svg>\n              </button>\n                </div>\n                <img\n                  src="${e}"\n                  alt=""\n                />\n                <div class="description-rating-container">\n                  <h3 class="title-cards">${t.length>20?t.slice(0,22)+"...":t}</h3>\n                  <p>${n}</p>\n                  <div class="rating">\n                    <p class="number js-number">${i}</p>\n                    <div class="rating-body">\n                    <div class="rating-active"></div>\n                    <div class="rating-items">\n                      <input type="radio" class="rating-item" value="1" name="rating">\n                      <input type="radio" class="rating-item" value="2" name="rating">\n                      <input type="radio" class="rating-item" value="3" name="rating">\n                      <input type="radio" class="rating-item" value="4" name="rating">\n                      <input type="radio" class="rating-item" value="5" name="rating">\n                  </div>\n                  </div>\n                    <div style="margin-left: auto">\n                    <button class="see-recipe-button js-see-recipe" type="button" data-id="${r}" >\n                        See recipe\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </li>`)).join("");a.insertAdjacentHTML("afterbegin",t)}})),i.register("aM96l",(function(e,t){var n,r,a,s;n=e.exports,r="renderFavoriterecipes",a=function(){return l},Object.defineProperty(n,r,{get:a,set:s,enumerable:!0,configurable:!0});var o=i("2shzp");function l(e){return o.default.get(`https://tasty-treats-backend.p.goit.global/api/recipes/${e}`)}})),i("1wH5c"),i("8FnLx"),i("7Lfud"),i("aM96l"),i("bEGRl");
//# sourceMappingURL=favorites.a2658836.js.map
