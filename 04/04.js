// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.md for more information.
$(document).ready(function()  {
       var $speech = $('div.speech');  //events processing code
    $('#switcher-large').click(function()  {
        var num = parseFloat ($speech.css('fontSize'));
    });
});