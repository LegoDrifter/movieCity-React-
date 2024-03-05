import { useContext, useRef } from "react";
import movieLogo from "../assets/movieCity.svg";
import glassIcon from "../assets/glass.png";
import { DEFAULT_URL } from "./config";
import MovieContext from "../store/MovieContext";

const alignStyle = "flex justify-center items-center";

export default function Header() {
  const inputRef = useRef("");
  const {
    changeUrl: setUrl,
    watchListItems,
    setModal,
  } = useContext(MovieContext);

  function handleClick() {
    setUrl(
      `https://moviesdatabase.p.rapidapi.com/titles/search/title/${inputRef.current.value}?exact=false&titleType=movie`
    );
  }

  function handleEscapeHatch() {
    setUrl(DEFAULT_URL);
  }

  function handleClickWatchList() {
    console.log("TEST");
    setModal("watchlist");
  }

  return (
    <div className="pt-9 flex flex-col gap-2 text-center justify-evenly  md:flex-row md:justify-evenly ">
      <div className={alignStyle}>
        <button onClick={handleEscapeHatch}>
          <img src={movieLogo} className="h-24 w-24" />
        </button>
      </div>
      <div className={alignStyle}>
        <input
          type="text"
          className="rounded-md placeholder:text-center max-h-6"
          placeholder="Search movie.."
          ref={inputRef}
        />
        <button onClick={handleClick}>
          <img src={glassIcon} className="ml-2 h-5 w-5" />
        </button>
      </div>

      <button
        onClick={handleClickWatchList}
        className={`${alignStyle} text-white text-1xl font-bold`}
      >
        Watchlist({watchListItems.length})
      </button>
    </div>
  );
}
