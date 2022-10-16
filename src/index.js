import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






















// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//==============================================
// import App from "./App";
// import React from "react";
// // import ReactDOM from "react-dom";
// // import { createRoot } from 'react-dom/client';

// {

//   const el_1 = React.createElement("span", {
//     // color: red,
//     children: "frend, ",
//   })
//   const el_2 = React.createElement("span", {
//     // color: blue,
//     fontSize: '64px',
//     children: "not frend222",
//   })

//   const element = React.createElement('div',
//     {
//       a: 11,
//       // children: ["Hellou", el_1, el_2,],
//     },
//     el_1,
//     el_2,
//   );
//   // console.log(element);
//   ReactDOM.render(element, document.querySelector("#root"))
// }
// ReactDOM.render(<App />, document.querySelector("#root"))