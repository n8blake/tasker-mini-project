const addEventBtn = document.querySelector("#addEvent");

var EVENTS = [];

const addEvent = () => {
	let type = $('#projectType').value;
	let name = $('#projectName').value;
	let rate = $('#hourlyRate').value;
	let date = $('#datepicker').value;

	let event = {};
	event.type = type;
	event.name = name;
	event.rate = rate;
	event.date = date;

	EVENTS.push(event);
}



document.addEventListner(addEventBtn, addEvent);
