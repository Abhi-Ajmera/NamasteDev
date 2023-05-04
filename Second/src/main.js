import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h2",{id:"heading"},"This is heading written in React to say Namaste")));

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);