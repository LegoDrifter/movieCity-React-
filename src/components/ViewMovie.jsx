import { useContext } from "react";
import Modal from "./Modal";
import MovieContext from "../store/MovieContext";
import starRating from "../assets/star.png";

export default function ViewMovie() {
  const { modal, closeModal, movieItem, addMovie, removeMovie } =
    useContext(MovieContext);

  function returnCast(array) {
    return array?.map((item) => {
      return <li key={item.name.id}>{item.name.nameText.text}</li>;
    });
  }

  function handleClick() {
    addMovie(movieItem);
  }

  return (
    <Modal open={modal === "movieView" ? true : false}>
      {modal === "movieView" && (
        <div className="rounded-lg bg-gradient-to-r from-slate-900 to-gray-400 pb-4 w-[380px] h-auto text-white md:w-[600px] ">
          <div className="pl-2 pt-2 flex flex-col flex-wrap md:flex-row">
            <h1 className="text-3xl">{movieItem.titleText.text} </h1>
            <div className="flex gap-2 md:pt-2 pl-2">
              <p>{movieItem.releaseYear?.year}</p>
              <p>{`${movieItem.runtime?.seconds / 60}m`}</p>
            </div>
          </div>
          <div className="mt-2  flex">
            <img
              src={movieItem.primaryImage?.url}
              className="w-[220px] h-[275px] hidden md:block"
            />
            <iframe
              className="w-[400px] h-[275px]"
              src={movieItem.trailer}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="px-2 py-2 mt-3 flex">
            <img
              src={movieItem.primaryImage?.url}
              className="w-[140px] h-[150px] md:hidden "
            />
            <div className="flex flex-col">
              <ul className="flex flex-wrap gap-2  justify-center ">
                {movieItem.genres?.genres.map((genre) => {
                  return (
                    <li
                      key={genre.id}
                      className="text-sm  bg-stone-500 px-1 rounded-md"
                    >
                      {genre.text}
                    </li>
                  );
                })}
              </ul>
              <p className="pl-2 mt-1 text-sm md:text-base">
                {movieItem.plot?.plotText.plainText}
              </p>
            </div>
          </div>
          <div className="flex justify-evenly">
            <p className="flex">
              <img
                src={starRating}
                alt="star rating"
                className="mt-1 mr-1 h-4 w-4"
              />
              <span className="font-bold">
                {movieItem.ratingsSummary?.aggregateRating}
              </span>
              /10
            </p>
            <p>{movieItem.ratingsSummary?.voteCount}K</p>
            <p>{movieItem.meterRanking?.currentRank}</p>
          </div>
          <div className="mt-2 pl-2 flex-col">
            <p>
              <span className="font-bold">Director: </span>
              {movieItem?.directors?.[0]?.credits[0]?.name.nameText.text}
            </p>
            <ul className="flex flex-wrap gap-1">
              <p className="font-bold">Writers:</p>
              {returnCast(movieItem?.writers?.[0]?.credits)}
            </ul>
            <p className="font-bold">Stars:</p>
            <ul className="flex flex-wrap gap-1 md:justify-evenly">
              {movieItem?.principalCast?.[0]?.credits?.map((actor) => {
                return (
                  <li key={actor.name.id} className="text-center">
                    <img
                      src={actor.name.primaryImage.url}
                      className="hidden w-[120px] h-[120px] rounded-full md:block"
                    />
                    <p>{actor.name.nameText.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" mt-4 flex gap-2 justify-center">
            <button
              onClick={handleClick}
              className="bg-yellow-600  px-1 py-1  rounded-md text-black font-bold hover:bg-yellow-500"
            >
              Add to Watchlist
            </button>
            <button
              onClick={closeModal}
              className="font-bold hover:text-stone-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
