import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { apps, flash, send, images, home, contacts, hand } from 'ionicons/icons';
import Tab1 from './pages/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Details from './pages/Details';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [selectedTerminal, setSelectedTerminal] = React.useState({})

  // setSelectedTerminal({
  //   name: "Terminal A",
  //   description: "This is terminal a description",
  //   imageURL: "",
  //   trucks: [
  //     {number: "truck 1"}, 
  //     {number: "truck 2"}, 
  //     {number: "truck 3"}
  //   ]
  // })

  const renderLogin = () => {
      return (
        <Login {...{
          setIsAuthenticated
        }}></Login>
      )
  }

  const renderApp = () => {
    return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/tab2/details" component={Details} />
          <Route path="/tab3" component={Tab3} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={hand} />
            <IonLabel>Inspections</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab3">
            <IonIcon icon={contacts} />
            <IonLabel>Contacts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    )
  }

  return(
  <IonApp>
    {isAuthenticated 
      ? renderApp()
      : renderLogin()
    }
  </IonApp>
)
};

export default App;
