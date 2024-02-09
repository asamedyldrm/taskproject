import TaskShow from "./TaskShow"

export default function TaskList({ tasks, onDelete, onUpdate }) {


  return (
    <div className="max-w-full flex flex-row flex-wrap gap-3 m-5 ml-40 mr-40 justify-center content-center ">
      {tasks.map((e) => {
        return (<TaskShow task={e} onDelete={onDelete} onUpdate={onUpdate}/>)
      })}
    </div>
  );
}
