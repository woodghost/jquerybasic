$(document).ready(function() { //continue to refine based on 3.3, 3.4
  $('#switcher-default')
  .addClass('selected')
  .on('click', function() {
    $('body').removeClass();
  });
  $('#switcher-narrow').on('click', function() {
    $('body').removeClass().addClass('narrow');
  });
  $('#switcher-large').on('click', function() {
    $('body').removeClass().addClass('large');
  });

  $('#switcher button').on('click', function() {
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
