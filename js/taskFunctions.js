import { printSingleTask } from "./printSingleTask.js";
import { filterStatus, searchFor } from "./main.js";
import { data } from "./data.js";

function printAllTasks() {
  const tasksList = document.getElementById("tasksList");
  tasksList.innerHTML = "";

  if (!data.tasks.length) {
    tasksList.textContent = "There are no tasks created yet :)";
    return;
  }

  data.tasks
    .filter((singleTask) => {
      if (filterStatus === "all" || !filterStatus) return true;

      return singleTask.status === filterStatus;
    })
    .filter((singleTask) => {
      if (!searchFor) return true;

      return singleTask.title.toLowerCase().includes(searchFor.toLowerCase());
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

export { printAllTasks };
