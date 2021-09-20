// import './ExploreContainer.css';

import { IonList, IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface TaskListProps {
    taskList: [];
}

const TaskList: React.FC<TaskListProps> = ({ taskList }) => {
    return (
        <IonList>
            {taskList.map(task => {
                return (
                    < IonItem  >
                        <IonLabel>{task}</IonLabel>
                    </IonItem>
                )
            })
            }
        </IonList >
    );
};

export default TaskList;