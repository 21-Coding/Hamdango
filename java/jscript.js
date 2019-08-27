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

filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
