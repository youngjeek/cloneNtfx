import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getNowMovie, IGetMovieResult } from '../Api';
import styled from 'styled-components';
import { makeImagePath } from '../utilities';
import { motion, AnimatePresence } from 'framer-motion';
import { resourceLimits } from 'worker_threads';

const Wrapper = styled.div`
  background: rgb(0, 0, 0);
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
  top: -300px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  gap: 10px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgimg: string }>`
  height: 200px;
  width: 250px;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
  align-content: center;
  background-color: white;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const rowX = window.outerWidth;
const rowVariants = {
  hidden: {
    x: rowX,
  },
  visible: {
    x: 10,
  },
  exit: {
    x: -rowX,
    duration: 1,
  },
};
const boxVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2, transition: { delay: 0.5 } },
};

const offset = 6;

function Home() {
  const { data, isLoading } = useQuery<IGetMovieResult>(
    ['movies', 'nowPlaying'],
    getNowMovie
  );

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const ascIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Wrapper>
      <h1 style={{ display: 'none' }}>Movie</h1>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={ascIndex}
            bgimg={makeImagePath(data?.results[index].backdrop_path || '')}
          >
            <Title>{data?.results[index].title}</Title>
            <Overview>{data?.results[index].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: 'tween', duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      key={movie.id}
                      bgimg={makeImagePath(movie.backdrop_path, 'w500')}
                      variants={boxVariants}
                      whileHover="hover"
                      initial
                    >
                      {movie.title}
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
            <Row></Row>
            <Row></Row>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
