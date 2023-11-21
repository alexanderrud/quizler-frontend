import './App.css';
import AppRouter from "./routes/AppRouter";
import React from "react";
import {AlertProvider} from "./components/UI/alert/AlertContext";

function App() {
    return (
        <div className="App">
            <AlertProvider>
                <AppRouter/>
            </AlertProvider>
        </div>
    );
}

export default App;
