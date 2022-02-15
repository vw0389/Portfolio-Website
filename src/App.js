import React, { useState } from 'react';
import "./App.css";
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Body from "./components/Body"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
function App() {
    const [views] = useState([
        { id: 1, name: 'About Me' }, { id: 2, name: 'Portfolio' }, { id: 3, name: 'Resume' }
    ]);

    const [currentView, setCurrentView] = useState(views[0]);

    return (
        <div className="">
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container">
                    <Header></Header>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Navigation
                        views={views}
                        currentView={currentView}
                        setCurrentView={setCurrentView}
                    >
                    </Navigation>
                </div>
            </nav>
            <Body currentView={currentView}></Body>
            <Footer></Footer>
        </div>

    );
}

export default App;