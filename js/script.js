




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
      });
    });
   
    // Add a click event on various child elements to close the parent modal
    $('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button').each(function() {
      const $target = $(this).closest('.modal');
  
      $(this).on('click', function() {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    $(document).on('keydown', function(event) {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
  });