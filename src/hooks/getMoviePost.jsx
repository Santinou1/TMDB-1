import placeholder from "../utils/placeholder.jpg";

export function getMoviePost(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
