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
        let numbers = '' + array[0] + array[1] + array[2] + array[3] + array[4] + array[5];
	let hex = '#' + numbers;
	return hex;
}

function showHex(){
	let allHex = [];
	for (let i = 0; i < (document.getElementsByTagName('input').length); i++){
		allHex.push(document.getElementsByTagName('input')[i].value);

	pallete(allHex[i]);
  document.getElementById('final').innerHTML = allHex;
	}
}

function pallete(hex){
	const before = document.getElementById('that');
	let div = document.createElement('div');
	div.style.background = hex;
	div.style.textAlign = 'center';
	div.style.position = 'relative';
	div.style.top = '20px';
	div.style.display = 'inline';
	div.style.padding = '7px';
	div.style.margin = '1px'
	div.innerHTML = hex;
	
	document.body.insertBefore(div, before)
}
