const clockEL = $('#current-time');

function clock() {
    clockEL.text(moment().format("MMM Do h:mm:ss a"));
}

const clockInterval = setInterval(clock, 1000);

// Datepicker widget
$(function () {
    $('#datepicker').datepicker({
      changeMonth: true,
      changeYear: true,
    });
  });
