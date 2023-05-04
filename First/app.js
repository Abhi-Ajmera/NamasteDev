let root = ReactDOM.createRoot(document.getElementById("root"));

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is heading written in React to say Namaste"
// );

// root.render(heading);


// nested structure

const parent = React.createElement("div",{id:"parent"},
                React.createElement("div",{id:"child"},
                React.createElement("h2",{id:"heading"},"This is heading written in React to say Namaste")));

root.render(parent);