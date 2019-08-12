import React, { useState, useEffect } from 'react';
import api from '../api';
import StreamCard from './StreamCard';
import CircularProgress from '@material-ui/core/CircularProgress';

function GameStreams({match, location}){
    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get(`https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`)
            let dataArray = result.data.data;
            let finalArray = dataArray.map(stream => {
                let newURL = stream.thumbnail_url.replace('{width}', '500').replace('{height}', '500');
                stream.thumbnail_url = newURL;
                return stream;
            });

            //We loop the array adding all the viewers of each stream
            //To get the total viewers of a certain game
            let totalViewers = finalArray.reduce((acc, val) => {
                return acc + val.viewer_count;
            }, 0);

            setViewers(totalViewers.toLocaleString());
            setStreamData(finalArray);
        }

        fetchData();
    }, []);

    if(streamData.length == 0){
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
                <h1 className="text-center mt-4">{match.params.id} Streams</h1>
                <h3 className="text-center">
                    <strong className="text-primary">{viewers}</strong> people watching {match.params.id}
                </h3>
                <div className="row p-5">
                    {streamData.map(stream => (
                        <StreamCard key={stream.id} stream={stream} />
                    ))}
                </div>
            </div>
        );
    }
}

export default GameStreams;