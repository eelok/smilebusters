import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./pages/homepage-component";
import AboutPage from "./pages/about-page-component"
import ContactPage from "./pages/contact-page-component";
import VideosPage from "./pages/videos-page-component";
import Header from "./components/header/header-component";


function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/videos" component={VideosPage}/>
            </Switch>
        </div>
    );
}

export default App;
