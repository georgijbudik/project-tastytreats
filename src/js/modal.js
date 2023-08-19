(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-orderNow-open]"),
      closeModalBtn: document.querySelector("[data-orderNow-close]"),
      modal: document.querySelector("[data-orderNow]"),
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
        initRatingsModalVars(rating);

        setRatingModalActiveWidth();

        if (rating.classList.contains('rating__set')) {
            setRatingModal(rating);
        }
    }

    function initRatingsModalVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingModalActiveWidth (index = ratingValue.innerHTML) {
        const ratingAktiveWidth = index/0.05;
        ratingActive.style.width = `${ratingAktiveWidth}%`;
    }

    function setRatingModal(rating) {
        const ratingItemsModal = rating.querySelector('.rating__item');
        for (let index = 0; index < ratingItemsModal.length; index++) {
            const ratingItemModal = ratingItemsModal[index];
            ratingItemModal.addEventListener("mouseenter", function (e) {
                initRatingsModalVars(rating);

                setRatingModalActiveWidth(ratingItemModal.value)
            });
        }
    }
}