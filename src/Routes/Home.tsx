import { useQuery } from 'react-query';
import { useState } from 'react';
import {
  getLatestMovie,
  getNowMovie,
  getTopRatedMovie,
  IGetMovieResult,
} from '../Api';
import styled from 'styled-components';
import { makeImagePath, printStart } from '../utilities';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useHistory, useRouteMatch } from 'react-router-dom';
import MovieSliderSecond from '../Components/MovieSliderSecond';

const Wrapper = styled.div`
  background: rgb(0, 0, 0);
  overflow: hidden;
`;
const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Banner = styled(motion.div)<{ bgimg: string }>`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgimg});
  background-size: cover;
`;
const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 10px;
`;
const Overview = styled.p`
  width: 70vw;
`;
const Slider = styled.div`
  position: relative;
  top: -240px;
`;
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;
const Box = styled(motion.div)<{ bgimg: string }>`
  height: 200px;
  width: 240px;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:nth-child(6) {
    transform-origin: center right;
  }
`;
const BoxHover = styled(motion.div)`
  padding: 2px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 80%);
  opacity: 0; //투명투명
  position: absolute;
  width: 100%;
  y: -20px;
  bottom: 0;
  h3 {
    text-align: center;
    font-size: 13px;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  opacity: 0;
`;
const DetailBox = styled(motion.div)`
  position: absolute;
  width: 700px;
  height: 600px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.black.veryDark};
`;
const DetailBoxImg = styled.img`
  width: 700px;
  height: 400px;
`;
const DetailBoxHead = styled.div`
  div {
    position: relative;
    width: 100%;
    height: 80px;
    top: -80px;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(5, 5, 5, 1));
  }
  h3 {
    position: absolute;
    margin-left: 25px;
    width: 500px;
    top: 350px;
    font-size: 30px;
  }
  span {
    margin-right: 10px;
    position: relative;
    top: -100px;
    float: right;
    font-size: 20px;
  }
`;
const DetailBoxInfo = styled.div`
  position: absolute;
  top: 440px;
  width: 690px;
  height: 140px;
  margin-left: 10px;
  overflow: auto;
  font-size: 20px;
`;
//variats~~~
const rowX = window.outerWidth;
const rowVariants = {
  transition: { type: 'tween', duration: 0.5 },
  first: {
    x: rowX + 10,
  },
  visible: {
    x: 10,
  },
  exit: {
    x: -rowX - 10,
  },
};
const boxVariants = {
  initial: { scale: 1 },
  hover: { y: -50, scale: 1.3, transition: { delay: 0.5 } },
};
const infoVariants = {
  hover: { opacity: 1, transition: { delay: 1, duration: 1 } },
};
function Home() {
  const navigate = useHistory();
  const infoMovieMatch = useRouteMatch<{ movieId: string }>('/movies/:movieId');
  const { scrollY } = useScroll();
  const useMultipleQuery = () => {
    const upComming = useQuery<IGetMovieResult>(['upComming'], getNowMovie);
    const topRated = useQuery<IGetMovieResult>(['topRated'], getTopRatedMovie);
    const latest = useQuery<IGetMovieResult>(['latest'], getLatestMovie);
    return [upComming, topRated, latest];
  };
  const [
    { data: upComingMovies, isLoading: loadingUpcoming },
    { data: topRatedMovies, isLoading: loadingTopRated },
    { data: latestMovies, isLoading: loadingLatest },
  ] = useMultipleQuery();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  //메인배너 클릭시 아래 슬라이드에서 한꺼번에 6개씩 넘겨주기
  const offset = 7;
  const ascIndex = () => {
    if (upComingMovies) {
      clickBanner();
      const maxIndex = upComingMovies?.results.length;
      setIndex((prev) => (prev > 13 ? prev - maxIndex + 6 : prev + 6));
    }
  };
  const clickBanner = () => setLeaving((prev) => !prev);
  //영화슬라이드 중 한 개의 영화 클릭시
  const onBoxClicked = (movieId: number) => {
    navigate.push(`/movies/${movieId}`);
  };
  //오버레이 클릭시 영화 세부 팝업 닫기
  const onOverlayClicked = () => navigate.push('/');
  //클릭한 영화 아이디 받기
  const clickedMovie =
    infoMovieMatch?.params.movieId &&
    (upComingMovies?.results.find(
      (movie) => String(movie.id) === infoMovieMatch.params.movieId
    ) ||
      topRatedMovies?.results.find(
        (movie) => String(movie.id) === infoMovieMatch.params.movieId
      ) ||
      latestMovies?.results.find(
        (movie) => String(movie.id) === infoMovieMatch.params.movieId
      ));

  return (
    <Wrapper>
      <h1 style={{ display: 'none' }}>Movie</h1>
      {loadingUpcoming ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={ascIndex}
            bgimg={makeImagePath(
              upComingMovies?.results[index].backdrop_path || ''
            )}
          >
            <Title>{upComingMovies?.results[index].title}</Title>
            <Overview>{upComingMovies?.results[index].overview}</Overview>
          </Banner>
          <Slider>
            <Title style={{}}>UpComming</Title>
            <AnimatePresence initial={false}>
              <Row
                variants={rowVariants}
                initial="first"
                animate="visible"
                exit="exit"
                key={index}
              >
                {upComingMovies?.results
                  .slice(1)
                  .slice(index, index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ''}
                      key={movie.id}
                      onClick={() => onBoxClicked(movie.id)}
                      bgimg={makeImagePath(movie.backdrop_path, 'w500')}
                      variants={boxVariants}
                      whileHover="hover"
                      initial
                    >
                      <BoxHover variants={infoVariants}>
                        <h3>{movie.title}</h3>
                      </BoxHover>
                    </Box>
                  ))}
                {index + offset > 19
                  ? upComingMovies?.results
                      .slice(0, index - 11)
                      .map((movie) => (
                        <Box
                          layoutId={movie.id + ''}
                          key={movie.id}
                          onClick={() => onBoxClicked(movie.id)}
                          variants={boxVariants}
                          initial
                          whileHover="hover"
                          bgimg={makeImagePath(movie.backdrop_path, 'w500')}
                        >
                          <BoxHover variants={infoVariants}>
                            <h3>{movie.title}</h3>
                          </BoxHover>
                        </Box>
                      ))
                  : null}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
      {loadingTopRated ? (
        <Loader>Loading..</Loader>
      ) : (
        <>
          <Title style={{}}>Top Rate ⭐⭐⭐⭐⭐</Title>
          <MovieSliderSecond />
        </>
      )}

      {/* pop modal when click the movie*/}
      <AnimatePresence>
        {infoMovieMatch ? (
          <>
            <Overlay
              onClick={onOverlayClicked}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
            ></Overlay>
            <DetailBox
              layoutId={infoMovieMatch.params.movieId}
              style={{ top: scrollY.get() + 80 }}
            >
              {clickedMovie && (
                <>
                  <DetailBoxImg
                    src={makeImagePath(clickedMovie.backdrop_path)}
                  />
                  <DetailBoxHead>
                    <div></div>
                    <h3>{clickedMovie.original_title}</h3>
                    <span>{printStart(clickedMovie.vote_average)}</span>
                  </DetailBoxHead>

                  <DetailBoxInfo>{clickedMovie.overview}</DetailBoxInfo>
                </>
              )}
            </DetailBox>
          </>
        ) : null}
      </AnimatePresence>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Wrapper>
  );
}
export default Home;
