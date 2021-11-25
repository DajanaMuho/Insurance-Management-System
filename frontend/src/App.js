
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Register, Login } from './components/auth/index';
import { Dashboard, Customers, Devices, Profile } from './components/main/index';

function App() {

    const isLogin = () => {
        if (localStorage.getItem('token')) return true;
        return false;
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => (isLogin() ?  <Redirect to="/main/dashboard"/> : <Register/> )}  />
                <Route exact path="/auth/register" render={() => (isLogin() ? <Redirect to="/main/dashboard"/> : <Register/> )} />
                <Route exact path="/auth/login"  render={() => (isLogin() ?  <Redirect to="/main/dashboard"/> :   <Login/> )}/>
                <Route exact path="/main"  render={() => (isLogin() ?  <Dashboard/> :    <Redirect to="/auth/login"/> )}/>
                <Route exact path="/main/dashboard"  render={() => (isLogin() ?  <Dashboard/> : <Redirect to="/auth/login"/> )}/>
                <Route exact path="/main/customers"  render={() => (isLogin() ?  <Customers/> : <Redirect to="/auth/login"/> )}/>
                <Route exact path="/main/devices"  render={() => (isLogin() ?  <Devices/> : <Redirect to="/auth/login"/> )}/>
                <Route exact path="/main/profile"  render={() => (isLogin() ?  <Profile/> : <Redirect to="/auth/login"/> )}/>
            </Switch>
        </Router>
    )
}

export default App;