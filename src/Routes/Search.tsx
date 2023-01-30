import react from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useHistory, useLocation } from 'react-router-dom';
import { IGetMovieTopRate, getSearchResult } from '../Api';
import { useQuery } from 'react-query';
import { makeImagePath } from '../utilities';
const Wrapper = styled.div`
  position: absolute;
  margin-top: 80px;
`;
const ImgBox = styled(motion.div)<{ bgimg: string }>`
  height: 200px;
  width: 340px;
  margin: 10px;
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
`;
const ImgBoxHover = styled(motion.div)`
  padding: 2px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 80%);
  opacity: 0;
  position: absolute;
  width: 100%;
  y: -80px;
  bottom: 0;
  h3 {
    text-align: center;
    font-size: 13px;
  }
`;

//variats~~~
const boxVariants = {
  initial: { scale: 1 },
  hover: { x: 50, scale: 1.3, transition: { delay: 0.5 } },
};
const infoVariants = {
  hover: { opacity: 1, transition: { delay: 1, duration: 1 } },
};
function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');
  const { data: searchingData } = useQuery<IGetMovieTopRate>(
    ['search', 'searchData'],
    () => getSearchResult(keyword as string)
  );
  const navigate = useHistory();
  const onBoxClicked = (movieId: number) => {
    //세부페이지 이동 navigate.push(`/detail/${movieId}`);
  };

  return (
    <Wrapper>
      {searchingData?.results.map((searchData) => (
        <div>
          <ImgBox
            layoutId={searchData.id + ''}
            key={searchData.id}
            onClick={() => onBoxClicked(searchData.id)}
            bgimg={makeImagePath(searchData.backdrop_path, 'w500')}
            variants={boxVariants}
            whileHover="hover"
            initial
          >
            <ImgBoxHover variants={infoVariants}>
              <h3>{searchData.title}</h3>
            </ImgBoxHover>
          </ImgBox>
          <div>평점,트레일러,상세페이지</div>
          <button></button>
        </div>
      ))}
    </Wrapper>
  );
}
export default Search;
