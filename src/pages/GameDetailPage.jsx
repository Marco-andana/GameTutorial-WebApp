import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import AutoPlayVideo from '../components/AutoPlayVideo'
import { getGameById, getGameData } from '../utils/game-data';
import GameDetailInfo from '../components/GameDetailInfo';

const GameDetailPage = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const gameData = getGameById(id);
        setGame(gameData);
    }, [id]);

    if (!game) {
        return <div>Loading...</div>;
    }

  return (
    <div>
      <AutoPlayVideo trailer={game.trailer} />
      <GameDetailInfo image={game.url} title={game.title} desc={game.description} webLink={game.webLink} download={game.download} />
    </div>
  )
}

export default GameDetailPage
