import 'semantic-ui-css/semantic.min.css';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/Home';
import Navigation from './templates/Navigation';
import Footer from './templates/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route path="/clock" component={Clock} />
      <Footer />
    </Router>
  );
}

export default App;
