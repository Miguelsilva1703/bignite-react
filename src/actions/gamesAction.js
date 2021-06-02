import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api.js";

//ACTION CREATOR
export const loadGames = () => async (dispatch) => {
    //FETCH Axios
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingData.data.results,
        },
    });
};
