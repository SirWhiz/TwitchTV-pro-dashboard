import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class GameCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        var game = this.props.game;

        return(
            <div className="col-md-3 game-card" style={{ marginBottom:'1em' }}>
                <div className="card">
                    <img className="card-img-top" src={game.box_art_url} />
                    <div className="card-body">
                        <h5 className="card-title">{game.name}</h5>
                        <Button variant="contained" className="card-button">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default GameCard;