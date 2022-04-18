import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import {
  Magnifier,
  SearchBarContainer,
  SearchBarModal,
  Contents,
  inputStyle,
} from './styles';
import { Input } from '../../atoms';
import { useInput, useFocus } from '../../../Hooks';
import { useDispatch } from 'react-redux';
import { SIGN_OUT } from '../../../store/Auth/action';

function SearchBar({ children }) {
  const searchHook = useInput('');
  const { focused, setFocused, onFocus } = useFocus(false);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const handleClickedOutside = ({ target }) => {
    setFocused(prev => {
      if (prev && !inputEl.current.contains(target)) return false;
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickedOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickedOutside);
    };
  }, []);

  return (
    <div ref={inputEl}>
      <SearchBarModal focused={focused}>
        <Contents>{children}</Contents>
      </SearchBarModal>
      <SearchBarContainer>
        <Magnifier
          onClick={() =>
            dispatch({
              type: SIGN_OUT,
            })
          }
        />
        <Input Style={inputStyle} {...searchHook} onFocus={onFocus} />
      </SearchBarContainer>
    </div>
  );
}

SearchBar.propTypes = {
  children: propTypes.array,
};
export default SearchBar;
