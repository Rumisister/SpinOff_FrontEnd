import React, { useCallback } from 'react';
import propTypes from 'prop-types';

import {
  Container,
  Content,
  ContentContainer,
  Date,
  DateContainer,
  ExternalLink,
  IconContainer,
  ShareDM,
} from './styles';
const a =
  '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트';

function PostDetailRightSide_Main({ contents }) {
  const makeDate = useCallback(() => {
    const date = new window.Date(contents?.createTime);
    console.log(date);
    console.log(date.toLocaleDateString().split('.'));
    let [year, month, day] = date.toLocaleDateString().split('.');
    year = year?.trim();
    month = month?.trim();
    day = day?.trim();
    if (month?.length === 1) month = '0' + month;
    if (day?.length === 1) day = '0' + day;
    return `${year}년 ${month}월 ${day}일`;
  }, [contents]);
  return (
    <Container>
      <ContentContainer>
        <Content>{a}</Content>
      </ContentContainer>
      <DateContainer>
        <Date>{makeDate()}</Date>
        <IconContainer>
          <ShareDM />
          <ExternalLink />
        </IconContainer>
      </DateContainer>
    </Container>
  );
}

PostDetailRightSide_Main.propTypes = {
  contents: propTypes.object,
};

export default PostDetailRightSide_Main;
