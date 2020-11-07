import React, {Component} from "react";
import Moment from "react-moment";
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
        concertReference.orderBy('startDate', 'desc').get().then((querySnapshot) => {
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
            <div className="responsive-container">
                <header className="news__header">
                    <h2 className='main-header'>Concerts</h2>
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
                                    <div className="news__date-time">
                                        <Moment format="D MMMM yyyy, HH:mm">{item.startDate.toDate()}</Moment>
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