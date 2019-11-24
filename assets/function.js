var m = moment();
var currentHour = m.hour();

// Display today
$("#currentDay").append(moment().format("LLLL"));

generateTodo = () => {
  for (var i = 9; i < 18; i++) {
    $("tbody")
      .append(`<tr scope="row"><td data-time="${i}" class="hour col">${i}:00</td>
    <td class="plan col"><input id="${i}" type="text" size="100%" /></td>
    <td class="saveBtn btn col"><i class="far fa-save fa-2x"></i></td>
    </tr>`);
    var todo = localStorage.getItem(i);
    console.log(todo);
    $(`#${i}`).val(todo);
    if (i > currentHour) {
      $(`#${i}`).addClass("future");
      $(`#${i}`).parent().addClass("future");
    } else if (i < currentHour) {
      $(`#${i}`).addClass("past");
      $(`#${i}`).parent().addClass("past");
    } else {
      $(`#${i}`).addClass("present");
      $(`#${i}`).parent().addClass("present");
    }
  }
};

// - set event listeners to each "save button" => save current input field to loscal storage
$(document).on("click", ".saveBtn", function(e) {
  e.preventDefault();
  var hour = $(this).siblings(".hour").attr("data-time");
  var todo = $(this).siblings(".plan").children().val();

  localStorage.setItem(hour, todo); //works!!!!!!!!!!!

  console.log("you stored ", localStorage.getItem(hour));
 
});

generateTodo();