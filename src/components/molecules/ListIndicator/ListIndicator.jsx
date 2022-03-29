import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  discovery,
  following,
  toggleFilter,
} from '../../../store/ListFilter/action';
import { TextButton } from '../../atoms';
import { Container, Slider, Switch, Label, buttonStyle } from './styles';

function ListIndicator() {
  const listFilter = useSelector(state => state.listFilterReducer);
  const dispatch = useDispatch();

  const Toggle = () => {
    dispatch(toggleFilter());
  };
  const Discovery = () => {
    dispatch(discovery());
  };
  const Following = () => {
    dispatch(following());
  };
  return (
    <Container>
      <TextButton onClick={Following} Style={buttonStyle}>
        팔로잉
      </TextButton>
      <Label>
        <Switch type="checkbox" />
        <Slider onClick={Toggle} listType={listFilter} />
      </Label>
      <TextButton onClick={Discovery} Style={buttonStyle}>
        발견
      </TextButton>
    </Container>
  );
}

export default ListIndicator;
