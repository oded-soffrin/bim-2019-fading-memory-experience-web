import React from 'react';

import './i18n'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import WizardPage from './components/WizardPage'
import ImagePage from './components/ImagePage'
import GalleryPage from './components/GalleryPage'
import Header from './components/Header'
import './App.css';

import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Watchdog from './components/Watchdog'
const startWatchDog = (customHistory) => {
  const watchdog = new Watchdog(customHistory);
  console.log('watchdog started, going home in ', watchdog.restartMin, 'minutes');
}

function App() {
  
  const customHistory = createBrowserHistory();
  startWatchDog(customHistory);
  return (
    
      <div className="App">
          <Header history={customHistory} />
          <Router history={customHistory}>
            <Route path='/' exact  key={`home`} component={HomePage} />
            <Route path='/about' exact key={`about`}  component={AboutPage} />
            <Route path='/gallery' exact key={`gallery`}  component={GalleryPage} />
            <Route path='/wizard' exact key={`wizard`}  component={WizardPage} />
            <Route path='/imagepage/:imageId' exact key={`image`}  component={ImagePage} />
          </Router>
        </div>
  );
}

export default App;
