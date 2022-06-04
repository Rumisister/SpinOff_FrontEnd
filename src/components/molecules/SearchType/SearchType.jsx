import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  DropDownMenu,
  DropDownMenuContainer,
  Icon,
  TypeContainer,
} from './styles';
import {
  allType,
  collectionType,
  memberType,
  movieType,
} from '../../../store/SearchFilter/action';
import { useDispatch, useSelector } from 'react-redux';

const lists = [
  { type: 'all', title: 'ALL', setType: allType },
  { type: 'collection', title: '컬렉션', setType: collectionType },
  { type: 'member', title: '큐레이터', setType: memberType },
  { type: 'movie', title: '영화', setType: movieType },
];
const mappingTitle = {
  all: 'ALL',
  collection: '컬렉션',
  member: '큐레이터',
  movie: '영화',
};
function SearchType() {
  const [show, setShow] = useState(false);
  const TypeEl = useRef(null);
  const type = useSelector(state => state.searchFilterReducer);
  const dispatch = useDispatch();
  const handleClickedOutside = ({ target }) => {
    setShow(prev => {
      if (prev && !TypeEl.current.contains(target)) return false;
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
    <Container ref={TypeEl}>
      <TypeContainer>
        {mappingTitle[type]}
        <Icon onClick={() => setShow(prev => !prev)} />
      </TypeContainer>
      {show ? (
        <DropDownMenuContainer>
          {lists.map((list, idx) => {
            return (
              <DropDownMenu
                selected={type === list.type}
                key={idx}
                onClick={() => {
                  dispatch(list.setType());
                  setShow(prev => !prev);
                }}
              >
                {list.title}
              </DropDownMenu>
            );
          })}
        </DropDownMenuContainer>
      ) : null}
    </Container>
  );
}

export default SearchType;
