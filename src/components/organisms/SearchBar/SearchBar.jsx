import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import { Magnifier, SearchBarContainer, inputStyle } from './styles';
import { Input } from '../../atoms';
import { useInput, useFocus } from '../../../Hooks';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_OUT } from '../../../store/Auth/action';
import { SearchBarModal, SearchType } from '../../molecules';
import { useNavigate } from 'react-router-dom';

function SearchBar({ isSignIn }) {
  const searchHook = useInput('');
  const history = useNavigate();
  const type = useSelector(state => state.searchFilterReducer);
  const { focused, setFocused, onFocus } = useFocus(false);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const handleClickedOutside = ({ target }) => {
    setFocused(prev => {
      if (prev && !inputEl.current.contains(target)) return false;
      return prev;
    });
  };
  const handleEnterDown = ({ key, target }) => {
    if (
      key === 'Enter' &&
      inputEl.current.contains(target) &&
      searchHook.value.length >= 2
    ) {
      let keyword = searchHook.value;
      if (searchHook.value[0] === '#' || searchHook.value[0] === '@')
        keyword = keyword.slice(1);
      setFocused(false);
      history(`/${type}/${keyword}`);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickedOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickedOutside);
    };
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleEnterDown);
    //setFocused(true);
    return () => {
      window.removeEventListener('keydown', handleEnterDown);
    };
  }, [type, searchHook.value]);
  return (
    <div ref={inputEl}>
      {focused ? (
        <SearchBarModal isSignIn={isSignIn} keyword={searchHook.value} />
      ) : null}
      <SearchBarContainer>
        <Magnifier
          onClick={() =>
            dispatch({
              type: SIGN_OUT,
            })
          }
        />
        <Input Style={inputStyle} {...searchHook} onFocus={onFocus} />
        <SearchType type={type} />
      </SearchBarContainer>
    </div>
  );
}

SearchBar.propTypes = {
  children: propTypes.array,
  isSignIn: propTypes.bool,
};
export default SearchBar;
