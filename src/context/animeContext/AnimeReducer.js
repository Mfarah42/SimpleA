const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMES":
      return {
        ...state,
        animeList: action.payload,
        loading: false,
      };
    case "GET_ANIME":
      return {
        ...state,
        anime: action.payload,
        loading: false,
      };
    case "GET_ANIME_STATS":
      return {
        ...state,
        animeStats: action.payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default AnimeReducer;
