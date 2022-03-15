import React, { useState } from 'react';
import { FindInputForm } from '../../molecules';
import { Container, FindTypeContainer, IDType, PWType } from './styles';

function FindForm() {
  const [mode, setMode] = useState(true);
  return (
    <Container>
      <FindTypeContainer>
        <IDType onClick={() => setMode(true)} mode={mode}>
          아이디
        </IDType>
        <PWType onClick={() => setMode(false)} mode={mode}>
          비밀번호
        </PWType>
      </FindTypeContainer>
      <FindInputForm idMode={mode} />
    </Container>
  );
}

export default FindForm;
