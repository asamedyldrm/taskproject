// import Image from "next/image";

"use client";

import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import { montserrat } from "./ui/fonts";
import axios from "axios";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3004/tasks", {
      title,
      taskDesc,
    });

    console.log(response);
    const createdTasks = [
      ...tasks,
      response.data,
      // {
      //   id: Math.round(Math.random() * 99999990),
      //   title,
      //   taskDesc,
      // },
    ];
    setTasks(createdTasks);
  };

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3004/tasks"); 
    setTasks(response.data)
    
  }

  useEffect(() => {

    fetchTasks();
    // console.log(response.data)
  }, [tasks])
  
  // `{tasks.legth === 0 ? "Görev Yok!"}(${tasks.length}) Görevler - Task Project`

  useEffect(() => {
    document.title =
      tasks.length === 0
        ? "Task Project"
        : `(${tasks.length}) Görevler - Task Project`;
  }, [tasks]);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3004/tasks/${id}`); 
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
      
    });
    setTasks(afterDeletingTasks);
    
    
  };

  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3004/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc
    }); 
    const updatingTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatingTasks);
  };

  return (
    <div className={`${montserrat.className} text-white`}>
      <TaskCreate onCreate={createTask} />
      <hr className="my-4 border-t-1 border-gray-600" />
      <h1 className="text-center font-bold">Görevler</h1>

      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}
