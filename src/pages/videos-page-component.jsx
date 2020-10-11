import React, {Component} from "react";
import './videos-page-style.scss'

class VideosPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playlistItems: []
        }
    }

    async componentDidMount() {
        console.log('did mount');
        let key = 'AIzaSyD8_AOJJfBztUSGKL8DP2aYf4FWM_iMLx0';
        let playlistId = 'PLQG761_nUb0p0H9d5xwdhxpsN9WMdvVzw';
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet&maxResults=50`;
        let response = await fetch(url);
        let youtubeObject = await response.json();
        const { items } = youtubeObject;
        console.log(items.map(item => item.snippet));
        this.setState({playlistItems: items});
    }

    render() {
        console.log('render');
        let {playlistItems} = this.state;
        return (
            <article className="container">
                {
                    playlistItems.map(item =>
                        <section key={item.id} className="container__content" >
                            <img className="container__image" src={item.snippet.thumbnails.medium.url} alt=""/>
                            <div className="container__text">
                                <h3>{item.snippet.title}</h3>
                                <p>{item.snippet.description}</p>
                            </div>
                        </section>
                    )
                }
            </article>
        )
    }
}

export default VideosPage;