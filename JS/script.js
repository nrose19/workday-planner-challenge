$(document).ready(function(){
    // console.log('working!');

    // Current Day - Listed
    var todayDateCalculated = moment().format('MMMM Do YYYY');
    let todayDate = document.getElementById("currentDay");
    todayDate.innerHTML = todayDateCalculated;

    // Time of the Day - Highlighted
    var todayHour = moment().format('HH');

// compares current time of day - highlights past, present, and future events
// $(this) function holds the value originally requested without running through the DOM again
   $('.row').each(function(){
       var timeComparison = $(this).attr('id');

    if(todayHour === timeComparison) {
        $(this).addClass('present');
    } else if (todayHour < timeComparison){
        $(this).removeClass('present');
        $(this).addClass('future');
    } else if (todayHour > timeComparison){
        $(this).removeClass('future');
        $(this).addClass('past');
    }
   }) 

    
    // Time of Day - saved within local storage

    // $('.saveBtn').click(function(event){
    //     event.preventDefault();
    //     // variables for the values
    //     localStorage.setItem(//variables)
    // })

    // content to be listed - saved within local storage
    

})

