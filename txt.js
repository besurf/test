$(document).ready(function() {
$('#content').load("home.htm");
//handle click
  $('ul>li>a').click()function(){
  var page = $(this).attr('href');
    $('#content').load(page);
    return false;
  
  });


});

  
