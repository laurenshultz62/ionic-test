import React from 'react'
import styles from './styles.css'
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
    IonToolbar,
    IonInput,
    IonButton
  } from '@ionic/react';

const Login = ({
    setIsAuthenticated,
    authenticateSignin
}) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
        <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList>
              <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                    <IonInput placeholder="Email" onInput={(event) => setEmail(event.target.value)}></IonInput>
              </IonItem>
              <IonItem>
                  <IonLabel position="stacked">Password</IonLabel>
                    <IonInput type="password" placeholder="Password" onInput={(event) => setPassword(event.target.value)}></IonInput>
              </IonItem>
          </IonList>
          <IonButton className="loginButton" onClick={() => authenticateSignin(email, password)}>Login</IonButton>
      </IonContent>
    </IonPage>
    )
}

export default Login;
