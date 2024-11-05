import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';


const startApp = ()=>{
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
            <App />
      );
      serviceWorkerRegistration.register()
}

if(window.cordova){
      document.addEventListener("deviceready", startApp, false)
}else{
      startApp()
}
// serviceWorkerRegistration.unregister();
// reportWebVitals();
