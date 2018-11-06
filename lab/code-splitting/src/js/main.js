import css from '@css/app.scss'
import yop from '@css/yop.css'

import SimpleLightboxCSS from '@css/lib/lightbox.css';


// Let's check if we are on the image gallery page
if (document.querySelector('.image-gallery')) {

	// we dynamically import the module
	import('simple-lightbox')
		.then(sl => {

			const SimpleLightbox = sl.default;

			// the module is loaded and I can use it
			new SimpleLightbox({
				elements: '.image-gallery a'
			});

		});

}

// Let's check if we are on the contact page
const $form = document.querySelector('form');

if ($form) {

	// we dynamically import the module
	(async () => {

		const validator = await import('validator');

		$form.addEventListener('submit', function(e){
			
			e.preventDefault();

			alert(`Valid email ? ${validator.isEmail(document.querySelector('#email').value)} `);

		})
		

	})();


}