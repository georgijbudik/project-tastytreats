import Notiflix from 'notiflix';

const footFormEl = document.querySelector('.sub-form');
const footInputEl = document.querySelector('input');
const footButtonEl = document.querySelector('.sub-btn');



const userEmail = (event) => {
    event.preventDefault();
    const {
        elements: { email }
      } = event.currentTarget;

    //   console.log( {
    //     email: email.value
    // })
    updateLocalStorage(email.value);}


    const updateLocalStorage = (email) => {
        const feedbackFormState = {
          email: email 
        };
        localStorage.setItem('email-input', JSON.stringify(feedbackFormState));
      };
    
      footFormEl.addEventListener('input', userEmail);
    
    const getItem = localStorage.getItem("email-input");
    const parsedItem = JSON.parse(getItem);
    if(parsedItem !== null) {
        footInputEl.value = parsedItem.email;
    
    }
    
    function onFormElSubmit(event) {
        event.preventDefault();

        console.log(JSON.parse(localStorage.getItem('email-input')));
        

        footFormEl.reset();
        localStorage.removeItem('email-input');

          
          Notiflix.Notify.success("Thank you for subscribing! Enjoy your meal!")
        };
   
    
    footFormEl.addEventListener('submit', onFormElSubmit);
    