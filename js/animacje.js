//let element = document.querySelectorAll( '.animacja' );

//for (let i=0; i<element.length; i++) {

//	window.addEventListener( 'scroll', function f(e) {
//		var offset = element[i].getBoundingClientRect();
		
//		if ( window.scrollY >= offset.bottom) {
//			element[i].classList.add( 'animation' );
			
//			window.removeEventListener( 'scroll', f );
//		}
//	} );
	  
//} 

const element = document.querySelectorAll( 'img' );

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
		for (let i=0; i<element.length; i++) {
        entry.target.classList.add('animate__animated','animate__zoomIn');
		return
		}
        
      }
    });
  });
  for (let i=0; i<element.length; i++) {
  observer.observe(document.querySelector('.animacja'+[i]));
  }