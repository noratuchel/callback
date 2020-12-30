import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { AuthProvider } from "./Auth";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Page from "./pages/Page";
import Article from "./pages/Article";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Navigation from "./templates/Navigation";
import Footer from "./templates/Footer";
// import API from './system/ApiConnector.js';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/page/:page" component={Page} />
        <Route exact path="/article/:article" component={Article} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;
