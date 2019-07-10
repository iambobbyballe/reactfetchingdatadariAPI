import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

const element2 = <App nama="ini string" />;

const rootElement = document.getElementById("root");
ReactDOM.render(element2, rootElement);
