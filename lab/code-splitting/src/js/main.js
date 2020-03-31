import css from '@css/app.scss'
import yop from '@css/yop.css'

import SimpleLightboxCSS from '@css/lib/lightbox.css';
import highlight from '@css/lib/highlight.css';


// Let's check if we are on the image gallery page
if (document.querySelector('.image-gallery')) {

	// we dynamically import the module
	import(/* webpackChunkName: "simple-lightbox" */ 'simple-lightbox')
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

		const validator = await import( /* webpackChunkName: "validator" */ 'validator');

		$form.addEventListener('submit', function(e){
			
			e.preventDefault();

			alert(`Valid email ? ${validator.isEmail(document.querySelector('#email').value)} `);

		})
		

	})();


}



const $code = document.querySelector('code');

if($code){


	// we dynamically import the module
	(async () => {

		let hljs = await import( /* webpackChunkName: "highlightJs" */'highlight.js');

		hljs = hljs.default;

		hljs.initHighlightingOnLoad();
		

	})();

}