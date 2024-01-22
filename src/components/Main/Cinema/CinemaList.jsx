import { getAllMovies } from "../../../data/movies";
import CinemaCard from "./CinemaCard";

const CinemaList = () => {
  const movies = getAllMovies();

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies?.map((movie) => {
        return <CinemaCard key={movie?.id} movie={movie} />;
      })}
    </div>
  );
};

export default CinemaList;
