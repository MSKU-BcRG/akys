import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import LoginNavigation from './components/LoginNavigation';
import Supports from './views/Supports';
import Needs from './views/Needs';
import EditSupport from './views/EditSupport';
import EditNeed from './views/EditNeed';
import ConfirmedSupports from './views/ConfirmedSupports';
import ConfirmedNeeds from './views/ConfirmedNeeds';
import EditConfirmedSupport from './views/EditConfirmedSupport';
import EditConfirmedNeed from './views/EditConfirmedNeed';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./public/css/style.css";
import PersonalData from './views/PersonalData';

function App() {

  const [userResponse, setUserResponse] = useState([]);
  const [username, setUsername] = useState([]);

  useEffect(() => {
    fetch("/api/auth")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserResponse(data.message);
        setUsername(data.username);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (userResponse === "LOGGED_IN") {
    return (
      <Router>

        <div className="App">
          <LoginNavigation username={username} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Register />
            </Route>
            <Route exact path="/supports">
              <Supports />
            </Route>
            <Route exact path="/needs">
              <Needs />
            </Route>
            <Route exact path="/confirmed_supports">
              <ConfirmedSupports />
            </Route>
            <Route exact path="/confirmed_needs">
              <ConfirmedNeeds />
            </Route>
            <Route path="/data/:id" component={PersonalData}></Route>
            <Route path="/support/edit/:id" component={EditSupport}></Route>
            <Route path="/need/edit/:id" component={EditNeed}></Route>
            <Route path="/confirmed_support/edit/:id" component={EditConfirmedSupport}></Route>
            <Route path="/confirmed_need/edit/:id" component={EditConfirmedNeed}></Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    );
  } else {
    return (
      <Router>

        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Register />
            </Route>
            <Route exact path="/supports">
              <Home />
            </Route>
            <Route exact path="/needs">
              <Home />
            </Route>
            <Route exact path="/confirmed_supports">
              <Home />
            </Route>
            <Route exact path="/confirmed_needs">
              <Home />
            </Route>
            <Route path="/support/edit/:id" component={EditSupport}></Route>
            <Route path="/need/edit/:id" component={EditNeed}></Route>
            <Route path="/confirmed_support/edit/:id" component={EditConfirmedSupport}></Route>
            <Route path="/confirmed_need/edit/:id" component={EditConfirmedNeed}></Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    );
  }

}

export default App;
