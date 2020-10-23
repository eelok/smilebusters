import React, {Component} from "react";
import NEWS_DATA from "./news-data";
import './news-style.scss';

class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: NEWS_DATA
        }
    }

    render() {
        const {news} = this.state;
        return (
            <div className="responsive-container">
                <header className="news__header">
                    <h2 className='main-header'>News</h2>
                </header>
                <section className="news">
                    {
                        news.map(item => (
                            <section className="news__content" key={item.id}>
                                <div className='news__row'>
                                    <div className="news__title"><h3 >{item.title}</h3></div>
                                    <div className="news__description"><p>{item.description}</p></div>
                                </div>
                                <div className="news__details-box">
                                    <div className="news__date-time">{item.dateTime}</div>
                                    <h4 className="news__address">{item.place}</h4>
                                    {/*<img src={item.img_url} alt="visual information"/>*/}
                                </div>
                            </section>
                        ))
                    }
                </section>
            </div>
        );
    }
}

export default NewsPage;