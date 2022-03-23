const idRule = id => {
  const regexp = /^[a-zA-Z0-9._/]{6,12}$/g;
  return regexp.test(id);
};

const pwRule = pw => {
  console.log(pw);
  const regexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'"<>{}[\]\\/])[A-Za-z\d`~!@#$%^&*()_|+\-=?;:'"<>{}[\]\\/]{8,100}$/;

  return regexp.test(pw);
};
const nickNameRule = nickName => {
  const regexp = /^[a-zA-Zㄱ-힣0-9_,.]{2,8}$/;
  return regexp.test(nickName);
};

const AgreementRule = Agreement => {
  return Agreement;
};

export { idRule, pwRule, nickNameRule, AgreementRule };
