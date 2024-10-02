export const data = {
  tasks: [],
  getTasks: function () {
    const response = JSON.parse(localStorage.getItem("tasks"));
    if (response && Array.isArray(response)) {
      this.tasks = response;
    }

    console.log("response", response);
  },
  setTasks: function (newTasks) {
    if (newTasks) {
      this.tasks = newTasks;
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  },
  deleteTask: function (id) {
    this.tasks = this.tasks.filter((task) => id !== task.id);
    this.setTasks();
  },
  changeTaskStatus: function (id, nextStatus) {
    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: nextStatus };
      }
      return task;
    });
    this.setTasks();
  },
  createTask: function (title) {
    if (!title.trim().length) {
      return {
        success: false,
      };
    }
    console.log("test");

    this.tasks.push({
      id: crypto.randomUUID(),
      title: title,
      status: "created",
    });
    this.setTasks();

    return {
      success: true,
    };
  },
};

data.getTasks();
