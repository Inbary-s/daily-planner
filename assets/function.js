var currentDay = document.querySelector('#currentDay');
var time = moment().format('LLLL');
var save = document.querySelectorAll('.save');
var input = document.querySelectorAll('input');
var todayHour = document.querySelectorAll('.time');

// var UserInput = [];
// Display today
currentDay.append(time);
// $(currentDay).append([time]);
console.log(time);


// - set event listeners to each "save button" => save current input field to loscal storage
$(save).click(function(){
    // console.log(NodeList[input]);
    for (var i=0; i<input.length; i++){
        var userInput = input[i].value;
        // var key = localStorage.key[i];
        var our = todayHour[i].value

        
        
       localStorage.setItem(userInput, userInput);//works!!!!!!!!!!!
        // localStorage.setItem(hour, userInput);
        
        console.log(input[i].value);//
        // console.log(input[0].value);//WORKS!
    }
});


// - always fetch from local storage to corralating input field
// - Reset local storage every new day and show new planner for the day
// Create color coding functions:
//     - if time is current color code hour to "current"
//     - if time past color code hour to "past"
//     - else (future hours) keep color coded to "future"
