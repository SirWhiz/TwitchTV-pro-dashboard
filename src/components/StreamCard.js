import React from 'react';
import Button from '@material-ui/core/Button';

class StreamCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var stream = this.props.stream;

        return(
            <div className="col-md-3 game-card" style={{ marginBottom:'1em' }}>
                <div className="card">
                    <img className="card-img-top" src={stream.thumbnail_url} />
                    <div className="card-body">
                        <h5 className="card-title">{stream.user_name}</h5>
                        <div className="card-text">
                            {stream.viewer_count.toLocaleString()} live viewers
                        </div>
                        <Button variant="contained" className="card-button">
                            <a className="link" className="card-link" href={"https://twitch.tv/" + stream.user_name} target="_blank">
                                Watch {stream.user_name}'s channel
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default StreamCard;