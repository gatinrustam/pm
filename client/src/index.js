import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import './i18n';
import "./index.css";

const routes = useRoutes(false);

ReactDOM.render(
	<BrowserRouter>
		{routes}
	</BrowserRouter>,
	document.getElementById("app")
);
