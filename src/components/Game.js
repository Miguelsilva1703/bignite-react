import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = (name, released) => {
    return (
        <div>
            <h3>This is the game name:{name}</h3>
            <p>This is the released date: </p>
        </div>
    );
};

export default Game;
