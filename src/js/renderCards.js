import {categorsCards} from "./api/gallery-api"
import {filtrCards} from "./api/gallery-api"
import {pageCards} from"./api/gallery-api"



// filtrCards().then(data=>{
//     console.log(data)
// });


pageCards(1,2).then(data=>{
    console.log(data)
    // createMarkup(data.results);
}).catch();

// categorsCards("Beef",1,2).then(data=>{
//     console.log(data)
//     createMarkup(data.results)
//     createPaginationButtons(data.totalPages)
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

