import React, { useEffect } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
    //FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);
    //Get that data back
    const { popular, newGames, upcoming } = useSelector((state) => state.games);

    return (
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming &&
                    upcoming.map((game) => {
                        return <Game name={game.name} release={game.released} id={game.id} />;
                    })}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)``;
const Games = styled(motion.div)``;

export default Home;
