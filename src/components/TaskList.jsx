import { useEffect, useState } from "react";
import Section from "./Section";

const TaskList = ({ tasks, setTasks }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const filterTodos = tasks?.filter((task) => task.status === "todo");
    const filterInProgress = tasks?.filter(
      (task) => task.status === "inprogress"
    );
    const filterCompleted = tasks?.filter(
      (task) => task.status === "completed"
    );

    setTodos(filterTodos);
    setInProgress(filterInProgress);
    setCompleted(filterCompleted);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];

  return (
    <div className="flex flex-wrap gap-8 justify-center pb-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          inProgress={inProgress}
          completed={completed}
        />
      ))}
    </div>
  );
};

export default TaskList;
