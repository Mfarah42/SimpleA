import { createContext, useReducer } from "react";
import AnimeReducer from "./AnimeReducer";
import axios from "axios";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const initialState = {
    animeList: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  // Get Search Results

  const fetchAnime = async (text) => {
    setLoading();

    const result = await axios(
      `https://api.jikan.moe/v4/anime?q=${text}&order_by=score&&sort=desc`
    );

    dispatch({
      type: "GET_ANIME",
      payload: result.data.data,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <AnimeContext.Provider
      value={{
        animeList: state.animeList,
        isLoading: state.loading,
        fetchAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
export default AnimeContext;
