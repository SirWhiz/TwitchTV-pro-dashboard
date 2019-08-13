import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class GameCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var game = this.props.game;

        return(
            <div className="col-md-3" style={{ marginBottom:'1em' }}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            style = {{ height: 0, paddingTop: '56%'}}
                            image={game.box_art_url}
                            title={game.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {game.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <Link
                                className="card-link" 
                                to={{
                                    pathname: "games/" + game.name,
                                    state: {
                                        gameID: game.id
                                    }
                                }} 
                            >
                                <span className="game-button-name">{game.name} streams</span>
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }    
}

export default GameCard;