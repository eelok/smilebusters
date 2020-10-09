import React from "react";
import Header from "../components/header/header-component";

import './homepage.scss'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main className="content">
                <p className='content__text'>
                    We are a kids <br/>jazz - funk - fusion <br/> band from Russia.<br/>
                    We play covers of world famous musicians and composers.
                </p>
            </main>
        </div>
    )
}

export default HomePage;