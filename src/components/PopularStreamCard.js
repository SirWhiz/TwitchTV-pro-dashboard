import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class PopularStreamCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var channel = this.props.channel;

        return(
            <div className="col-md-3" style={{ marginBottom:'1em' }}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style = {{ height: 0, paddingTop: '56%'}}
                            image={channel.thumbnail_url}
                            title={channel.user_name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {channel.user_name}
                            </Typography>
                            <Typography variant="h6" component="h3">
                                {channel.gameName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {channel.viewer_count} live viewers
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a className="link" className="card-link" href={"https://twitch.tv/" + channel.user_name} target="_blank">
                                Watch {channel.user_name}'s channel
                            </a>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default PopularStreamCard;