import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Articles from './pages/Articles';
import Clock from './templates/Clock';
import Navigation from './templates/Navigation';

function App() {
  return (
    <Router>
    <Navigation />
      <Route path={["/", "/home"]} component={Articles} />
      <Route path="/clock" component={Clock} />
      <Route path="/btn">
        Button
      </Route>
    </Router>
  );
}

export default App;
