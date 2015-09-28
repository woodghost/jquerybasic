$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher button').on('click', function() {
    var bodyClass = this.id.split('-')[1]; //define bodyClass, 降低了复杂度。

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
