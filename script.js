function newColor(){
//creating the 2 br elements
	const br = document.createElement('br');
	const br2 = document.createElement('br');
//defining where the element are placed before
	const before = document.getElementById('this');
//creates a new input element
	let element = document.createElement('input');
//sets the input type to color
	element.type = 'color';
//inserts 2 br elements
	document.body.insertBefore(br, before);
	document.body.insertBefore(br2, before);
//inserts the input element
	document.body.insertBefore(element, before);
}
