import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

// display <App/> inside an element with the id of root
//Result is displayed in the <div id="root"> element
//ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.render(<App/>,document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

