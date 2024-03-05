import { createContext, useReducer, useState } from "react";
import { DEFAULT_URL } from "../components/config";
import useHttp from "../hooks/useHttp";

const config = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "acc9e45244msh870851aae183348p153226jsned16ae73f124",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const MovieContext = createContext({
  url: "",
  data: {},
  isLoading: false,
  error: "",
  modal: "",
  movieItem: {},
  watchListItems: [],
  setMovieItem: () => {},
  closeModal: () => {},
  setModal: () => {},
  changeUrl: () => {},
  // addMovie: (movie) => {},
  // removeMovie: (movie) => {},
});

function watchListReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingMovieItemIndex = state.watchListItems.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedWatchList = [...state.watchListItems];
    if (existingMovieItemIndex === -1) {
      updatedWatchList.push(action.item);
    } else {
    }
    return { ...state, watchListItems: updatedWatchList };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingMovieItemIndex = state.watchListItems.findIndex(
      (item) => item.id === action.id
    );

    const updatedWatchList = [...state.watchListItems];

    if (existingMovieItemIndex !== -1) {
      updatedWatchList.splice(existingMovieItemIndex, 1);
    }
    return { ...state, watchListItems: updatedWatchList };
  }

  return state;
}

export function MovieContextProvider({ children }) {
  const [url, setUrl] = useState(DEFAULT_URL);
  const { data, isLoading, error } = useHttp(url, config, []);
  const [modal, setModal] = useState("");
  const [movieItem, setMovieItem] = useState({});
  const [watchList, dispatchWatchlistAction] = useReducer(watchListReducer, {
    watchListItems: [],
  });

  console.log(modal);

  function closeModal() {
    setModal("");
  }

  function addMovie(movie) {
    dispatchWatchlistAction({ type: "ADD_ITEM", item: movie });
  }

  function removeMovie(id) {
    dispatchWatchlistAction({ type: "REMOVE_ITEM", id: id });
  }

  const MovieContextValue = {
    url,
    changeUrl: setUrl,
    data,
    isLoading,
    error,
    setModal,
    modal,
    closeModal,
    setMovieItem,
    movieItem,
    watchListItems: watchList.watchListItems,
    addMovie,
    removeMovie,
  };

  return (
    <MovieContext.Provider value={MovieContextValue}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
