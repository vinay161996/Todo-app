import { useEffect, useState } from "react";
import CreateTasks from "./components/CreateTasks";
import TaskList from "./components/TaskList";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = JSON.parse(localStorage.getItem("tasks"));
    if (getTasks) {
      setTasks(getTasks);
    }
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div className="w-screen h-screen flex flex-col items-center gap-16 pt-32">
        <CreateTasks tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </DndProvider>
  );
}

export default App;
