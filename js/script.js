

const $submitBtn = $('#submit-btn');

function getCities () {
    const cities = JSON.parse(localStorage.getItem('cities')) || [];
    return cities;
}

function storeCity (eventObj) {
    eventObj.preventDefault();

    //grab each input element

    const inputEl = $('#city-input');
    const genreInput = $('.genre-input');

    //get the value of each input

    const cityVal = inputEl.val();
    const genreVal = genreInput.val();

    //create an object that has each value and date 

    const cityObj = {
        city: cityVal,
        genre: genreVal
    };
    

    //pull old data from local or have empty array

    const cities = getCities();

    //push the blogs obj to the blogs array then convert to JSON

    cities.push(cityObj);
    const jsonArray = JSON.stringify(cities);

    //save the blogs array to the local storage
    

    localStorage.setItem('cities', jsonArray);

    //reset form values

    
    window.location = "./rdp.html";

    

    
}

$submitBtn.on('click', storeCity);













$(document).ready(function() {
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
  
    // Add a keyboard event to close all modals
    $(document).on('keydown', function(event) {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });

