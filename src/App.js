import React from 'react';
import './App.css';
import {Unity, useUnityContext} from 'react-unity-webgl'


function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "assets/Build.loader.js",
    dataUrl: "assets/Build.data",
    frameworkUrl: "assets/Build.framework.js",
    codeUrl: "assets/Build.wasm",
  });
  return (
    <div className="App">
      <div className="game-provider">
        <Unity
          unityProvider={unityProvider}
          style={{
            width: "77%",
            height: "90vh",
            marginTop: "30px",
          }}
        />
      </div>
    </div>
  );
}

export default App;
