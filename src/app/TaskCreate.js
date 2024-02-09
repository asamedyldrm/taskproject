// "use client";

import { montserrat } from "./ui/fonts";
import { useState } from "react";

export default function TaskCreate({
  onCreate,
  task,
  taskFormUpdate,
  onUpdate,
}) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const Create = (event) => {
    event.preventDefault();
    taskFormUpdate
      ? onUpdate(task.id, title, taskDesc)
      : onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  const titleLength = title.length * 9;
  
  return (
    <div
      className={`${montserrat.className} flex justify-center items-center text-white`}
    >
      {taskFormUpdate ? (
        <form
          onSubmit={Create}
          className={` flex flex-col p-5 relative text-white max-w-full`}
          // style={{ minWidth: `${titleLength}px` }}
        >
          <div className="icerik p-3 text-center relative">
            <h1 className="font-extrabold text-gray-100">Göreviniz:</h1>

            <h1>
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mb-3  max-w-full text-white text-lg rounded-lg bg-transparent"
                placeholder="Görevi düzenle:"
                style={{  width: `${(titleLength !== 0 || titleLength>1500)&&  titleLength}px`}}
              />
            </h1>

            <h1 className="font-extrabold text-gray-100">Yapılacaklar:</h1>
            <h2>
              <textarea
                value={taskDesc}
                onChange={(event) => setTaskDesc(event.target.value)}
                className="mb-3   text-white text-lg rounded-lg bg-transparent"
                placeholder="Task'i düzenle:"
                
              />
            </h2>

            <button
              onClick={Create}
              className="bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-500 font-medium"
            >
              Kaydet!
            </button>
          </div>
        </form>
      ) : (
        // <form
        //   onSubmit={Create}
        //   className={`w-1/2 flex flex-col m-3 relative text-white`}
        //   style={{ minWidth: `${titleLength}px` }}
        // >
        //   {/* <h3 className="font-bold mb-3">Lütfen Taskı Düzenleyiniz:</h3> */}
        //   <h1 className="font-extrabold text-lime-500">Göreviniz:</h1>
        //   <h2>{titleLength}</h2>
        //   <input
        //     value={title}
        //     onChange={(event) => setTitle(event.target.value)}
        //     className="mb-3   text-white text-sm rounded-lg bg-transparent"
        //     placeholder="Görevi düzenle:"
        //   />
        //   <h1 className="font-extrabold text-lime-500">Yapılacaklar:</h1>
        //   <textarea
        //     value={taskDesc}
        //     onChange={(event) => setTaskDesc(event.target.value)}
        //     className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //     placeholder="Task'i düzenle:"
        //   />
        //   <button
        //     onClick={Create}
        //     className="bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-500 font-medium"
        //   >
        //     Kaydet!
        //   </button>
        // </form>
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
