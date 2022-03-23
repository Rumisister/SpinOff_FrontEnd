const emailRule = email => {
  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(email);
};

const phoneRule = phone => {
  const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
  return regExp.test(phone);
};

const birthRule = birth => {
  const regExp =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
  return regExp.test(birth);
};

const nameRule = name => {
  const regExp = /^[가-힣]{2,4}|[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
  return regExp.test(name);
};
export { emailRule, phoneRule, birthRule, nameRule };
