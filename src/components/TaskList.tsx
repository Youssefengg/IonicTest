// import './ExploreContainer.css';

import { IonList, IonItem, IonLabel, IonImg } from "@ionic/react";
import React from "react";
import './TaskList.css';

interface TaskListProps {
    taskList: [];
    onDelete: (newTask: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ taskList, onDelete }) => {

    return (
        <IonList>
            {taskList.map(task => {
                return (
                    < IonItem key={task} >
                        <IonLabel>{task}</IonLabel>
                        <IonImg onClick={(e) => onDelete(task)} className='delete-icon' src='assets/icon/trash.png' />
                    </IonItem>
                )
            })
            }
        </IonList >
    );
};

export default TaskList;