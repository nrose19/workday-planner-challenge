$(document).ready(function(){
    // console.log('working!');

    // Current Day - Listed
    var todayDateCalculated = moment().format('MMMM Do YYYY');
    let todayDate = document.getElementById("currentDay");
    todayDate.innerHTML = todayDateCalculated;

    // Time of the Day - Highlighted
    var todayHour = moment().format('HH');

//////////////////////// ASK BCS about this!!!!!!!!!!/////////////////////
    // if(todayHour === ) {
    //     addClass('present');
    // } else if (todayHour > ){
    //     removeClass('present');
    //     addClass('future');
    // } else if (todayHour < ){
    //     removeClass('future');
    //     addClass('past')
    // }

    // Time of Day - saved within local storage
//////////////////////////// ASK BCS ABOUT THIS!!/////////////////////////
    // $('.saveBtn').click(function(event){
    //     event.preventDefault();
    //     // variables for the values
    //     localStorage.setItem(//variables)
    // })

    // content to be listed - saved within local storage
    

})