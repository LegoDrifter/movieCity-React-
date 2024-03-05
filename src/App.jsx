import Header from "./components/Header";
import Movies from "./components/Movies";
import ViewMovie from "./components/ViewMovie";
import Watchlist from "./components/WatchList";
import { MovieContextProvider } from "./store/MovieContext";

function App() {
  return (
    <MovieContextProvider>
      <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-cyan-400">
        <Header />
        <ViewMovie />
        <Watchlist />
        <Movies />
      </div>
    </MovieContextProvider>
  );
}

export default App;
