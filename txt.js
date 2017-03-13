$(document).ready(function() {
$('#content').load("home.htm");
  //handle clicks
  $('.txt').click(function(){
  var page = $(this).attr('href');
    alert(page);
    $('#content').load(page);
    return false;
  });
});
