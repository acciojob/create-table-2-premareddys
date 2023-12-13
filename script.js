function createTable() {
	var rows = prompt("Input number of rows");
	var cols = prompt("Input number of columns");
	var table = document.getElementById('myTable');
	var tbody = document.createElement("tbody");
	for (var i = 0; i < rows; i++){
		var row = document.createElement("tr");
		for (var j = 0; j < cols; j++){
			var cell = document.createElement("td");
			var input = document.createElement("input");
	        input.type = "text";
            input.placeholder = "Row-" + i + " Column-" + j;
	        cell.appendChild(input);
			row.appendChild(cell);
		}
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
}
