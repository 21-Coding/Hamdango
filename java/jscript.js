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

    $("#listed-tasks").append(
      `<div class="${newTaskName}">
      <ul>
      <bold><li>Film Title: ${newTaskName}</li></bold>
      <li>Date: ${newTaskDate}</li>
      <li>Price: ${newTaskPriorityLevel}</li>
      <li>Cost: ${newTaskLocation}</li>
      </ul>
      <button class="deleteButton">Task Completed!</button>
      </div>`
    )
    $("#story").show();

    $(".deleteButton").click(function() {
    $(`.${newTaskName}`).hide()

    newTaskName.clear()
    console.log(`${newTaskName}`)
  })

  })
});


// // $("#dates").on("click", ".deleteButton", function() {
//     dates.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
