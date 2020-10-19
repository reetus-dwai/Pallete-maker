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
//sets the random color value
	element.value = randomColor();
//inserts 2 br elements
	document.body.insertBefore(br, before);
	document.body.insertBefore(br2, before);
//inserts the input element
	document.body.insertBefore(element, before);
	randomColor();
}

function randomColor(){
	let array = [];
	let hex;
	
	for (i = 0; i < 6; i++){
		if (Math.round((Math.random() * (15 - 0) + 0)) < 10){
			array.push(Math.round((Math.random() * (9 - 0) + 0)));
		} else {
			let letters = Math.round((Math.random() * (15 - 10) + 10));
			
			if (letters == 10){
				array.push('A');
			} else if (letters == 11){
				array.push('B');
			} else if (letters == 12){
				array.push('C');
			} else if (letters == 13){
				array.push('D');
			} else if (letters == 14){
				array.push('E');
			} else if (letters == 15){
				array.push('F');
			}
		}
	}
	hex = '#' + array[0] + array[1] + array[2] + array[3] + array[4] + array[5];
	return hex;
}
