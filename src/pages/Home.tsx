import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import TaskForm from '../components/TaskForm';
import './Home.css';

const Home: React.FC = () => {
  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('task added')
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ionTitle" color='primary' size='large'>to do list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TaskForm onAdd={addTask}></TaskForm>
      </IonContent>
    </IonPage>
  );
};

export default Home;
