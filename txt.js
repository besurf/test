$(document).ready(function() {
$('#content').load("home.htm");
  //handle clicks
  $('.txt').click(function(){
  var page = $(this).attr('href');
    $('#content').load(page);
    return false;
  });
});
