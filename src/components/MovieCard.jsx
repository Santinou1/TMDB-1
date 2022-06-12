import styles from "./MovieCard.module.css";
import { BrowserRouter as  Link } from "react-router-dom";
import { getMoviePost } from "../hooks/getMoviePost";
export function MovieCard({ movie }) {
  const imgUrl = getMoviePost(movie.poster_path, 300);

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imgUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}
