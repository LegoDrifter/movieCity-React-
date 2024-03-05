import { useContext } from "react";
import starRating from "../assets/star.png";
import MovieContext from "../store/MovieContext";

export default function WatchListItem({ item }) {
  const { removeMovie } = useContext(MovieContext);

  return (
    <li key={item.id} className="flex gap-2 px-2 py-2">
      <img
        src={item.primaryImage.url}
        className="w-[110px] h-[180px] rounded-md"
      />
      <div className="flex flex-col">
        <div className="flex gap-2">
          <p>{item.titleText.text}</p>
          <button className="text-xs" onClick={() => removeMovie(item.id)}>
            Remove
          </button>
        </div>
        <div className="flex gap-1 flex-wrap text-xs">
          <p>{item.releaseYear.year}</p>
          <p>{`${item.runtime?.seconds / 60}m`}</p>
          <p className="flex">
            <img
              src={starRating}
              alt="star rating"
              className="mt-1 mr-1 h-4 w-4"
            />
            <span className="font-bold">
              {item.ratingsSummary.aggregateRating}
            </span>
            /10
          </p>
        </div>
        <ul className="flex flex-wrap gap-1 text-xs">
          {item.genres.genres.map((genre) => {
            return (
              <li key={genre.id} className="bg-stone-700 px-1 rounded-md">
                {genre.text}
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-1 flex-wrap font-bold">
          {item.principalCast[0].credits.map((actor) => {
            return (
              <li key={actor.name.id} className="text-xs">
                <p>{actor.name.nameText.text}</p>
              </li>
            );
          })}
        </ul>
        <p className="text-xs">{item.plot.plotText.plainText}</p>
      </div>
    </li>
  );
}
