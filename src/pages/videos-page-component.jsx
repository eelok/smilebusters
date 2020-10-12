import React, {Component} from "react";
import './videos-page-style.scss'
import {Link} from "react-router-dom";

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
        console.log(youtubeObject)
        const { items } = youtubeObject;
        console.log(items.map(item => item.snippet));
        this.setState({playlistItems: items});
    }

    render() {
        let key = 'AIzaSyD8_AOJJfBztUSGKL8DP2aYf4FWM_iMLx0';
        let playlistId = 'PLQG761_nUb0p0H9d5xwdhxpsN9WMdvVzw';
        console.log('render');
        let {playlistItems} = this.state;
        return (
            <article className="container">
                {
                    playlistItems.map(item =>
                        <section key={item.id} className="container__content" >
                            <a href={`//www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}><img className="container__image" src={item.snippet.thumbnails.medium.url} alt=""/></a>
                            <div className="container__text">
                                <h3><a href={`//www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}>{item.snippet.title}</a></h3>
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