var formEl=document.querySelector("#save-task");
var tasksToDoEl=document.querySelector("#tasks-to-do");

var createTaskHandler=function(){
    event.preventDefault();

  var listItemEl=document.createElement("li");
  listItemEl.className="task-item";
  listItemEl.textContent="This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("click", createTaskHandler);

/* var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name'").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // check if inputs are empty (validate)
    if (taskNameInput === "" || taskTypeInput === "") {
      alert("You need to fill out the task form!");
      return false;
    }
    
    formEl.reset();
  
    // reset form fields for next task to be entered
    document.querySelector("input[name='task-name']").value = "";
    document.querySelector("select[name='task-type']").selectedIndex = 0;
  
    var taskDataObj = {
      name: taskNameInput,
      type: taskTypeInput
    };
  
    createTaskEl(taskDataObj);
  };
  
  var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
  
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
  
    console.dir(listItemEl);
  
    // add list item to list
    tasksToDoEl.appendChild(listItemEl);
  };
  
  formEl.addEventListener("submit", taskFormHandler); */