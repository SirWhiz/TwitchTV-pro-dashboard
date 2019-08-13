import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class StreamCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var stream = this.props.stream;

        return(
            <div className="col-md-3" style={{ marginBottom:'1em' }}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style = {{ height: 0, paddingTop: '56%'}}
                            image={stream.thumbnail_url}
                            title={stream.user_name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {stream.user_name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {stream.viewer_count.toLocaleString()} live viewers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        <a className="link" className="card-link" href={"https://twitch.tv/" + stream.user_name} target="_blank">
                            Watch {stream.user_name}'s channel
                        </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default StreamCard;