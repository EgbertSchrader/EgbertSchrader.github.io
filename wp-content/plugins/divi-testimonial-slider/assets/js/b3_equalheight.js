/* Equal Height*/
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   jQueryel = jQuery(this);
   jQuery(jQueryel).height('auto')
   topPostion = jQueryel.position().top;
   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = jQueryel.height();
     rowDivs.push(jQueryel);
   } else {
     rowDivs.push(jQueryel);
     currentTallest = (currentTallest < jQueryel.height()) ? (jQueryel.height()) : (currentTallest);
  }

   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

if ( jQuery(window).width() > 768 ){
	jQuery(window).load(function() {
	 if( jQuery('body').find('.b3testimonialEqual').length >0 ){
		equalheight('.b3testimonialEqual');
	 }
	 if( jQuery('body').find('.b3testimonialcontentEqual').length >0 ){
		equalheight('.b3testimonialcontentEqual');
	 }
	});
}


/*
jQuery(document).ready(function() {
	jQuery('.et-pb-controllers a').click(function() {
	 if( jQuery('body').find('.b3testimonialEqual').length >0 ){
		  equalheight('.b3testimonialEqual');
	 }
	});
});
*/
if ( jQuery(window).width() > 768 ){
	jQuery(window).resize(function(){
	  if( jQuery('body').find('.b3testimonialEqual').length >0 ){
		equalheight('.b3testimonialEqual');
	 }
	});
}
/* Equal Height*/
