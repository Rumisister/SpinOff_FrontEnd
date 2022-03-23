import React from 'react';
import { useSelector } from 'react-redux';
import { MainPage } from '../pages';

function App() {
  const isSignIn = useSelector(state => state.authReducer.isSignIn);
  return <MainPage isSignIn={isSignIn} />;
}

export default App;
