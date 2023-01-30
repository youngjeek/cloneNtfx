import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';
import { makeImagePath } from '../utilities';
import { useQuery } from 'react-query';
import { IGetMovieTopRate, getTopRatedMovie } from '../Api';
const Slider = styled.div`
  position: relative;
  top: -250px;
`;
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 10px;
  top: 250px;
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
  opacity: 0;
  position: absolute;
  width: 100%;
  y: -20px;
  bottom: 0;
  h3 {
    text-align: center;
    font-size: 13px;
  }
`;

//variats~~~
const boxVariants = {
  initial: { scale: 1 },
  hover: { y: -80, scale: 1.3, transition: { delay: 0.5 } },
};
const infoVariants = {
  hover: { opacity: 1, transition: { delay: 1, duration: 1 } },
};

function MovieSliderSecond() {
  const navigate = useHistory();
  const onBoxClicked = (movieId: number) => {
    navigate.push(`/movies/${movieId}`);
  };
  const { data: topRate } = useQuery<IGetMovieTopRate>(
    ['movies', 'topRate'],
    getTopRatedMovie
  );
  console.log(topRate);
  return (
    <>
      <Slider>
        <Row>
          {topRate?.results.map((movie2) => (
            <Box
              layoutId={movie2.id + ''}
              key={movie2.id}
              onClick={() => onBoxClicked(movie2.id)}
              bgimg={makeImagePath(movie2.backdrop_path, 'w500')}
              variants={boxVariants}
              whileHover="hover"
              initial
            >
              <BoxHover variants={infoVariants}>
                <h3>{movie2.title}</h3>
              </BoxHover>
            </Box>
          ))}
        </Row>
      </Slider>
    </>
  );
}

export default MovieSliderSecond;
