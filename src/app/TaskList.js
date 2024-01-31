import TaskShow from "./TaskShow"

export default function TaskList({ tasks, onDelete, onUpdate }) {


  return (
    <div className="grid grid-flow-row grid-cols-3 gap-3 m-5 ">
      {tasks.map((e) => {
        return (<TaskShow task={e} onDelete={onDelete} onUpdate={onUpdate}/>)
      })}
    </div>
  );
}
