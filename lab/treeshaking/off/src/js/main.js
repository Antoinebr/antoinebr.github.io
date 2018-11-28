import css from '@css/app.scss'
import yop from '@css/yop.css'

import {
	capitalize
} from "lodash-es"; // es for ES6 modules

import format from 'date-fns/format'

console.log(format(new Date(), 'YYYY-M-D'))

document.querySelector('button').addEventListener('click', function (e) {

	e.preventDefault();

	let element = document.createElement('h3');
	element.classList.add('txt-Center')
	element.innerText = capitalize("Hello Friends this sentance has been capitalized");
	document.body.appendChild(element);

});