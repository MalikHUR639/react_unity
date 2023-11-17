import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; 
import Info from './Info'; 
import Notfound from './NotFound';

const App = () => {
  return (
    <div className="App">
    <h1> <a href="/info">/info</a></h1>
      <div className="game-provider">
        {isLoaded === false && (
          <>
            <div className="loadingBar">
              <div
                className="loadingBarFill"
                style={{width: loadingProgression * 100 * 4}}
              />
            </div>
            //loadingBar
            <p className="text">
              Loading Application... {Math.round(loadingProgression * 100)}%
            </p>
          </>
        )}
        <Unity
          unityProvider={unityProvider}
          className="unity-container"
          style={{display: isLoaded ? "block" : "none"}}
        />
      </div>
    </div>
  );
}

export default App;