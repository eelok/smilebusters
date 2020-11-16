import React, {Component} from "react";
import Moment from "react-moment";
// import './concerts-style.scss';
import {mapFirebaseDoc} from "../../functions/mapFirebaseDoc";
import {CONCERTS_URL} from "../../constants";
import 'moment/locale/ru';
import Concert from "../../components/concert/concert-item-component";

class Archive extends Component {
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
                return 1
            }
            if(a.startDate > b.startDate){
                return -1
            }
            return 0;
        }
        ///[..concerts] это делает копию array concerts
        let sortedAndFilteredConcerts = [...concerts]
            .sort(compare)
            .filter(concert => (concert.startDate < Date.now()));
        this.setState({concerts: sortedAndFilteredConcerts});
    }

    render() {
        const {concerts} = this.state;
        return (
            <div className="responsive-container">
                <header className="concerts-header">
                    <h2>Архив</h2>
                    <button className="btn-small"  onClick={() => this.props.history.push('/events')}>Афиша</button>
                </header>
                <section className="concerts">
                    {
                        concerts.map((item, index) => (
                            <Concert key={index} {...item}/>
                        ))
                    }
                </section>
            </div>
        );
    }
}

export default Archive;
