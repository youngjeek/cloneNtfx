const API_KEY = '128c2c0bd2432279d4e92ae5a3de5b39'; //9d58f50eea3bc0cebe233c422bbef69e';

const BASE_URL_YOUTUBE = 'https://www.youtube.com/embed'; //`/${youtubeId}?autoplay=1`
const BASE_PATH_KOBIS =
  'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key='; // `${key}&targetDt=${date}`  //const key= "f9a5e15b3b0e1e90e656e39bf714f0a3"

export interface IGetMovieResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}
interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const BASE_PATH_TMDB = 'https://api.themoviedb.org/3';
export function getNowMovie() {
  return fetch(
    `${BASE_PATH_TMDB}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=kr`
  ).then((res) => res.json());
}
