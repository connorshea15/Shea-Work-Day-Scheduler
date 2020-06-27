// This is a javascript file 

// Display the current day at the top of the page
$("#currentDay").append(moment().format('dddd, MMMM Do'));

// I need to create a function to save the shiz to local storage
$(".row").on("click", ".saveBtn", function() {
    // Grab the text from the task input
    newTask = $(this).prev().val().trim();
    console.log(newTask);
    
});