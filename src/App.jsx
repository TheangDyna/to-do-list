import { useState } from "react";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import ToDoCard from "./components/ToDoCard";

const initailTask = [
  {
    id: 0,
    checked: true,
    description: "Homework 01",
  },
  {
    id: 1,
    checked: true,
    description: "Homework 02",
  },
  {
    id: 2,
    checked: false,
    description: "Homework 03",
  },
];

const App = () => {
  const [task, setTask] = useState(initailTask);

  const handleAdd = (e) => {
    e.preventDefault();
    const inputValue = e.target.input.value;
    if (inputValue.trim() === "") {
      return;
    }
    const newTask = {
      id: new Date().getTime(),
      checked: false,
      description: inputValue,
    };
    setTask((cv) => [...cv, newTask]);
    e.target.reset();
  };

  const handleDelete = (id) => {
    setTask((cv) => cv.filter((item) => item.id != id));
  };

  const handleMark = (id) => {
    setTask((cv) =>
      cv.map((item) =>
        item.id == id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleEdit = (id, newDescription) => {
    setTask((cv) =>
      cv.map((item) =>
        item.id === id ? { ...item, description: newDescription } : item
      )
    );
  };

  return (
    <div className="bg-[#092635] h-screen p-10 text-[#9EC8B9]">
      <div className="max-w-[500px] mx-auto">
        <Header />
        <div className="h-5" />
        <AddForm onAdd={handleAdd} />
        <div className="h-5" />
        <ol className="w-full flex flex-col gap-y-2">
          {task.map((item, index) => (
            <ToDoCard
              key={index}
              description={item.description}
              checked={item.checked}
              onMark={() => handleMark(item.id)}
              onEdit={(e) => handleEdit(item.id, e.target.value)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
