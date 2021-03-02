const addEventBtn = document.querySelector("#submitProject");

var events = [];

const addEvent = (e) => {
	
	$("#submitProject").submit(function(event){
		event.preventDefault();
		addEvent();
	});

	let type = $('#projectType').val();
	let name = $('#projectName').val();
	let rate = $('#hourlyRate').val();
	let date = $('#datepicker').val();

	let event = {};
	event.type = type;
	event.name = name;
	event.rate = rate;
	event.date = date;

	events.push(event);
	addToTable();
}



document.addEventListener(addEventBtn, addEvent);

function addToTable () {
	const myTable = document.getElementById('project-table');
	for (i=0; i<events; i++) {
		
		var row = myTable.insertRow(0);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		/* var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5); */

		cell1.innerHtml = events[i].type;
		cell2.innerHtml = events[i].name;
		cell3.innerHtml = events[i].rate;
		cell4.innerHtml = events[i].date;
		/* cell5.innerHtml = events[i].type;
		cell6.innerHtml = events[i].type; */
		
	}
}