import React from "react";
import Header from "../components/header/header-component";

import './homepage.scss'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main className="content">
                <h2 className='content__text'>
                    We are a kids <br/>jazz - funk - fusion<br/> band from Russia. We play covers of world famous musicians and composers.
                </h2>
            </main>
        </div>
    )
}

export default HomePage;