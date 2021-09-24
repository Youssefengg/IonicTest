// import './ExploreContainer.css';

import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import React, { useState } from "react";

interface TaskFormProps {
    onAdd: (event: React.FormEvent<HTMLFormElement>, newTask: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    const [newTask, setNewTask] = useState<any>('')
    return (
        <form onSubmit={
            (e) => {
                onAdd(e, newTask)
                setNewTask('')
            }

        }>
            <IonItem>
                <IonLabel position="floating">task :</IonLabel>
                <IonInput value={newTask} onIonChange={e => {
                    setNewTask(e.detail.value)
                }} />
            </IonItem>
            <IonItem>
                <IonButton fill="outline" type="submit"> Add </IonButton>
            </IonItem>
        </form >
    );
};

export default TaskForm;