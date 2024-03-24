import React from "react";
import ReactDOM from "react-dom/client";

// adding element using venilla javascript
const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "i am h1 from venilla javascript";
root.append(h1);

// adding element using only react
const rootReact = ReactDOM.createRoot(document.getElementById("rootReact"));
const reactH1 = React.createElement("h1", {}, "i am h1 from react");
rootReact.render(reactH1);
// note if it older version then react18 then ReactDOM.render(root,reactH1)

//adding element using react component

const ReactJSXh1 = () => <h1>i am h1 from react JSX</h1>;

const rootReactjsx = ReactDOM.createRoot(
  document.getElementById("rootReactjsx")
);

rootReactjsx.render(<ReactJSXh1 />);
