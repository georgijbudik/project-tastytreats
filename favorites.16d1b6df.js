!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("2ALFF",(function(t,r){var o=i("edvpZ"),n=i("iNcuh"),a=i("fxGMx");i("at73I"),i("fq6tk");var s=i("6JpON");e(s).Confirm.init({zindex:1e5});var l=document.querySelector(".favorites-delete-recipes-btn"),d=document.querySelector(".favorites-recipe-list"),c=document.querySelector(".empty-meal"),u=document.querySelector("[data-rating-close]"),f=document.querySelector("[data-rating-form]"),v=document.querySelector(".popup-backdrop");document.querySelector('[data-action="close"]').addEventListener("click",(function(){S()})),u.addEventListener("click",(function(){f.classList.remove("is-visible")}));var y,m=JSON.parse(localStorage.getItem("liked-recipes"));if(0!==m.length&&(c.classList.remove("empty-meal-is-visible"),l.classList.remove("is-hidden")),m&&0!==m.length){y=m.filter((function(e,t,r){return r.indexOf(e)===t}));var p=!0,b=!1,g=void 0;try{for(var w,h=y[Symbol.iterator]();!(p=(w=h.next()).done);p=!0){var L=w.value;(0,o.renderFavoriterecipes)(L).then((function(e){q([e.data])}))}}catch(e){b=!0,g=e}finally{try{p||null==h.return||h.return()}finally{if(b)throw g}}l.addEventListener("click",(function(t){t.currentTarget.blur(),document.body.style.overflow="hidden",e(s).Confirm.show("Delete all recipes","Are you sure you want to delete all the recipes?","Yes","No",(function(){localStorage.setItem("liked-recipes",JSON.stringify([])),c.classList.add("empty-meal-is-visible"),l.classList.add("is-hidden"),d.innerHTML="",document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}))}function S(){window.removeEventListener("mousedown",k),window.removeEventListener("keydown",E),v.classList.remove("is-visible"),document.body.style.overflow="auto"}function k(e){e.target===v&&S(),e.target===f&&f.classList.remove("is-visible")}function E(e){f.classList.contains("is-visible")||"Escape"!==e.code||S(),f.classList.contains("is-visible")&&"Escape"===e.code&&f.classList.remove("is-visible")}function x(t){var r=t.currentTarget.dataset.heart;document.body.style.overflow="hidden",e(s).Confirm.show("Delete recipe","Are you sure you want to delete this recipe from favorites?","Yes","No",(function(){y=y.filter((function(e){return e!==r})),0===y.length&&(l.classList.add("is-hidden"),c.classList.add("empty-meal-is-visible")),S(),localStorage.setItem("liked-recipes",JSON.stringify(y)),e(s).Block.standard(".body"),d.innerHTML="";var t=!0,i=!1,n=void 0;try{for(var a,u=y[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var f=a.value;(0,o.renderFavoriterecipes)(f).then((function(e){q([e.data])}))}}catch(e){i=!0,n=e}finally{try{t||null==u.return||u.return()}finally{if(i)throw n}}e(s).Block.remove(".body"),document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}function q(t){!function(e){var t=e.map(a.createMarkup).join("");d.insertAdjacentHTML("afterbegin",t)}(t);var r=document.querySelector(".js-see-recipe"),i=document.querySelector(".heart-svg-button");i.addEventListener("click",x),i.querySelectorAll(".svg").forEach((function(e){return e.classList.add("svg-is-active")})),r.addEventListener("click",(function(t){(0,n.openModal)(r.dataset.id).then((function(){var t=document.querySelector("[data-add-favorite]");t.removeEventListener("click",n.addClickHandler),t.innerHTML="Remove from favorites",t.addEventListener("click",(function(t){var r=t.currentTarget.dataset.favorite;e(s).Confirm.show("Delete recipe","Are you sure you want to delete this recipe from favorites?","Yes","No",(function(){y=y.filter((function(e){return e!==r})),0===y.length&&(l.classList.add("is-hidden"),c.classList.add("empty-meal-is-visible")),S(),localStorage.setItem("liked-recipes",JSON.stringify(y)),e(s).Block.standard(".body"),d.innerHTML="";var t=!0,i=!1,n=void 0;try{for(var a,u=y[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var f=a.value;(0,o.renderFavoriterecipes)(f).then((function(e){q([e.data])}))}}catch(e){i=!0,n=e}finally{try{t||null==u.return||u.return()}finally{if(i)throw n}}e(s).Block.remove(".body"),document.body.style.overflow="auto"}),(function(){document.body.style.overflow="auto"}))}))})),t.currentTarget.blur(),v.classList.add("is-visible"),document.body.style.overflow="hidden",window.addEventListener("mousedown",k),window.addEventListener("keydown",E)}))}})),i.register("edvpZ",(function(e,t){var r,o,n,a;r=e.exports,o="renderFavoriterecipes",n=function(){return l},Object.defineProperty(r,o,{get:n,set:a,enumerable:!0,configurable:!0});var s=i("dIxxU");function l(e){return s.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/".concat(e))}})),i.register("fq6tk",(function(e,t){e.exports=i("aNJCr").getBundleURL("bN78u")+i("iE7OH").resolve("iZSSn")})),i("iE7OH").register(JSON.parse('{"bN78u":"favorites.16d1b6df.js","iZSSn":"sprite.5b23c8c9.svg","fY9Hl":"favorites.7fa10c36.js"}')),i("3jSZ7"),i("cs7FV"),i("5xtVg"),i("h5rFk"),i("edvpZ"),i("2ALFF")}();
//# sourceMappingURL=favorites.16d1b6df.js.map
