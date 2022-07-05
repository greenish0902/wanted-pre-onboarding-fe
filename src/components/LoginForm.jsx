import React, { useState, useRef, useEffect, memo, useCallback, useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../utils/UserContextProvider';
import RegexHelper from '../libs/RegexHelper';

const LoginForm = memo(() => {
  const formRef = useRef(null);
  const { signin } = useContext(UserContext);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    id: '',
    password: '',
  });

  // 유효성 검사
  const validityCheck = useCallback(
    (event) => {
      const field = event.target;
      if (field.value === data[field.name]) return;
      const regexHelper = new RegexHelper();
      try {
        switch (field.name) {
          case 'id':
            regexHelper.email(field, '이메일 주소를 다시 확인해주세요.');
            break;
          case 'password':
            regexHelper.password(field, '대문자, 숫자, 특수문자 포함 8자리 이상을 사용하세요.');
            break;
        }
        event.target.style.border = '1px solid var(--color-text-gray)';
        setData((prev) => ({ ...prev, [field.name]: field.value }));
      } catch (error) {
        console.error(error);
        event.target.style.border = '1px solid var(--color-red)';
      }
    },
    [data]
  );

  // 로그인
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (!data.id || !data.password) return;
      signin(data.id);
      formRef.current.reset();
    },
    [data]
  );

  useEffect(() => {
    if (!(data.id && data.password)) return;
    setDone(() => true);
  }, [data]);

  return (
    <FormWrapper ref={formRef} onSubmit={handleSubmit} done={done}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
        alt="instagram"
        height="48px"
      />
      <div className="box">
        <div className="inputs" onBlur={validityCheck}>
          <input name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input name="password" type="password" placeholder="비밀번호" autoComplete="off" />
        </div>
        <button>로그인</button>
      </div>
    </FormWrapper>
  );
});

LoginForm.displayName = 'LoginForm';
export default LoginForm;

const FormWrapper = memo(styled.form`
  padding: 24px;
  width: 360px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid var(--color-text-gray);

  .box {
    padding: 0 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    * {
      width: 100%;
      margin: 4px 0;
      padding: 8px;
      border-radius: 4px;
    }

    .inputs {
      padding: 0;
      input {
        color: var(--color-black);
        background-color: var(--color-light-gray);
        border: 1px solid var(--color-text-gray);
        &::placeholder {
          color: var(--color-text-gray);
        }
      }
    }

    button {
      cursor: pointer;
      margin-top: 24px;
      font-weight: 500;
      color: var(--color-white);
      pointer-events: ${(props) => (props.done ? 'auto' : 'none')};
      background-color: ${(props) => (props.done ? 'var(--color-blue)' : 'var(--color-light-blue)')};
    }
  }
`);
