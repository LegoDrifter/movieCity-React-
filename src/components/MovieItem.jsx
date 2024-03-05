import { useContext, useState } from "react";
import testPoster from "../assets//testPosters/memento.jpg";
import ViewMovie from "./ViewMovie";
import MovieContext from "../store/MovieContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MovieItem({ movieItem }) {
  const { setModal, setMovieItem, addMovie } = useContext(MovieContext);
  const [imageLoad, setImageLoad] = useState(false);

  const movieText =
    movieItem.titleText?.text.length > 22
      ? movieItem.titleText?.text.slice(0, 22) + "..."
      : movieItem.titleText?.text;
  if (movieItem.primaryImage === null) {
    console.log("YESHU");
  }
  let movieImage =
    movieItem.primaryImage === null ? testPoster : movieItem.primaryImage?.url;

  function handleOnClick() {
    console.log(movieItem);
    setModal("movieView");
    setMovieItem(movieItem);
  }

  return (
    <li key={movieItem.id} className=" rounded-md text-center text-white">
      <button onClick={handleOnClick}>
        <img
          src={movieImage}
          className="w-[180px] h-[260px] rounded-lg object-contain"
        />
        <p className=" font-bold">{movieText}</p>
        <p>{movieItem.releaseYear?.year}</p>
      </button>
    </li>
  );
}
