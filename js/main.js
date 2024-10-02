import { printAllTasks } from "./taskFunctions.js";
import { data } from "./data.js";
import { printUser } from "./printUser.js";

export let filterStatus = "all";
export let searchFor = "";

document.getElementById("createButton").addEventListener("click", () => {
  handleCreateTask();
});

document.getElementById("newTaskInput").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleCreateTask();
  }
});

document.getElementById("filterByStatus").addEventListener("change", () => {
  filterStatus = document.getElementById("filterByStatus").value;
  printAllTasks();
});

document.getElementById("taskSearchInput").addEventListener("input", () => {
  searchFor = document.getElementById("taskSearchInput").value;

  printAllTasks();
});

printAllTasks();

function handleCreateTask() {
  const response = data.createTask(
    document.getElementById("newTaskInput").value
  );
  console.log(response);

  if (!response.success) {
    alert("wrong title");
    return;
  }
  printAllTasks();
}

printUser();
