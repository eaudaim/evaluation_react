import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'



import reportWebVitals from './reportWebVitals';
import RuleList from '../src/RuleList';
import rules from '../src/data.json'
import '/home/valentin/evaluationReact/src/index.css' 


ReactDOM.render(
  <React.StrictMode>
    <RuleList rules={rules} />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
