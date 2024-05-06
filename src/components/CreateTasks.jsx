import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTasks = ({ setTasks }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3)
      return toast.error("A task must have more than 3 characters");

    if (task.name.length > 100)
      return toast.error("A task must not have more than 100 characters");

    setTasks((prev) => {
      const list = [{ ...prev }, task];

      localStorage.setItem("tasks", JSON.stringify(list));

      return list;
    });

    toast.success("Task Created");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className=" border-2 border-slate-400 bg-slate-100 rounded-md me-8 h-12 w-64 px-6"
        value={task.name}
        onChange={(e) =>
          setTask({ ...task, id: uuidv4(), name: e.target.value })
        }
      />
      <button
        type="submit"
        className=" border-2 border-zinc-950 rounded-md text-black font-medium px-4 py-1 h-12  hover:bg-black hover:text-white "
      >
        Create
      </button>
    </form>
  );
};

export default CreateTasks;
