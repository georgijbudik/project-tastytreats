!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},r.parcelRequired7c6=o),o.register("2ALFF",(function(r,n){t(r.exports,"createCards",(function(){return M}));var i=o("edvpZ"),a=o("iNcuh"),c=o("fxGMx");o("at73I"),o("fq6tk");var s=o("6JpON"),l=o("7rQOT"),d=o("cGSdY");e(s).Confirm.init({zindex:1e5});var u=document.querySelector(".favorites-delete-recipes-btn"),f=document.querySelector(".favorites-recipe-list"),v=document.querySelector(".empty-meal"),y=document.querySelector("[data-rating-close]"),m=document.querySelector("[data-rating-form]"),p=document.querySelector(".popup-backdrop"),g=document.querySelector('[data-action="close"]'),b=document.querySelector(".js-btn-all-categories"),h=document.querySelector(".js-favorite-categories");g.addEventListener("click",(function(){H()})),y.addEventListener("click",(function(){m.classList.remove("is-visible")}));var L,w=JSON.parse(localStorage.getItem("liked-recipes"));if(0!==w.length&&(v.classList.remove("empty-meal-is-visible"),u.classList.remove("is-hidden")),w&&0!==w.length){L=w.filter((function(e,t,r){return r.indexOf(e)===t}));var S=!0,k=!1,E=void 0;try{for(var T,q=L[Symbol.iterator]();!(S=(T=q.next()).done);S=!0){var x=T.value;(0,i.renderFavoriterecipes)(x).then((function(e){var t=e.data;M([t]),(0,d.addFavoriteCategory)(t.category)}))}}catch(e){k=!0,E=e}finally{try{S||null==q.return||q.return()}finally{if(k)throw E}}u.addEventListener("click",(function(t){t.currentTarget.blur(),document.body.style.overflow="hidden",e(s).Confirm.show("Delete all recipes","Are you sure you want to delete all the recipes?","Yes","No",(function(){b.style.display="none",h.innerHTML="",localStorage.setItem("liked-recipes",JSON.stringify([])),v.classList.add("empty-meal-is-visible"),u.classList.add("is-hidden"),f.innerHTML="",document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}))}function H(){window.removeEventListener("mousedown",F),window.removeEventListener("keydown",N),p.classList.remove("is-visible"),document.body.style.overflow="auto"}function F(e){e.target===p&&H(),e.target===m&&m.classList.remove("is-visible")}function N(e){m.classList.contains("is-visible")||"Escape"!==e.code||H(),m.classList.contains("is-visible")&&"Escape"===e.code&&m.classList.remove("is-visible")}function O(t){var r=t.currentTarget.dataset.heart;document.body.style.overflow="hidden",e(s).Confirm.show("Delete recipe","Are you sure you want to delete this recipe from favorites?","Yes","No",(function(){L=L.filter((function(e){return e!==r})),0===L.length&&(b.style.display="none",h.innerHTML="",u.classList.add("is-hidden"),v.classList.add("empty-meal-is-visible")),H(),localStorage.setItem("liked-recipes",JSON.stringify(L)),l.Loading.standard("Loading..."),f.innerHTML="";var e=!0,t=!1,n=void 0;try{for(var o,a=L[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var c=o.value;(0,i.renderFavoriterecipes)(c).then((function(e){M([e.data])}))}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}l.Loading.remove(),document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}function M(t){!function(e){var t=e.map(c.createMarkup).join("");f.insertAdjacentHTML("afterbegin",t)}(t);var r=document.querySelector(".js-see-recipe"),n=document.querySelector(".heart-svg-button");n.addEventListener("click",O),n.querySelectorAll(".svg").forEach((function(e){return e.classList.add("svg-is-active")})),r.addEventListener("click",(function(t){(0,a.openModal)(r.dataset.id).then((function(){var t=document.querySelector("[data-add-favorite]");t.removeEventListener("click",a.addClickHandler),t.innerHTML="Remove from favorites",t.addEventListener("click",(function(t){var r=t.currentTarget.dataset.favorite;e(s).Confirm.show("Delete recipe","Are you sure you want to delete this recipe from favorites?","Yes","No",(function(){L=L.filter((function(e){return e!==r})),0===L.length&&(u.classList.add("is-hidden"),v.classList.add("empty-meal-is-visible")),H(),localStorage.setItem("liked-recipes",JSON.stringify(L)),e(s).Block.standard(".body"),f.innerHTML="";var t=!0,n=!1,o=void 0;try{for(var a,c=L[Symbol.iterator]();!(t=(a=c.next()).done);t=!0){var l=a.value;(0,i.renderFavoriterecipes)(l).then((function(e){M([e.data])}))}}catch(e){n=!0,o=e}finally{try{t||null==c.return||c.return()}finally{if(n)throw o}}e(s).Block.remove(".body"),document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}))})),t.currentTarget.blur(),p.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("mousedown",F),window.addEventListener("keydown",N)}))}})),o.register("edvpZ",(function(e,r){t(e.exports,"renderFavoriterecipes",(function(){return i}));var n=o("dIxxU");function i(e){return n.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/".concat(e))}})),o.register("fq6tk",(function(e,t){e.exports=o("aNJCr").getBundleURL("bN78u")+o("iE7OH").resolve("iZSSn")})),o.register("cGSdY",(function(e,r){t(e.exports,"addFavoriteCategory",(function(){return y}));var n=o("edvpZ"),i=o("2ALFF"),a=document.querySelector(".scroll-to-the-top-btn"),c=document.querySelector(".header");a.addEventListener("click",(function(){window.scrollTo(0,0)}));var s,l=document.querySelector(".list-of-cards"),d=document.querySelector(".js-favorite-categories"),u=document.querySelector(".js-btn-all-categories"),f=(window.innerWidth,null),v=JSON.parse(localStorage.getItem("liked-recipes"));function y(e){var t;d.insertAdjacentHTML("beforeend",'<li>\n  <button data-name="'.concat(t=e,'" class="categories-item favorites-btn">').concat(t,"</button>\n  </li>"))}v&&0!==v.length&&(u.style.display="block",s=v.filter((function(e,t,r){return r.indexOf(e)===t})),d.addEventListener("click",(function(e){var t=e.target;if("BUTTON"!==t.tagName)return;if(l.innerHTML="","BUTTON"===t.tagName){t.dataset.name,f=t;var r=!0,o=!1,a=void 0;try{for(var c,d=s[Symbol.iterator]();!(r=(c=d.next()).done);r=!0){var u=c.value;(0,n.renderFavoriterecipes)(u).then((function(e){var t=e.data;t.category===f.dataset.name&&(0,i.createCards)([t])}))}}catch(e){o=!0,a=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw a}}}})),u.addEventListener("click",(function(){l.innerHTML="";var e=!0,t=!1,r=void 0;try{for(var o,a=s[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var c=o.value;(0,n.renderFavoriterecipes)(c).then((function(e){var t=e.data;(0,i.createCards)([t])}))}}catch(e){t=!0,r=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw r}}})),window.addEventListener("scroll",(function(){var e;(e=c.getBoundingClientRect()).top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)?a.classList.remove("is-visible"):a.classList.add("is-visible")})))})),o("iE7OH").register(JSON.parse('{"bN78u":"favorites.f4208463.js","iZSSn":"sprite.5b23c8c9.svg","fY9Hl":"favorites.0b6177d7.js"}')),o("3jSZ7"),o("cs7FV"),o("5xtVg"),o("h5rFk"),o("edvpZ"),o("2ALFF"),o("cGSdY")}();
//# sourceMappingURL=favorites.f4208463.js.map
