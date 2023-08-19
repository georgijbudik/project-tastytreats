import {categorsCards} from "./api/gallery-api"
import {filtrCards} from "./api/gallery-api"
import {pageCards} from"./api/gallery-api"
import{createMarkup} from "../js/categories"
import Notiflix from 'notiflix';



// const listOfCards = document.querySelector('.list-of-cards');

// filtrCards().then(data=>{
//     console.log(data)
// });


let page = 1;
let limit = 6;

// pageCards(page,limit).then(data=>{
//     const screenWidth = window.innerWidth;
    
//     if(screenWidth <= 375){
        
//      return  createMarkup(data.results);
//     }else if (screenWidth >= 768 && screenWidth < 1200){
//         limit = 8;
//         return  createMarkup(data.results);
//     }else{
//         limit = 9;
//         return  createMarkup(data.results);
//     }
    
// }).catch();

// categorsCards("Beef",1,2).then(data=>{
//     console.log(data)
// })

//   function createMarkup(arr) {
//     const markup = arr.map(({preview,title,description,rating
//     }) => {
//           return `<div>
//         <img width ="200px" src="${preview}"/>
//             <h2>${title}</h2>
//             <div >
//             <p>${description}</p>
//             <p>${rating}</p>
//             </div>
//             <a href="">See recipe</a>
//         </div>`
// }).join('');

// testRendreCards.insertAdjacentHTML('beforeend', markup);
//   }


//   function createPaginationButtons(totalPages) {

//     for (let i = 1; i <= totalPages; i++) {
//         const button = document.createElement("button");
//         button.innerText = i;

//         button.addEventListener("click", () => pageCards(i, 9));
//         paginationElement.appendChild(button);
//     }
// }

