let element = document.querySelectorAll( 'img' );

for (let i=0; i<element.length; i++) {

	window.addEventListener( 'scroll', function f(e) {
		var offset = element[i].getBoundingClientRect();
		
		if ( window.scrollY >= offset.bottom) {
			element[i].classList.add( 'animation' );
			
			window.removeEventListener( 'scroll', f );
		}
	} );
	  
} 