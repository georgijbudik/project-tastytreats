(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-orderNow-open]"),
      openModalIcon: document.querySelector("[data-orderNow-icon-open]"),
      closeModalBtn: document.querySelector("[data-orderNow-close]"),
      modal: document.querySelector("[data-orderNow]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openModalIcon.addEventListener("click", toggleModal);
  
    function toggleModal() {
        this.blur();
      refs.modal.classList.toggle("is-hidden");
    }

    document.addEventListener('keydown', e => {
        if(e.code === 'Escape') {
            refs.modal.classList.add("is-hidden");
        }
    });

    document.addEventListener('mousedown', outerClickHandler);
    function outerClickHandler(event) {
        if (event.target === refs.modal) {
            refs.modal.classList.add("is-hidden");
        }
    }

const refsData = {
    form: document.querySelector('.order-now-form'),
    name: document.querySelector('.order-now-name'),
    phone: document.querySelector('.order-now-phone'),
    email: document.querySelector('.order-now-email'),
    comment: document.querySelector('.order-now-comment'),
};

const STORAGE_KEY = 'order-now-form-state';
const formData = {};
const sawedMessage = localStorage.getItem(STORAGE_KEY);
let item = JSON.parse(sawedMessage)

refsData.form.addEventListener('submit', onFormSubmit);

refsData.form.addEventListener('input', (e) => {
    for(const key in item) {
        if(key === "phone") {
            formData.phone = item.phone
        }   else if(key === "name") {
            formData.name = item.name
        }   else if(key === "email") {
            formData.email = item.email
        }   else if(key === "comment") {
            formData.comment = item.comment
        }
    }
    formData[e.target.name] = e.target.value;
    const formJSON = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, formJSON);


});

populateTextarea()



function onFormSubmit(e) {
    e.preventDefault();
    if(refsData.phone.value === "" || refsData.name.value === "" || refsData.email.value === "") {
        alert("Всі поля мають бути заповненими");
    } else {     

        console.log(formData);
        // console.log(`message: ${refs.textarea.value}`);
        e.target.reset();
        localStorage.clear();
        item = {};
}

}

function populateTextarea() {
    for(const key in item) {
        if(key === "name") {
            refsData.name.value = item.name
        }   else if(key === "email") {
            refsData.email.value = item.email
        }   else if(key === "phone") {
            refsData.phone.value = item.phone
        }   else if(key === "feedback") {
            refsData.comment.value = item.feedback
        }
    }
}



  })();

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-rating-open]"),
      closeModalBtn: document.querySelector("[data-rating-close]"),
      modal: document.querySelector("[data-rating-form]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
        this.blur();
      refs.modal.classList.toggle("is-hidden");
    }

    document.addEventListener('keydown', e => {
        if(e.code === 'Escape') {
            refs.modal.classList.add("is-hidden");
        }
    });

    document.addEventListener('mousedown', outerClickHandler);
    function outerClickHandler(event) {
        if (event.target === refs.modal) {
            refs.modal.classList.add("is-hidden");
        }
    }

})();

const ratingModal = document.querySelectorAll('.rating-modal')

if(ratingModal.length > 0) {
    initRatingsModal();
}

function initRatingsModal(){
    let ratingActive, ratingValue;
    for(let index = 0; index < ratingModal.length; index ++) {
        const rating = ratingModal[index];
        initRatingsModal(rating);
    }

    function initRatingsModal(rating) {
        initRatingModalVars(rating);

        setRatingModalActiveWidth();

        if (rating.classList.contains('rating__set')) {
            setRatingModal(rating);
        }
    }

    function initRatingModalVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingModalActiveWidth (index = ratingValue.innerHTML) {
        const ratingAktiveWidth = index/0.05;
        ratingActive.style.width = `${ratingAktiveWidth}%`;
    }

    function setRatingModal(rating) {
        const ratingItemsModal = rating.querySelectorAll('.rating__item');
        for (let index = 0; index < ratingItemsModal.length; index++) {
            const ratingItemModal = ratingItemsModal[index];
            ratingItemModal.addEventListener("mouseenter", function (e) {
                initRatingModalVars(rating);

                setRatingModalActiveWidth(ratingItemModal.value)
            });
            ratingItemModal.addEventListener("mouseleave", function (e) {
                setRatingModalActiveWidth();
            })
            ratingItemModal.addEventListener("click", function (e) {
                initRatingModalVars(rating);

                ratingValue.innerHTML = index + 1;
                setRatingModalActiveWidth();
            })
        }
    }
    const refsData = {
        form: document.querySelector('.rating-modal-form'),
        email: document.querySelector('.rating-email-modal'),
        rating: document.querySelector('.rating__value'),
    };
    
    const STORAGE_KEY = 'rating-email-modal-form-state';
    const formData = {};
    const sawedMessage = localStorage.getItem(STORAGE_KEY);
    let item = JSON.parse(sawedMessage)
    
    refsData.form.addEventListener('submit', onFormSubmit);
    
    refsData.form.addEventListener('input', (e) => {
        for(const key in item) {
            if(key === "email") {
                formData.email = item.email
            }   else if(key === "rating") {
                formData.rating = item.rating
            }
        }
        formData[e.target.name] = e.target.value;
        const formJSON = JSON.stringify(formData);
        localStorage.setItem(STORAGE_KEY, formJSON);
    
    
    });
    
    populateTextarea()
    
    
    
    function onFormSubmit(e) {
        e.preventDefault();
        if(refsData.email.value === "" || refsData.rating.value === "" ) {
            alert("Всі поля мають бути заповненими");
        } else {     
    
            console.log(formData);
            // console.log(`message: ${refs.textarea.value}`);
            e.target.reset();
            localStorage.clear();
            item = {};
    }
    
    }
    
    function populateTextarea() {
        for(const key in item) {
            if(key === "email") {
                refsData.email.value = item.email
            // }   else if(key === "rating") {
            //     initRatingsModal(rating);
            //     function initRatingsModal(rating) {
            //         initRatingModalVars(rating);
            
            //         setRatingModalActiveWidth();
            
            //         if (rating.classList.contains('rating__set')) {
            //             setRatingModal(rating);
            //         }
            //     }
            
            //     function initRatingModalVars(rating) {
            //         ratingActive = rating.querySelector('.rating__active')
            //         ratingValue = rating.querySelector('.rating__value')
            //     }
            
            //     function setRatingModalActiveWidth (index = ratingValue.innerHTML) {
            //         const ratingAktiveWidth = index/0.05;
            //         ratingActive.style.width = `${ratingAktiveWidth}%`;
            //     }
            }
        }
    }
}

