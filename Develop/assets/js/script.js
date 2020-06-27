// This is a javascript file 
// This is the array to hold my task objects
var tasks = [];

// Display the current day at the top of the page
$("#currentDay").append(moment().format('dddd, MMMM Do'));

// populates textareas with respective tasks from local storage
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // Loop through our saved tasks and assign text to proper textareas
    for (i = 0; i < tasks.length; i++) {
        // Grab the id of each object in tasks array
        var taskId = tasks[i].identifier;
        // Find the textarea with the same id
        var test = $("#" + taskId);
        // Set the textarea to the saved task text
        test.val(tasks[i].text);
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

var colorTask = function() {

};


loadTasks();