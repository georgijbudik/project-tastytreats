import { fetchEvents } from './api/events-api';
$(document).ready(function () {
  const swiperWrapperEl = document.querySelector('.swiper-wrapper');

  fetchEvents()
    .then(data => {
      const markup = createMarkup(data);
      swiperWrapperEl.insertAdjacentHTML('beforeend', markup);

      $('.swiper-wrapper').slick({
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        arrows: false,
      });
    })
    .catch(error => {
      console.error(error);
    });

  function createMarkup(results) {
    const eventsArr = results.map(({ cook, topic }) => {
      return ` 
        <div class="swiper-slide">
                    <div class="cook-img" style="background-image: url('${cook.imgUrl}')"></div>
                    <div class="dish-card"> 
                    <div class="dish-img" style="background-image: url('${topic.previewUrl}')"></div>
                        <h2>${topic.name}</h2>
                        <p>${topic.area}</p>
                    </div>
                  
                    <div class="dish-img-close" style="background-image: url('${topic.previewUrl}')"></div>
                    
                </div>
                
        `;
    });

    return eventsArr.join('');
  }
});
