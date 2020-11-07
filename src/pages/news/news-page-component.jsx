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

    jsonToDocument = function (value) {
        if (!isNaN(value)) {
            if (value.toString().indexOf('.') != -1)
                return { 'doubleValue': value };
            else
                return { 'integerValue': value };
        } else if (value === 'true' || value === 'false' || typeof value == 'boolean') {
            return { 'booleanValue': value };
        } else if (Date.parse(value)) {
            return { 'timestampValue': value };
        } else if (typeof value == 'string') {
            return { 'stringValue': value };
        } else if (value && value.constructor === Array) {
            return { 'arrayValue': { values: value.map(v => this.jsonToDocument(v)) } };
        } else if (typeof value === 'object') {
            let obj = {};
            for (let o in value) {
                obj[o] = this.jsonToDocument(value[o]);
            }
            return { 'mapValue': { fields: obj } };
        }
    }

    async componentDidMount() {
        let url = 'https://firestore.googleapis.com/v1/projects/smilebusters/databases/(default)/documents/concerts?key=AIzaSyB6EVbwJNzN-duQ2oCEBwmnvjpXB9DOx6I';
        let response = await fetch(url);
        let firestoreObject = await response.json();
        let vals = firestoreObject.documents.filter(doc => !!doc.fields).map(doc => {
            let obj = Object.entries(doc.fields).map(([key, value]) => {
                return {key, value: Object.entries(value)[0][1]};
            });
            let res = {};
            obj.forEach(kv => {
                res[kv.key] = Date.parse(kv.value) ? Date.parse(kv.value) : kv.value;
            });
            return res;
        });

        this.setState({concerts: vals});
        // let concertReference = db.collection('concerts');
        // let querySnapshot = await concertReference
        //     .orderBy('startDate', 'desc')
        //     .get();
        // console.log('docs', querySnapshot.docs);
        // let concerts = querySnapshot.docs.map((doc) => {
        //     return {id: doc.id, ...doc.data()};
        // });
        // console.log('concerts', concerts);
        // this.setState({concerts: concerts});
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