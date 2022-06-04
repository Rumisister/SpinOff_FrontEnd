import React, { useEffect, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { axios } from '../../../api';
import SearchBarRelatedHashTag from '../SearchBarRelatedHashTag';
import SearchBarRelatedCurator from '../SearchBarRelatedCurator';
import SearchBarRelatedAll from '../SearchBarRelatedAll';

function SearchBarRelated({ keyword }) {
  const componentMounted = useRef(true);
  const debouncer = useRef(null);
  const [contents, setContents] = useState([]);
  const requestRelated = async url => {
    try {
      const res = await axios({
        method: 'get',
        url,
        data: null,
        params: {
          length: 10,
        },
      });
      console.log(res);
      if (componentMounted.current) {
        setContents([...res.data.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    componentMounted.current = true;
    let url = '/api/search/related/';
    if (keyword[0] === '#') url += `hashtag/${keyword.slice(1)}`;
    else if (keyword[0] === '@') url += `member/${keyword.slice(1)}`;
    else url += `all/${keyword}`;
    console.log(url);
    if (debouncer.current) {
      clearTimeout(debouncer.current);
    }
    debouncer.current = setTimeout(() => {
      requestRelated(url);
    }, 200);
    return () => {
      componentMounted.current = false;
    };
  }, [keyword]);
  return (
    <>
      {keyword[0] === '#' ? (
        <SearchBarRelatedHashTag contents={contents} />
      ) : null}
      {keyword[0] === '@' ? (
        <SearchBarRelatedCurator contents={contents} />
      ) : null}
      {keyword[0] !== '#' && keyword[0] !== '@' ? (
        <SearchBarRelatedAll contents={contents} />
      ) : null}
    </>
  );
}

SearchBarRelated.propTypes = {
  keyword: propTypes.string,
};

export default SearchBarRelated;
