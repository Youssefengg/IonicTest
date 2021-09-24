import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import './Home.css';

const Home: React.FC = () => {
  const [taskList, setTaskList] = useState<any>([])
  const addTask = (event: React.FormEvent<HTMLFormElement>, newTask: string) => {
    event.preventDefault();
    console.log('task added')
    setTaskList([...taskList, newTask])
  }
  const deleteTak = (taskname: any) => {
    console.log('onclick fired')
    console.log(taskname)

    let index = taskList.findIndex((index: any) => index === taskname)
    console.log(index)
    taskList.splice(index, 1)
    setTaskList([...taskList])
    console.log(taskList)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ionTitle" color='primary' size='large'>to do list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TaskForm onAdd={(e, newTask) => addTask(e, newTask)}></TaskForm>
        <TaskList onDelete={(taskName) => deleteTak(taskName)} taskList={taskList}></TaskList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
