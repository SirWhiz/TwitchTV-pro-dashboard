import React from 'react';
import Button from '@material-ui/core/Button';

class PopularStreamCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var channel = this.props.channel;

        return(
            <div className="col-md-3 game-card" style={{ marginBottom:'1em' }}>
                <div className="card">
                    <img className="card-img-top" src={channel.thumbnail_url}/>
                    <div className="card-body">
                        <h3 className="card-title">{channel.user_name}</h3>
                        <h5 className="card-text">{channel.gameName}</h5>
                        <div className="card-text">
                            {channel.viewer_count} live viewers
                        </div>
                        <Button variant="contained" className="card-button mt-4">
                            <a className="link" className="card-link" href={"https://twitch.tv/" + channel.user_name} target="_blank">
                                Watch {channel.user_name}'s channel
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularStreamCard;