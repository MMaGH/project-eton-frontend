import React from 'react'
import { TaskCard,
        TaskTitle,
        TaskCheck,
        TaskContent } from '../styled_components/Tasks'

export default function TaskDetail(props) {
    const task = props.Task;
    console.log(task)
    return (
        <TaskCard>
            <TaskTitle>{task.title}</TaskTitle>
            {task.task.map((task) => {
                return (<TaskContent>
                        {task.content}
                        <TaskCheck type="checkbox" defaultChecked={task.completed}></TaskCheck>
                        </TaskContent>)
            })}
        </TaskCard>
    )
}
