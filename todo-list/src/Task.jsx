import './Task.css'

function Task( props ) {
    const cardClassName = props.task.completed ? "taskCardCompleted" : "taskCard"
    return (
        <div className={cardClassName}>
            <div className="remove" onClick={() => props.deleteTask(props.task.id)}>X</div>
            <h1>{props.task.taskName}</h1>
            <div className="complete" onClick={() => props.completeTask(props.task.id)}>Complete</div>
        </div>
    )
}

export default Task