import { createContext, useMemo, useReducer } from "react";
import AnimeReducer from "./AnimeReducer";
import axios from "axios";
import { debounce } from "lodash";

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeHandler = useMemo(() => debounce(fetchAnime, 900), []);
  return (
    <AnimeContext.Provider
      value={{
        animeList: state.animeList,
        isLoading: state.loading,
        debounceChangeHandler,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
export default AnimeContext;
