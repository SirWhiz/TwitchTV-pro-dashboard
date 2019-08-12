import React, { useEffect, useState } from 'react';
import api from '../api';
import PopularStreamCard from './PopularStreamCard';
import CircularProgress from '@material-ui/core/CircularProgress';

function Streams(){
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/streams');
            let dataArray = result.data.data;
            let gameIDs = dataArray.map(streams => {
                return streams.game_id;
            });

            let baseURL = 'https://api.twitch.tv/helix/games?'
            let queryParams = '';
            gameIDs.map(id => {
                return queryParams = queryParams + `id=${id}&`
            })

            let finalURL = baseURL + queryParams;
            let gameNames = await api.get(finalURL);
            let gameNameArray = gameNames.data.data;

            let finalArray = dataArray.map(stream => {
                stream.gameName = '';
                gameNameArray.map(name => {
                    if(stream.game_id === name.id){
                        return stream.gameName = name.name
                    }
                })

                let newURL = stream.thumbnail_url.replace("{width}", "500").replace("{height}", "500");
                stream.thumbnail_url = newURL;
                return stream;
            })

            setChannels(finalArray);
        }
        fetchData();
    }, []);

    //If the data has not yet been fetched, we show a loading spinner
    if(channels.length == 0){
        return (
            <div>
                <h1 className="games-header">Most Popular Streamers</h1>
                <div className="spinner">
                    <CircularProgress />
                </div>
            </div>
        );
    }else{
        return (
            <div>
                <h1 className="games-header">Most Popular Streamers</h1>
                <div className="row p-5">
                    {channels.map(channel => (
                        <PopularStreamCard key={channel.id} channel={channel} />
                    ))}
                </div>
            </div>
        );
    }


}

export default Streams;