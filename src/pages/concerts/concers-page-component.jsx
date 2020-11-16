import React, {Component} from "react";
import 'moment/locale/ru';
import Concerts from "../../components/concerts/concerts-component";
import {loadConcerts} from "../../functions/loadConcerts";

class ConcertsPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            concerts: []
        }
    }

    compare(a, b) {
        if (a.startDate < b.startDate) {
            return -1
        }
        if (a.startDate > b.startDate) {
            return 1
        }
        return 0;
    }

    filter = concert => (concert.startDate >= Date.now())

    async componentDidMount() {
        let concerts = await loadConcerts(this.compare, this.filter);
        this.setState({concerts: concerts});
    }

    render() {
        const {concerts} = this.state;
        return (
            <Concerts
                concerts={concerts}
                pageTitle={'Афиша'}
                linkTitle={'Архив'}
                linkPath={'archive'}
            />
        );
    }
}

export default ConcertsPage;
