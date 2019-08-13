import React, {useState, useEffect} from 'react';
import GameCard from './GameCard';
import api from '../api';
import CircularProgress from '@material-ui/core/CircularProgress';

function Games(){
    const [games, setGames] = useState([]);

    //Similar to componentDidMount but using React Hooks
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top');
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url.replace('{width}', '500').replace('{height}', '500');
                game.box_art_url = newURL;
                return game;
            })
            setGames(finalArray);
        };
        fetchData();
    }, []);

    //If the data has not yet been fetched, we show a loading spinner
    if(games.length === 0){
        return (
            <div>
                <h1 className="games-header">Most watched games right now</h1>
                <div className="spinner">
                    <CircularProgress/>
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h1 className="games-header">Most watched games right now</h1>
                <div className="row p-5">
                    {games.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        );
    }

}

export default Games;