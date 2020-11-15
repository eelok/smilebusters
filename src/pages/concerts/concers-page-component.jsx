import React, {Component} from "react";
import Moment from "react-moment";
import './concerts-style.scss';
import {mapFirebaseDoc} from "../../functions/mapFirebaseDoc";
import {CONCERTS_URL} from "../../constants";

class ConcertsPage extends Component {
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
                <header className="concerts-header">
                    <h2>Афиша</h2>
                </header>
                <section className="concerts">
                    {
                        concerts.map((item, index) => (
                            <section className="concerts__content" key={index}>
                                <div className='concerts__date-time'>
                                    <Moment format="D MMMM yyyy, HH:mm">{item.startDate}</Moment>
                                </div>
                                <div className="concerts__information">
                                    <h3 className="concerts__title">{item.title}</h3>
                                    <p className="concerts__description">{item.description}</p>
                                    <p className="concerts__address">{item.address}</p>
                                </div>
                            </section>
                        ))
                    }
                </section>
            </div>
        );
    }
}

export default ConcertsPage;
