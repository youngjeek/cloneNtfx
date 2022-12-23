const BASE_PATH_MOVIE_IMG = 'https://image.tmdb.org/t/p';
export function makeImagePath(id: string, format?: string) {
  return `${BASE_PATH_MOVIE_IMG}/${format ? format : 'original'}/${id}`;
}

export function printStart(number: number) {
  const num = Math.round(number / 2);
  const starRating = ['⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

  return starRating[num];
}
