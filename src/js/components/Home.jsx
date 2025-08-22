import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [errors, setErrors] = useState([]);

  const handleAddTask = () => {
    const regExp = /^[a-zA-Z\s]+$/;

    if (inputTask?.trim() === "") {
      setErrors([...errors, "No puedes agregar tareas vacías"]);
      return;
    }
    if (!regExp.test(inputTask)) {
      setErrors([
        ...errors,
        "solo se aceptan valores de la A-Z, no se aceptan numeros, ni caracteres especiales",
      ]);
      return;
    }
    setTasks([...tasks, inputTask]);
    setErrors([]);
    setInputTask("");
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
      console.log("Enter presionado, el evento se debe ejecutar");
    }
  };

  return (
    <div className=" container p-5 text-center">
      <ul>
        {errors?.map((error, index) => (
          <li key={index} className="text-danger">
            {" "}
            {error}{" "}
          </li>
        ))}
      </ul>
      <ul className="list-group">
        <li className="list-group-item">
          <input
            className="form-control text-center fs-2"
            onChange={(e) => setInputTask(e.target.value)}
            onKeyDown={handleOnKeyDown}
            id="addTask"
            name="task"
            value={inputTask}
            placeholder="What needs to be done ?"
          />
        </li>
        {tasks?.map((task, index) => (
          <li className="list-group-item" key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
