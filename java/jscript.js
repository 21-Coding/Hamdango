// Business Logic
function Task(taskName, date, priorityLevel, location) {
  this.taskName = taskName;
  this.date = date;
  this.priorityLevel = priorityLevel;
  this.location = location;
}








//User Interface Logic

Task.prototype.display = function () {
  console.log(this.name)
$("#return-task-name").text(this.taskName);
$("#return-task-date").text(this.date);
$("#return-task-priority").text(this.priorityLevel);
$("#return-task-location").text(this.location);

}

$(document).ready(function(event) {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var newTaskName = $("input#task-name").val();
    var newTaskDate = $("input#task-date").val();
    var newTaskPriorityLevel = $("#priorityLevel").val();
    var newTaskLocation = $("input#task-location").val();


    var task1 = new Task(newTaskName, newTaskDate, newTaskPriorityLevel, newTaskLocation)
    console.log(task1)

    $("#story").show();
    task1.display();


  });
});
