$(document).ready(function() {
$('#content').load("home.htm");
//handle click

$('ul#nav li a').click(function(){
var page = $(this).attr('href');
  $('#content').load(''+ page +'.htm');

});
});

  
