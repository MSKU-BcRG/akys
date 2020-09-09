import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
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

function App() {

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

export default App;
