import React, {Component} from "react";
import {mapFirebaseDoc} from "../../functions/mapFirebaseDoc";
import {CONCERTS_URL} from "../../constants";
import 'moment/locale/ru';
import Concerts from "../../components/concerts/concerts-component";

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
            <Concerts pageTitle={'Архив'} concerts={concerts} linkTitle={'Афиша'} linkPath={'events'}/>
        );
    }
}

export default Archive;
