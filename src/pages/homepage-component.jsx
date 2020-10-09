import React from "react";
import Header from "../components/header/header-component";

import './homepage.scss'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <main className="content">
                <p className='content__text'>
                    We are a kids
                </p>
                <p className='content__text'>
                    jazz - funk - fusion
                </p>
                <p className='content__text'>
                    band from Russia.
                </p>
                <p className='content__text'>
                    We play covers of world famous musicians and composers.
                </p>
            </main>
        </div>
    )
}

export default HomePage;