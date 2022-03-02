import { createContext, useMemo, useReducer } from "react";
import AnimeReducer from "./AnimeReducer";
import axios from "axios";
import { debounce, result } from "lodash";

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const initialState = {
    animeList: [],
    anime: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(AnimeReducer, initialState);

  // Get Search Results
  const fetchAnimes = async (text) => {
    setLoading();
    const result = await axios(
      `https://api.jikan.moe/v4/anime?q=${text}&order_by=score&&sort=desc`
    );

    dispatch({
      type: "GET_ANIMES",
      payload: result.data.data,
    });
  };

  // Get Single Anime
  const fetchAnime = async (anime) => {
    setLoading();
    const result = await axios(`https://api.jikan.moe/v4/anime/${anime}`);
    if (result.status === 404) {
      window.location = "/notfound";
    } else {
      dispatch({
        type: "GET_ANIME",
        payload: result.data,
      });
    }
  };

  // Get Anime Images

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeHandler = useMemo(() => debounce(fetchAnimes, 900), []);
  return (
    <AnimeContext.Provider
      value={{
        animeList: state.animeList,
        isLoading: state.loading,
        anime: state.anime,
        debounceChangeHandler,
        fetchAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
export default AnimeContext;
