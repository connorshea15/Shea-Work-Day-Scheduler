// This is a javascript file 
// This is the array to hold my task objects
var tasks = [];

// Display the current day at the top of the page
$("#currentDay").append(moment().format('dddd, MMMM Do'));

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    for (i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }

};


// Function to save tasks to local storage
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

// I need to create a function to save the shiz to local storage
$(".row").on("click", ".saveBtn", function() {
    // Grab the text from the task input
    newTask = $(this).prev();
    taskId = newTask.attr("id");
    
    tasks.push({
        text: newTask.val().trim(),
        identifier: taskId
    });

    console.log(tasks);
    saveTasks();
    
});

loadTasks();