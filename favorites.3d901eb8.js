!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("2ALFF",(function(t,r){var n=i("edvpZ"),o=i("iNcuh"),s=i("fxGMx");i("at73I"),i("fq6tk");var a=i("6JpON"),d=document.querySelector(".favorites-delete-recipes-btn"),c=document.querySelector(".favorites-recipe-list"),l=document.querySelector(".empty-meal"),u=document.querySelector("[data-rating-close]"),f=document.querySelector("[data-rating-form]"),v=document.querySelector(".popup-backdrop"),y=document.querySelector(".modal-recipe");document.querySelector('[data-action="close"]').addEventListener("click",(function(){E()})),u.addEventListener("click",(function(){f.classList.remove("is-visible")}));var p,m=JSON.parse(localStorage.getItem("liked-recipes"));if(0!==m.length&&(l.classList.remove("empty-meal-is-visible"),d.classList.remove("is-hidden")),m&&0!==m.length){p=m.filter((function(e,t,r){return r.indexOf(e)===t}));var b=!0,g=!1,w=void 0;try{for(var L,S=p[Symbol.iterator]();!(b=(L=S.next()).done);b=!0){var h=L.value;(0,n.renderFavoriterecipes)(h).then((function(e){var t=e.data;F([t]),H(t)}))}}catch(e){g=!0,w=e}finally{try{b||null==S.return||S.return()}finally{if(g)throw w}}d.addEventListener("click",(function(t){t.currentTarget.blur(),document.body.style.overflow="hidden",e(a).Confirm.show("Delete all recipes","Are you sure you want to delete all the recipes?","Yes","No",(function(){localStorage.setItem("liked-recipes",JSON.stringify([])),l.classList.add("empty-meal-is-visible"),d.classList.add("is-hidden"),c.innerHTML="",document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}))}function E(){window.removeEventListener("mousedown",k),window.removeEventListener("keydown",q),v.classList.remove("is-visible"),document.body.style.overflow="auto"}function k(e){e.target===v&&E(),e.target===f&&f.classList.remove("is-visible")}function q(e){f.classList.contains("is-visible")||"Escape"!==e.code||E(),f.classList.contains("is-visible")&&"Escape"===e.code&&f.classList.remove("is-visible")}function x(t){var r=t.currentTarget.dataset.heart;document.body.style.overflow="hidden",e(a).Confirm.show("Delete recipe","Are you sure you want to delete this recipe from favorites?","Yes","No",(function(){p=p.filter((function(e){return e!==r})),0===p.length&&(d.classList.add("is-hidden"),l.classList.add("empty-meal-is-visible")),E(),localStorage.setItem("liked-recipes",JSON.stringify(p)),e(a).Block.standard(".body"),c.innerHTML="";var t=!0,i=!1,o=void 0;try{for(var s,u=p[Symbol.iterator]();!(t=(s=u.next()).done);t=!0){var f=s.value;(0,n.renderFavoriterecipes)(f).then((function(e){var t=e.data;F([t]),H(t)}))}}catch(e){i=!0,o=e}finally{try{t||null==u.return||u.return()}finally{if(i)throw o}}e(a).Block.remove(".body"),document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}function F(e){!function(e){var t=e.map(s.createMarkup).join("");c.insertAdjacentHTML("afterbegin",t)}(e);var t=document.querySelector(".js-see-recipe"),r=document.querySelector(".heart-svg-button");r.addEventListener("click",x),r.querySelectorAll(".svg").forEach((function(e){return e.classList.add("svg-is-active")})),t.addEventListener("click",(function(e){e.currentTarget.blur(),v.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("mousedown",k),window.addEventListener("keydown",q)}))}function H(e){var t=(0,o.renderModalByRecipe)(e);y.innerHTML=t,document.querySelector("[data-rating-open]").addEventListener("click",(function(){window.addEventListener("mousedown",k),window.addEventListener("keydown",q),f.classList.add("is-visible")}))}})),i.register("edvpZ",(function(e,t){var r,n,o,s;r=e.exports,n="renderFavoriterecipes",o=function(){return d},Object.defineProperty(r,n,{get:o,set:s,enumerable:!0,configurable:!0});var a=i("dIxxU");function d(e){return a.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/".concat(e))}})),i.register("fq6tk",(function(e,t){e.exports=i("aNJCr").getBundleURL("bN78u")+i("iE7OH").resolve("iZSSn")})),i("iE7OH").register(JSON.parse('{"bN78u":"favorites.3d901eb8.js","iZSSn":"sprite.5b23c8c9.svg","fY9Hl":"favorites.e4c53a2a.js"}')),i("3jSZ7"),i("cs7FV"),i("5xtVg"),i("h5rFk"),i("edvpZ"),i("2ALFF")}();
//# sourceMappingURL=favorites.3d901eb8.js.map
