import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import { AuthProvider } from "./Auth";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Page from "./pages/Page";
import Signup from "./pages/Signup";
import Footer from "./templates/Footer";
import Navigation from "./templates/Navigation";
// import API from './system/ApiConnector.js';

const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
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
