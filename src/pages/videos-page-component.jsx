import React, {Component} from "react";
import './videos-page-style.scss'
import {YOUTUBE_PLAYLIST_URL} from "../constants";

class VideosPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            playlistItems: []
        }
    }

    async componentDidMount() {
        let response = await fetch(YOUTUBE_PLAYLIST_URL);
        let youtubeObject = await response.json();
        const {items} = youtubeObject;
        this.setState({playlistItems: items});
    }

    render() {
        let {playlistItems} = this.state;
        return (
            <article className="responsive-container">
                <section className="list-items">
                    {
                        playlistItems.map(item =>
                            <section key={item.id} className="item-box">
                                <a href={`//www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}>
                                    <img className="container__image" src={item.snippet.thumbnails.medium.url} alt="video cover "/>
                                </a>
                                <div className="item-text">
                                    <h3>
                                        <a href={`//www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}>{item.snippet.title}</a>
                                    </h3>
                                    <p>{item.snippet.description}</p>
                                </div>
                            </section>
                        )
                    }
                </section>
            </article>
        )
    }
}

export default VideosPage;
