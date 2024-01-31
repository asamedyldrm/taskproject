// "use client";

import { montserrat } from "./ui/fonts";
import { useState } from "react";

export default function TaskCreate({ onCreate, task, taskFormUpdate, onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const Create = (event) => {
    event.preventDefault();
    taskFormUpdate ? onUpdate(task.id, title, taskDesc) : onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };


  return (
    <div
      className={`${montserrat.className} flex justify-center items-center text-white`}
    >
      {taskFormUpdate ? (
        <form onSubmit={Create} className="w-1/2 flex flex-col m-3 text-white">
          <h3 className="font-bold mb-3">Lütfen Taskı Düzenleyiniz:</h3>
          <label>Başlık:</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Başlığı giriniz:"
          />
          <label>Açıklama:</label>
          <textarea
            value={taskDesc}
            onChange={(event) => setTaskDesc(event.target.value)}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Task giriniz:"
          />
          <button
            onClick={Create}
            className="bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-500 font-medium"
          >
            Düzenle!
          </button>
        </form>
      ) : (
        <form onSubmit={Create} className="w-1/2 flex flex-col m-3 text-white">
          <h3 className="font-bold mb-3">Lütfen Task Ekleyiniz:</h3>
          <label>Başlık:</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Başlığı giriniz:"
          />
          <label>Açıklama:</label>
          <textarea
            value={taskDesc}
            onChange={(event) => setTaskDesc(event.target.value)}
            className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Task giriniz:"
          />
          <button
            onClick={Create}
            className="bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-500 font-medium"
          >
            Oluştur!
          </button>
        </form>
      )}
    </div>
  );
}
