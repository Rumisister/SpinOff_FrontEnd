import React from 'react';
import propTypes from 'prop-types';
import {
  posterStyle,
  RelatedContainer,
  RelatedIcon,
  RelatedTitle,
} from '../SearchBarRelatedAll/styles';
import { Poster } from '../../atoms';

const dummies = [
  {
    accountId: 'dlwlrma',
    id: 0,
    nickname: '아이유우',
    profileImg:
      'http://www.hidomin.com/news/photo/202105/453232_224470_4025.jpg',
  },
  {
    accountId: 'IU',
    id: 1,
    nickname: '아이유b',
    profileImg:
      'https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg',
  },
  {
    accountId: 'INOW',
    id: 2,
    nickname: '아이유c',
    profileImg:
      'https://file.mk.co.kr/meet/neds/2022/02/image_readtop_2022_159433_16452258234951534.jpg',
  },
  {
    accountId: 'babyou',
    id: 3,
    nickname: '아이유d',
    profileImg:
      'https://www.theguru.co.kr/data/photos/20210937/art_16316071303022_bf8378.jpg',
  },
  {
    accountId: 'dlwlrma22',
    id: 4,
    nickname: '아이유e',
    profileImg:
      'http://res.heraldm.com/content/image/2022/05/05/20220505000124_0.jpg',
  },
];
function SearchBarRelatedCurator({ contents }) {
  console.log(contents);
  return (
    <>
      {dummies.map(d => (
        <RelatedContainer key={d.id}>
          <RelatedIcon>
            <Poster
              src={
                d.profileImg ||
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
              }
              Style={posterStyle}
            />
          </RelatedIcon>
          <RelatedTitle>
            {d.nickname} (@{d.accountId})
          </RelatedTitle>
        </RelatedContainer>
      ))}
    </>
  );
}

SearchBarRelatedCurator.propTypes = {
  contents: propTypes.array,
};
export default SearchBarRelatedCurator;
