import React, {Component} from "react";
import Moment from "react-moment";
import './concerts-style.scss';
import {mapFirebaseDoc} from "../../functions/mapFirebaseDoc";
import {CONCERTS_URL} from "../../constants";
import 'moment/locale/ru';

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

        function compare(a,b){
            if(a.startDate < b.startDate){
                return -1
            }
            if(a.startDate > b.startDate){
                return 1
            }
            return 0;
        }

        concerts.sort(compare);
        let newConserts = concerts;
        let filter = newConserts.filter(concert => (concert.startDate > Date.now()));
        this.setState({concerts: filter});
    }

    render() {
        const {concerts} = this.state;
        return (
            <div className="responsive-container">
                <header className="concerts-header">
                    <h2>Афиша</h2>
                    <h3 className="concerts-header__archive">Архив</h3>
                </header>
                <section className="concerts">
                    {
                        concerts.map((item, index) => (
                            <section className="concerts__content" key={index}>
                                <div className='concerts__date-time'>
                                    <Moment format="DD" className="concerts__day">{item.startDate}</Moment>
                                    <Moment format="MMMM" className="concerts__month">{item.startDate}</Moment>
                                    <Moment format="YYYY" className="concerts__year">{item.startDate}</Moment>

                                </div>
                                <div className="concerts__information">
                                    <h3 className="concerts__title">{item.title}</h3>
                                    <p className="concerts__description">{item.description}</p>
                                    <p className="concerts__address">{item.address}</p>
                                    <Moment format="HH:mm" className='concerts__time'>{item.startDate}</Moment>
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
