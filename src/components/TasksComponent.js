import React, { useEffect, useState } from 'react'
import { TaskContainer } from '../styled_components/Tasks'
import TaskDetail from "./TaskDetail";
import getDatahandler from "../service/Datahandler";


export default function TasksComponent(props) {
    const [taskList, setTaskList] = useState([]);
    const [refresh, setRefresh] = useState("");
    const datahandler = getDatahandler();
    
    useEffect(() => {
        setTaskList(datahandler.getAllTasks(setRefresh));
        setRefresh("none");
    }, [refresh, datahandler])

    return (
        <TaskContainer>
            {taskList.map((task) => {
                return <TaskDetail Task={task} />
            })}
        </TaskContainer>
    )
}
