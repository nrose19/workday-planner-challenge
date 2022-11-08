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

    // content to be listed - set within local storage
    $('.saveBtn').click(function(event){
        event.preventDefault();
        var todos = $(this).siblings('.hourTextArea').val();

        // console.log($(this).siblings('.hourTextArea').val());

        // this is needed because it is the parent function of class=saveBtn
        // but is there anyway to reuse timeComparison and add parent() to it?
        
        var todoTimeBlock = $(this).parent().attr('id');
        // console.log($(this).parent().attr('id'))
        
        // needed key to be the timeblock id and the value to be the text area!
        localStorage.setItem(todoTimeBlock, todos);
    })

    // taken out of local storage and stored within application
    // could not figure out how to get local storage to stay within the application itself  
    // $('#09').text(localStorage.getItem('09'));
    $('#09').children('textarea').val(localStorage.getItem('09'));
    $('#10').children('textarea').val(localStorage.getItem('10'));
    $('#11').children('textarea').val(localStorage.getItem('11'));
    $('#12').children('textarea').val(localStorage.getItem('12'));
    $('#13').children('textarea').val(localStorage.getItem('13'));
    $('#14').children('textarea').val(localStorage.getItem('14'));
    $('#15').children('textarea').val(localStorage.getItem('15'));
    $('#16').children('textarea').val(localStorage.getItem('16'));
    $('#17').children('textarea').val(localStorage.getItem('17'));
    
    // console.log($('#09').children('textarea'))
    // $('#09 .row').text(localStorage.getItem(todos));

})
