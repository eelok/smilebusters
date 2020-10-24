import React, {Component} from "react";
// import NEWS_DATA from "./news-data";
import './news-style.scss';
import {db} from '../../firebase';

class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            concerts: []
        }
    }

    async componentDidMount() {
        let concertReference = db.collection('concerts');
        concertReference.get().then((querySnapshot) => {
            let concerts = [];
            querySnapshot.forEach((doc) => {
                concerts.push({id: doc.id, ...doc.data()});
            });
            this.setState({concerts: concerts})
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    render() {
        const {concerts} = this.state;
        return (
            <div className="responsive-container news-page">
                <header className="news__header">
                    <h2 className='main-header'>News</h2>
                </header>
                <section className="news">
                    {
                        concerts.map(item => (
                            <section className="news__content" key={item.id}>
                                <div className='news__row'>
                                    <div className="news__title"><h3 >{item.title}</h3></div>
                                    <div className="news__description"><p>{item.description}</p></div>
                                </div>
                                <div className="news__details-box">
                                    <div className="news__date-time"></div>
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