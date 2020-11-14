import React, {Component} from "react";
import Moment from "react-moment";
import './news-style.scss';
import {mapFirebaseDoc} from "../../functions/mapFirebaseDoc";
import {CONCERTS_URL} from "../../constants";

class NewsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            concerts: []
        }
    }

    async componentDidMount() {
        const response = await fetch(CONCERTS_URL);
        const firestoreObject = await response.json();
        const concerts = firestoreObject.documents
            .filter(doc => doc.fields)
            .map(mapFirebaseDoc);
        this.setState({concerts: concerts});
    }

    render() {
        const {concerts} = this.state;
        return (
            <div className="responsive-container">
                <header className="news__header">
                    <h2 className='main-header'>Концерты</h2>
                </header>
                <section className="news">
                    {
                        concerts.map((item, index) => (
                            <section className="news__content" key={index}>
                                <div className='news__row'>
                                    <div className="news__title"><h3 >{item.title}</h3></div>
                                    <div className="news__description"><p>{item.description}</p></div>
                                </div>
                                <div className="news__details-box">
                                    <div className="news__date-time">
                                        <Moment format="D MMMM yyyy, HH:mm">{item.startDate}</Moment>
                                    </div>
                                    <h4 className="news__address">{item.address}</h4>
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
