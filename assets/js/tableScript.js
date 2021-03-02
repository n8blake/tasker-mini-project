const addEventBtn = document.querySelector("#addEvent");

var EVENTS = [];

const addEvent = () => {
	let type = $('#projectType').val();
	let name = $('#projectName').val();
	let rate = $('#hourlyRate').val();
	let date = $('#datepicker').val();

	let event = {};
	event.type = type;
	event.name = name;
	event.rate = rate;
	event.date = date;

	EVENTS.push(event);
}



document.addEventListner(addEventBtn, addEvent);
