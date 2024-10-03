import { printSingleTask } from "./printSingleTask.js";
import { filterStatus, searchFor, sortStatus } from "./main.js";
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
      const statusMatch =
        filterStatus === "all" ||
        !filterStatus ||
        singleTask.status === filterStatus;
      const searchMatch =
        !searchFor ||
        singleTask.title.toLowerCase().includes(searchFor.toLowerCase());

      return statusMatch && searchMatch;
    })
    .sort((a, b) => {
      if (sortStatus === "newest") {
        return b.createdAt - a.createdAt;
      }
      if (sortStatus === "oldest") {
        return a.createdAt - b.createdAt;
      }
    })
    .forEach((task) => {
      printSingleTask(task, printAllTasks);
    });
}

export { printAllTasks };
