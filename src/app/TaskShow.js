import { useState } from "react";
import TaskCreate from "./TaskCreate";

export default function TaskShow({ task, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show rounded-2xl border-gray-900 bg-[#272b30] max-w-full hover:shadow-sm hover:shadow-gray-700" >
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="icerik p-5 text-center relative max-w-full">
          
          <h1 className="font-extrabold text-gray-100">Göreviniz:</h1>
          <h1>{(task.title == [""]) ? `henüz bir başlık yok!` :  task.title}</h1>
          <h1 className="font-extrabold text-gray-100">Yapılacaklar:</h1>
          <h2>{task.taskDesc}</h2>

          <button
            onClick={handleEditClick}
            className="bg-green-400 bg-opacity-30 text-green-400 p-2 pr-5 pl-5 m-4 rounded-md hover:bg-green-700 hover:text-white"
          >
            Düzenle
          </button>
          <button
            onClick={handleDeleteClick}
            className="bg-red-400 bg-opacity-30 text-red-400 top-0 right-0 p-2 pr-8 pl-8 m-4 rounded-md hover:bg-red-700 hover:text-white"
          >
            Sil
          </button>
        </div>
      )}
    </div>
  );
}
