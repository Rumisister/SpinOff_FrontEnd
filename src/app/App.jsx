import React from 'react';
import { useSelector } from 'react-redux';
//import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Header } from '../components/organisms';
import {
  MainPage,
  MyPage,
  PostDetail,
  SearchAll,
  SearchCollection,
  SearchCurator,
  SearchMovie,
  SignInLoadingGoogle,
  SignInLoadingKakao,
  SignInLoadingNaver,
} from '../pages';

function App() {
  const isSignIn = useSelector(state => state.authReducer.isSignIn);
  return (
    <BrowserRouter>
      <Header isSignIn={isSignIn} />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/SignInLoading/naver" element={<SignInLoadingNaver />} />
        <Route path="/SignInLoading/google" element={<SignInLoadingGoogle />} />
        <Route path="/SignInLoading/kakao" element={<SignInLoadingKakao />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/all" element={<SearchAll />} />
        <Route path="/collection" element={<SearchCollection />} />
        <Route path="/member" element={<SearchCurator />} />
        <Route path="/movie" element={<SearchMovie />} />
        <Route path="/PostDetail" element={<PostDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
