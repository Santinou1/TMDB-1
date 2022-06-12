import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { getMoviePost } from "../hooks/getMoviePost";
import { httpClient } from "../utils/httpClient";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoadgin] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoadgin(true);
    httpClient("/movie/" + movieId).then((data) => {
      setIsLoadgin(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return null;
  }

  const imgUrl = getMoviePost(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.row} ${styles.movieImg}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={`${styles.row} ${styles.movieDetails}`}>
        <p className={`${styles.firstP}`}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
