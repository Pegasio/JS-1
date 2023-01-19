var table = document.createElement('#table');
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

fillTable(table, arr);

function fillTable(table = document.createElement('#table'), arr = arr) {
	for (var i = 0; i < arr.length; i++) {
		var tr = document.createElement('tr');

		for (var j = 0; j < arr[i].length; j) {
			var td = document.createElement('td');
			td.innerHTML = arr[i][j];
			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
}

function createTable(width = 3, height = 3, base = document.querySelector('#base')) {
	let table = document.createElement('table');

	for (let i = 0; i < width; i++) {
		let tr = document.createElement('tr');

		for (let j = 0; j < height; j++) {
			let td = document.createElement('td');
			tr.appendChild(td);
		}

		table.appendChild(tr);
	}
	base.appendChild(table);

	widthQty = width;
	heightQty = height;
}