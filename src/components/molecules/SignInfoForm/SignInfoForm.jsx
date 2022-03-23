import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { Input, NormalButton, TextButton } from '../../atoms';
import {
  Container,
  H1,
  InputListContainer,
  InputContainer,
  Span,
  inputStyle,
  inputStyle2,
  normalButtonStyle,
  Explanation,
  Explain,
  CheckBox,
  CheckBoxContainer,
  textButtonStyle,
  textButtonStyle2,
} from './styles';
import SignInfoHook from './SignInfoHook';
import { AgreementRule, idRule, nickNameRule, pwRule } from './regexp';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  idExsistingCheck,
  nickExsistingCheck,
  requestSignUp,
} from '../../../store/SignUp/action';

function SignInfoForm({ modeDispatch }) {
  const {
    idExist,
    nickExist,
    idCheckSuccess,
    nickCheckSuccess,
    checkedId,
    checkedNick,
    name,
    birth,
    auth,
    email,
    signUpSuccess,
  } = useSelector(
    state => ({
      idExist: state.signUpReducer.idExist,
      nickExist: state.signUpReducer.nickExist,
      idCheckSuccess: state.signUpReducer.idCheckSuccess,
      nickCheckSuccess: state.signUpReducer.nickCheckSuccess,
      checkedId: state.signUpReducer.inputs.id,
      checkedNick: state.signUpReducer.inputs.nickName,
      name: state.signUpReducer.inputs.name,
      birth: state.signUpReducer.inputs.birth,
      auth: state.signUpReducer.inputs.auth,
      email: state.signUpReducer.inputs.email,
      signUpSuccess: state.signUpReducer.signUpSuccess,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();
  const Hook = SignInfoHook();
  const {
    id,
    pw,
    pwCheck,
    nickName,
    firstAgreement,
    secondAgreement,
    idError,
    pwError,
    pwCheckError,
    nickNameError,
    firstAgreementError,
    secondAgreementError,
    idCheckError,
    nickNameCheckError,
  } = Hook.state;
  console.log(modeDispatch);

  useEffect(() => {
    if (signUpSuccess) {
      modeDispatch.onSuccessSignUp();
    }
    return () => {
      Hook.onReset();
    };
  }, [signUpSuccess]);

  const idCheckExist = () => {
    if (!idRule(id)) {
      Hook.setError('id');
      return;
    }
    dispatch(idExsistingCheck(id));
  };
  const nickNameCheckExist = () => {
    if (!nickNameRule(nickName)) {
      Hook.setError('nickName');
      return;
    }
    dispatch(nickExsistingCheck(nickName));
  };
  const onSubmit = () => {
    const chkType = [
      'id',
      'pw',
      'nickName',
      'firstAgreement',
      'secondAgreement',
    ];
    const chkValue = [id, pw, nickName, firstAgreement, secondAgreement];
    const chkFunc = [
      idRule,
      pwRule,
      nickNameRule,
      AgreementRule,
      AgreementRule,
    ];
    const result = chkValue
      .map((chk, idx) => {
        if (!chkFunc[idx](chk)) {
          console.log('비밀번호 확인 실패234');
          Hook.setError(chkType[idx]);
          return false;
        }
        if (chkType[idx] === 'pw' && pw !== pwCheck) {
          console.log('비밀번호 확인 실패');
          Hook.setError('pwCheck');
          return false;
        }
        if (chkType[idx] === 'pw' && pw === pwCheck) Hook.resetError('pwCheck');
        else Hook.resetError(chkType[idx]);
        return true;
      })
      .every(chk => chk);
    if (
      result &&
      !idExist &&
      !nickExist &&
      idCheckSuccess &&
      nickCheckSuccess
    ) {
      if (checkedId !== id) {
        Hook.setError('idCheck');
      } else if (checkedNick !== nickName) {
        Hook.setError('nickNameCheck');
      } else {
        dispatch(
          requestSignUp({
            id: checkedId,
            pw,
            auth,
            birth,
            email,
            name,
            nickName: checkedNick,
          }),
        );
      }
    }
  };
  console.log(idCheckSuccess + '*****');
  return (
    <Container>
      <H1>회원가입</H1>
      <InputListContainer>
        <Span>아이디</Span>
        <InputContainer>
          <Input
            Style={inputStyle2}
            name="id"
            value={id}
            onChange={Hook.onChange}
          />
          <TextButton Style={textButtonStyle} onClick={idCheckExist}>
            중복확인
          </TextButton>
        </InputContainer>
      </InputListContainer>
      <Explain Error={idCheckSuccess}>
        <Explanation>사용 가능한 아이디 입니다.</Explanation>
      </Explain>
      <Explain Error={idError}>
        <Explanation>입력이 올바르지 않습니다.</Explanation>
      </Explain>
      <Explain Error={idCheckError}>
        <Explanation>중복확인이 필요합니다.</Explanation>
      </Explain>
      <Explain Error={idExist}>
        <Explanation>이미 존재하는 아이디 입니다.</Explanation>
      </Explain>
      <Explain Explain={true}>
        <Explanation>*6~12자 영문, 숫자로 입력해주세요.</Explanation>
      </Explain>
      <InputListContainer>
        <Span>비밀번호</Span>
        <InputContainer>
          <Input
            type="password"
            Style={inputStyle}
            name="pw"
            value={pw}
            onChange={Hook.onChange}
          />
        </InputContainer>
      </InputListContainer>
      <Explain Error={pwError}>
        <Explanation>입력이 올바르지 않습니다.</Explanation>
      </Explain>
      <InputListContainer>
        <Span>
          비밀번호
          <br />
          확인
        </Span>
        <InputContainer>
          <Input
            type="password"
            Style={inputStyle}
            name="pwCheck"
            value={pwCheck}
            onChange={Hook.onChange}
          />
        </InputContainer>
      </InputListContainer>
      <Explain Error={pwCheckError}>
        <Explanation>비밀번호와 값이 다릅니다.</Explanation>
      </Explain>
      <Explain Explain={true}>
        <Explanation>
          *비밀번호는 영문, 숫자, 기호 중 한가지 이상을 조합하여 8자 이상으로
          입력해주세요
        </Explanation>
      </Explain>
      <InputListContainer>
        <Span>닉네임</Span>
        <InputContainer>
          <Input
            Style={inputStyle2}
            name="nickName"
            value={nickName}
            onChange={Hook.onChange}
          />
          <TextButton Style={textButtonStyle} onClick={nickNameCheckExist}>
            중복확인
          </TextButton>
        </InputContainer>
      </InputListContainer>
      <Explain Error={nickCheckSuccess}>
        <Explanation>사용 가능한 닉네임 입니다.</Explanation>
      </Explain>
      <Explain Error={nickNameError}>
        <Explanation>입력이 올바르지 않습니다.</Explanation>
      </Explain>
      <Explain Error={nickNameCheckError}>
        <Explanation>중복확인이 필요합니다.</Explanation>
      </Explain>
      <Explain Error={nickExist}>
        <Explanation>이미 존재하는 닉네임 입니다.</Explanation>
      </Explain>
      <Explain Explain={true}>
        <Explanation>*2-8자 이내로 입력해주세요</Explanation>
      </Explain>
      <CheckBoxContainer>
        <CheckBox checked={firstAgreement}>
          <Input
            type="checkbox"
            Style={{ display: 'none' }}
            name="firstAgreement"
            onChange={Hook.checkBoxChange}
          />
        </CheckBox>
        이용약관에 동의합니다.
        <TextButton Style={textButtonStyle2}>내용보기</TextButton>
      </CheckBoxContainer>
      <CheckBoxContainer>
        <CheckBox checked={secondAgreement}>
          <Input
            type="checkbox"
            Style={{ display: 'none' }}
            name="secondAgreement"
            onChange={Hook.checkBoxChange}
          />
        </CheckBox>
        개인정보 수입/이용에 동의합니다.
        <TextButton Style={textButtonStyle2}>내용보기</TextButton>
      </CheckBoxContainer>
      <Explain Error={firstAgreementError || secondAgreementError}>
        <Explanation>동의가 필요합니다.</Explanation>
      </Explain>
      <InputListContainer>
        <NormalButton Style={normalButtonStyle} onClick={onSubmit}>
          확인
        </NormalButton>
      </InputListContainer>
    </Container>
  );
}

SignInfoForm.propTypes = {
  isOpen: propTypes.bool,
  modeDispatch: propTypes.object,
};
export default SignInfoForm;
