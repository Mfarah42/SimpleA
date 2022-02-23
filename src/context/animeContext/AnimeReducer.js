const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIME":
      return {
        ...state,
        animeList: action.payload,
        loading: false,
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
