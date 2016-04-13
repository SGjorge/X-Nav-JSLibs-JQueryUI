$(document).ready(function(){
	$( "#tabs" ).tabs();
	$( "#selectmenu" ).selectmenu();
	$( "#selectmenu-class" ).selectmenu();
	$( ".datepicker" ).datepicker();
	$( ".draggable" ).draggable({revert: true, opacity: 0.35, stack: "#droppable"});
	$( ".droppable" ).droppable({
	drop: function( event, ui ) {
		var pack = null;
		$.each( ui.draggable, function( key, val ){
			if(pack === null){
				pack = val.innerHTML;
			}
		});
	    $( this )
		.addClass( "ui-state-highlight" )
		.find( "p" )
		.html( $(this).find( "p" ).html() + pack );
	}});
    $( ".droppable" ).resizable( { animate: true, autoHide: true, ghost: true } );
    $( "#selectable").selectable();
    $("#accordion").accordion();
    $( document ).tooltip();
});