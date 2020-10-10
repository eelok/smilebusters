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
        let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&playlistId=${playlistId}&part=snippet`;
        let response = await fetch(url);
        let youtubeObject = await response.json();
        console.log(youtubeObject)
        const { items } = youtubeObject;
        console.log( items)
        this.setState({playlistItems: items})
    }

    render() {
        console.log('render');
        let {playlistItems} = this.state;
        return (
            <div className="container">
                {
                    playlistItems.map(item =>
                        <div key={item.id} className="container__content" >
                            <img className="container__image" src={item.snippet.thumbnails.standard.url} alt=""/>
                            <div className="container__text">
                                <h3>{item.snippet.title}</h3>
                                <p>{item.snippet.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default VideosPage;