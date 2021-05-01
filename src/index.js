import React from "react";
import ReactDOM from "react-dom";
import PI, { doubePi, triplePi } from "./math";
// here you can see that PI is the default from math

ReactDOM.render(
  <ul>
    <li>{PI}</li>
    <li>{doubePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
// import React from "react";
// import ReactDOM from "react-dom";
// import * as pi from "./math";
// // we are importing everything from math.js as pi .

// ReactDOM.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doubePi()}</li>
//     <li>{pi.triplePi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
