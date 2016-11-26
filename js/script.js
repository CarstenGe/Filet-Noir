$(document).ready(function(){
$( '#menu2 > li > ul' )
	.hide()
	.click(function( e ){
		e.stopPropagation();
	});
	
  $('#menu2 > li').toggle(function(){
	  $(this)
      .css('background-position', 'right -20px')
      .find('ul').slideDown();
  }, function(){
  	$( this )
      .css('background-position', 'right top')
      .find('ul').slideUp();
  });
});
