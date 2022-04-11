import React from "react";
import { useRoutes } from "./routes";
import "./App.css";

export default function App() {
    const routes = useRoutes(true);
    return (
        <div className="app">
            {routes}
        </div>
    )
};
