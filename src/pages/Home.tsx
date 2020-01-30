import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { book, build, colorFill, grid, speedometer } from 'ionicons/icons';
import React from 'react';
import './Tab1.css';

const Home = ({
  terminalName = "Terminal B",
  terminalDescription = "This is a Terminal B description.",
  terminalBackgroundImageURL = "https://www.werner.com/assets/images/about/terminals/2017/allentown.jpg",
  trucks = [{number: "truck 1"}, {number: "truck 2"}, {number: "truck 3"}]
}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src={terminalBackgroundImageURL} alt="" />
          <IonCardHeader>
            <IonCardSubtitle>Welcome</IonCardSubtitle>
            <IonCardTitle>{terminalName}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              {terminalDescription}
            </p>
          </IonCardContent>
        </IonCard>

        <IonList lines="none">
          <IonListHeader>
            <IonLabel>Ready For Inspection</IonLabel>
          </IonListHeader>

          {trucks.map(truck => <IonItem href="https://ionicframework.com/docs/building/scaffolding" target="_blank">
            <IonIcon slot="start" color="medium" icon={speedometer} />
            <IonLabel>{truck.number}</IonLabel>
          </IonItem>)}

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
