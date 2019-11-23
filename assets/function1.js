var m = moment();
var currentHour = m.format('h:00 A');
// var hour = m.format('h');
// console.log (hour);
var currentDay = document.querySelector('#currentDay');
var time = moment().format('LLLL');
var save = document.querySelectorAll('.saveBtn');
var plan = $('.plan');
var todayHour = $('.hour');
// var currentHour = ($((m).hours()));
// currentHour.format('hh:mm')

// console.log (moment.HTML5_FMT.TIME);
console.log(m);
// console.log($((m).hours()));
console.log(m.format('h:mm A'))
console.log(currentHour);
// var userInput = localStorage.getItem("userInput")
// todayHour=[];
console.log(todayHour);

// Display today
currentDay.append(time);
console.log(time);

// - set event listeners to each "save button" => save current input field to loscal storage
$(save).click(function(e){
    event.preventDefault();
    // console.log(NodeList[input]);
    for (var i=0; i<plan.length; i++){
        var userInput = plan[i].value;
        userInput = plan[i].value;
        console.log(plan[i].value);//
        
        //    localStorage.setItem(userInput, userInput);//works!!!!!!!!!!!
        // localStorage.setItem(hour, userInput);
        
        // for (var j=0; j < todayHour.length; j++){
            //     var key = $(todayHour);
            
            // }
            // if (userInput){   
                // localStorage.setItem(JSON.stringify(key), userInput);
                // console.log(key);
                // }
            }
            // console.log(input[0].value);//WORKS!
            
        // localStorage.setItem("userInput", userInput);
        
 
    var dailyPlan = {
        time: todayHour.value,
        plan: userInput.value
    }
    
    localStorage.setItem("dailyPlan", dailyPlan);
    
});

// - always fetch from local storage to corralating input field
// - Reset local storage every new day and show new planner for the day
// Create color coding functions:
//     - if time is current color code hour to "current"
// function timeVisual(){
//     if (now.hour){
//         $(input).addClass(".present");
//     }
// }

for (var i = 0; i < todayHour.length; i++){
    var currentIndex = (todayHour[i].textContent);
    var currentIndexValue = (JSON.stringify(currentIndex));
    var currentHourValue = (JSON.stringify(currentHour));
    console.log(currentIndex);
    console.log(currentIndexValue)
    
    for (var j = 0; j < plan.length; j++) {
        var currentInput = (plan[i]);
        // var past = (input[j]=0);
        var future = (plan[j]>plan[i])
        // console.log(past)
        
        console.log(todayHour[i].textContent);
        if (currentIndexValue === currentHourValue){
            $(currentInput).addClass('present');
            console.log("in the present");
        }
            else if (currentIndexValue < currentHourValue){
                console.log("in the past");
                $(currentInput).addClass('past');
            }
             else if (currentIndexValue > currentHourValue){
                console.log("in the future");
                $(currentInput).addClass('future');
             }
        
    }
};
// isBefore is also a command - moment('xx:xx').isBefore('xx:xx')
// moment#isAfter and moment#isSame

// - if time past color code hour to "past"
//     - else (future hours) keep color coded to "future"

// $(".time").addClass("past"); ---- WORKSSSSSS