import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './NavigationBar';
import ReverseContainer from './ReverseContainer'
import Variants from './Variants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <NavigationBar/>
      <ReverseContainer/>
      <Variants/>
    </React.StrictMode>
);

reportWebVitals();
