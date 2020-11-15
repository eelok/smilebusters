import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from "./pages/homepage-component";
import AboutPage from "./pages/about/about-page-component"
import ContactPage from "./pages/contact/contact-page-component";
import VideosPage from "./pages/videos-page-component";
import Header from "./components/header/header-component";
import Footer from './components/footer/footer-component';
import MessagePage from './pages/thank-you-page/thank-you-page-component';
import ConcertsPage from "./pages/concerts/concers-page-component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact={true} path="/" component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path='/message' component={MessagePage}/>
                <Route path="/videos" component={VideosPage}/>
                <Route path='/events' component={ConcertsPage}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
