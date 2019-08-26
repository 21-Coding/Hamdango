// Business Logic
function toDoList () {
  this.tasks = [],
  this.currentId = 0
};

toDoList.prototype.addTask = function (Task) {
  task.id = this.assignId();
  this.tasks.push(Task)
}

toDoList.prototype.assignID = function() {
  this.currentId +=1;
  return this.currentId
}
function Task(taskName, date, priorityLevel, location) {
  this.taskName = taskName;
  this.date = date;
  this.priorityLevel = priorityLevel;
  this.location = location;
}

Task.prototype.deleteTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true
      }
    }
  };
  return false;
}









//User Interface Logic

Task.prototype.display = function () {
  $("#return-task-name").text(this.taskName);
  $("#return-task-date").text(this.date);
  $("#return-task-priority").text(this.priorityLevel);
  $("#return-task-location").text(this.location);
};

$(document).ready(function(event) {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var newTaskName = $("input#task-name").val();
    var newTaskDate = $("input#task-date").val();
    var newTaskPriorityLevel = $("#priorityLevel").val();
    var newTaskLocation = $("input#task-location").val();

    $("ul").append(
      `<bold><li>Task Name: ${newTaskName}</li></bold>
      <li>Task Date: ${newTaskDate}</li>
      <li>Task Priority: ${newTaskPriorityLevel}</li>
      <li> Task Location: ${newTaskLocation}<button type="button" name="delete-button">Task Completed!</button>`
    )
    var task1 = new Task(newTaskName, newTaskDate, newTaskPriorityLevel, newTaskLocation)
    console.log(task1)
//
    $("#story").show();
//     toDoList.addTask(task1)
// console.log(toDoList.tasks)

  });
});

// // $("#dates").on("click", ".deleteButton", function() {
//     dates.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
