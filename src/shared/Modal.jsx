import React from 'react'

import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonButton,
    IonItem
  } from '@ionic/react';


const Modal = ({
    message,
    negativeButtonAction,
    positiveButtonAction,
    negativeButtonText,
    positiveButtonText
}) => {
    return (
        <IonItem>
            <IonLabel>{message}</IonLabel>
            <IonButton onClick={negativeButtonAction}>{negativeButtonText != null ? negativeButtonText : "Close"}</IonButton>
            {positiveButtonAction && <IonButton onClick={positiveButtonAction} >{positiveButtonText != null ? positiveButtonText : "OK"}</IonButton>}
        </IonItem>
    )
}

export default Modal;
