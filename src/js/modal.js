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

