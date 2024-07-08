
const $submitBtn = $('#submit-btn');

function getCities () {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];
    return cities;
}

function storeCity (eventObj) {
    eventObj.preventDefault();

    //grab each input element

    const cityEl = $('#city-input');
    const genreInput = $('.genre-input');
    const startDateInput = $('#start-date');
    const endDateInput = $('#end-date');

    //get the value of each input

    const cityVal = cityEl.val();
    const genreVal = genreInput.val();


    //save the blogs array to the local storage
    

    localStorage.setItem('city', cityVal);
    localStorage.setItem('genre', genreVal);

    //reset form values
    localStorage.setItem('start-date', startDateInput.val())
    localStorage.setItem('end-date', endDateInput.val())
    
    window.location = "./rdp.html";
}

$submitBtn.on('click', storeCity);

 // Functions to open and close a modal
 function openModal($el) {
  $el.addClass('is-active');
}

function closeModal($el) {
  $el.removeClass('is-active');
}

function closeAllModals() {
  $('.modal').each(function() {
    closeModal($(this));
  });
//how to position? It opens, but stuck on upper left side.
}

// Add a click event on buttons to open a specific modal
$('.js-modal-trigger').each(function() {
  const modal = $(this).data('target');
  
  const $target = $('#modal');

  $('.js-modal-trigger').on('click', function() {
    openModal($target);
    $('.start-btn').addClass('hide');
  });
});

// Add a click event on various child elements to close the parent modal
$('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').each(function() {
  const $target = $(this).closest('.modal');

  $(this).on('click', function() {
    closeModal($target);
    $('.start-btn').removeClass('hide');
  });
});

$('#start-date, #end-date').datepicker({
  minDate: 0
})

// Add a keyboard event to close all modals
$(document).on('keydown', function(event) {
  if(event.key === "Escape") {
    closeAllModals();
  }
});

