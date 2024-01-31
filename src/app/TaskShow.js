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
    <div className="task-show bg-gray-800 rounded-3xl">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div className="icerik p-3 text-center relative">
          <button
            onClick={handleDeleteClick}
            className="bg-red-700 top-0 right-0 text-white p-1 pr-2 pl-2 absolute rounded-3xl hover:bg-red-800"
          >
            X
          </button>
          <h1 className="font-extrabold text-lime-500">Göreviniz:</h1>
          <h1>{task.title}</h1>
          <h1 className="font-extrabold text-lime-500">Yapılacaklar:</h1>
          <h2>{task.taskDesc}</h2>

          <button
            onClick={handleEditClick}
            className="bg-sky-700 text-white p-2 pr-5 pl-5 m-4 rounded-md hover:bg-sky-800"
          >
            Güncelle
          </button>
        </div>
      )}
    </div>
  );
}
