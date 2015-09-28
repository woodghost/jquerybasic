$(document).ready(function() {
  $('#switcher-default').addClass('selected');

  $('#switcher button').click(function() { //其他blur、keydown和scroll等标准的DOM事件,也存在类似前面这样的简写事件。
    var bodyClass = this.id.split('-')[1];

    $('body').removeClass().addClass(bodyClass);

    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
  });
});
