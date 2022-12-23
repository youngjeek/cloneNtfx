import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get('keyword');

  console.log(keyword);

  return (
    <>
      <div>
        SearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearchSearch
      </div>
    </>
  );
}
export default Search;
