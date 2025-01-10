import logo from './logo.svg';
import './App.css';
import 'mvp.css';

import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/pages/Home';
import Event from './components/pages/Event';
import Deeplink from './components/pages/Deeplink';
import WebToApp from './components/pages/WebToApp';
import Gtm from './components/pages/Gtm';
import { useState, useEffect } from 'react';
import { singularSdk, SingularConfig } from 'singular-sdk';

function initSingular() {
  const singularConfig = new SingularConfig(process.env.REACT_APP_SINGULAR_SDK_KEY, process.env.REACT_APP_SINGULAR_SECRET_KEY, process.env.REACT_APP_SINGULAR_APP_ID);
  singularSdk.init(singularConfig);
}

function App() {
  // const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    initSingular();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/deeplink" exact Component={Deeplink} />
            <Route path="/event" exact Component={Event} />
            <Route path="/webtoapp" exact Component={WebToApp} />
            <Route path="/gtm" exact Component={Gtm} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
