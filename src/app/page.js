// import Image from "next/image";

"use client";

import { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskCreate from "./TaskCreate";
import { montserrat } from "./ui/fonts";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 99999990),
        title,
        taskDesc,
      },
    ];
    setTasks(createdTasks);
    console.log(createdTasks);
  };

  useEffect(()=>{
    document.title = `(${tasks.length}) Görevler - Task Project`
  }, [tasks]); 

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatingTasks = tasks.map((task)=>{
      if(task.id===id){
        return {id, title:updatedTitle, taskDesc: updatedTaskDesc}
      }
      return task;
    });
    setTasks(updatingTasks)
    }
    
  

  return (
    <div className={`${montserrat.className} text-white`}>
      <TaskCreate onCreate={createTask} />
      <h1 className="text-center font-bold">Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}
