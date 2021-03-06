import './css/animate.css';
import './css/reset.css';
import './css/main.css';

const content = document.getElementById('content');
content.addEventListener( 'click', (e) => {

	e.stopPropagation();

});
document.getElementsByClassName('control-area')[0].addEventListener( 'click', (e) => {

	e.stopPropagation();

});

/**
 * alignment mapping
 */
const nextAlignMap = {
	right: 'left',
	mid: 'right',
	left: 'mid',
};

/**
 * change text alignment
 */
document.getElementsByClassName('text-alignment')[0].addEventListener( 'click', (e) => {

	content.className = content.className.replace(
		e.currentTarget.getAttribute('data-align'),
		nextAlignMap[
			e.currentTarget.getAttribute('data-align')
		]
	);

	const alignClass = nextAlignMap[
		e.currentTarget.getAttribute('data-align')
	];

	e.currentTarget.setAttribute('data-align', alignClass);
	e.currentTarget.className = `text-alignment ${alignClass}`;

});

/**
 * change font color
 */
document.getElementsByClassName('text-color')[0].addEventListener( 'click', (e) => {

	const setTextColorToBlack = e.currentTarget.getAttribute('data-color') === 'white';

	e.currentTarget.setAttribute('data-color', setTextColorToBlack ? 'black' : 'white');
	e.currentTarget.className = `text-color ${setTextColorToBlack || 'white'}`;

	if( setTextColorToBlack ) {

		content.className = content.className.replace('white', '');
		return;

	}

	content.className = `${content.className} white`;

});

/**
 * change font size
 */
document.getElementsByClassName('text-size')[0].addEventListener( 'input', (e) => {

	content.style.fontSize = `${parseInt(e.currentTarget.value, 10)}px`;

});

/**
 * setup the menu for changing background color
 */
const bgColorArray = document.getElementsByClassName('color');
Array.from(bgColorArray).forEach((color) => {

	color.addEventListener( 'click', (e) => {

		document.body.className = `v-mid bg-${e.currentTarget.getAttribute('data-color')}`;

	});

});

/**
 * make the input flash animation
 */
document.body.addEventListener( 'click', () => {

	if( !content.classList.contains('flash') ) {

		content.classList.add('flash');

		setTimeout(() => {

			content.classList.remove('flash');

		}, 700);

	}

});
