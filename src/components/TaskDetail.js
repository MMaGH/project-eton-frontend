import React from 'react'
import { TaskCard,
        TaskTitle,
        TaskContent } from '../styled_components/Tasks'

export default function TaskDetail(props) {
    const task = props.Task;

    function clickHandler(event) {
        event.preventDefault();
        let target = event.target;
        target.classList.contains("completed") ? target.classList.remove("completed") : target.classList.add("completed");
    }

    return (
        <TaskCard>
            <TaskTitle>{task.title}</TaskTitle>
            {task.task.map((task) => {
                return (<TaskContent onClick={clickHandler} className={task.completed ? "completed" : "" }>
                        {task.content}
                        </TaskContent>)
            })}
        </TaskCard>
    )
}
