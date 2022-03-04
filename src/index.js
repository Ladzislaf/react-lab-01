import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Hello_world from "./Hello_world";
import Stock from "./Stock";
import Chess from "./Chess";

ReactDOM.render(
   <div>
      <Hello_world />
      <Stock />
      <Chess />
   </div>,

   document.getElementById("root")
);
