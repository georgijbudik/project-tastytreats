import { pageCards } from './api/gallery-api';
import {tuiPagination} from "../js/pagination"
import { createMarkup } from '../js/createMarkupCards';


const windowWidth = window.innerWidth;

render () 

export function render () {
  let page = 1;
  let limit = 6;
  if (windowWidth < 768) {
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination("", totalItems, limit, 2);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else if (windowWidth < 1280) {
    limit = 8;
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination("", totalItems, limit, 3);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    limit = 9;
    pageCards(page, limit)
      .then(data => {
        const totalItems = data.results.length * data.totalPages;
        createMarkup(data.results);
        tuiPagination("", totalItems, limit, 3);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
}

// pageCards(page, limit)
//   .then(data => {
//     page = 1;
//     const totalItems = data.results.length * data.totalPages;
//     createMarkup(data.results);
//     if(windowWidth >768){
//       tuiPagination("",totalItems, limit,3); 
//     }else if(windowWidth < 768){
//       tuiPagination("",totalItems, limit,2); 
//     }
//   })
//   .catch();


