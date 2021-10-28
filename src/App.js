
import './App.css';
import PlanLayout from './pages/layout/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter,Route ,Switch} from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/layout/AppLayout';
import Home from './pages/Home';
import Explore from  "./pages/Explore.js"
import Profile from "./pages/Profile"
function App() {
  return (<>
<BrowserRouter>
<Route exact
path={["/","/invite","/code_confirm" ,"/allow_notification" ]}>

  <PlanLayout>
  <Switch>
<Route exact path="/" component={Welcome}/>
<Route exact path="/invite" component={PhoneConfirmation}/>
<Route exact path="/code_confirm" component={CodeConfirm}/>
<Route exact path="/allow_notification" component={AllowNotification}/>
</Switch>
  </PlanLayout>
  </Route>
  <Route exact path={["/home","/explore","/profile"]}>
<AppLayout>
  <Switch>
    <Route exact path="/home" component={()=><Home/>}/>
    <Route exact path="/explore" component={Explore}/>
    <Route exact path="/profile" component={Profile}/>
  </Switch>
</AppLayout>
  </Route>
  </BrowserRouter>

  </>
  );
}

export default App;
