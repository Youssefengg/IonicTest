// import './ExploreContainer.css';

import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import React from "react";

interface TaskFormProps {
    onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
    return (
        <form onSubmit={onAdd}>
            <IonItem>
                <IonLabel position="floating">task :</IonLabel>
                <IonInput />
            </IonItem>
            <IonItem>
                <IonButton fill="outline" type="submit"> Add </IonButton>
            </IonItem>

        </form >
    );
};

export default TaskForm;