import Modal from "./Modal";
import MovieContext from "../store/MovieContext";
import WatchListItem from "./WatchListItem";
import { useContext } from "react";

export default function Watchlist() {
  const { watchListItems, modal, closeModal } = useContext(MovieContext);

  return (
    <Modal open={modal === "watchlist" ? true : false}>
      <div className="bg-stone-800 w-[400px] h-auto text-white">
        <div className="pl-2 pt-2">
          <h1>Your WatchList</h1>
          <p>{watchListItems.length} items</p>
        </div>

        <ul className="flex flex-col">
          {watchListItems.map((wItem) => {
            return <WatchListItem key={wItem.id} item={wItem} />;
          })}
        </ul>
        <button
          onClick={closeModal}
          className=" mt-2 mb-2 ml-2 text-black bg-white px-1 py-1 rounded-lg hover:bg-slate-400"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
