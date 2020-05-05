import * as React from "react";
import * as ReactDOM from "react-dom";

import "leda/dist/styles/leda.light.css";
import "leda/dist/styles/reset.css";
import "leda/dist/styles/helpers.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from "./App";
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
