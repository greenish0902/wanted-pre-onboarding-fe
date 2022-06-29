import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import RegexHelper from '../libs/RegexHelper';

const LoginForm = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    id: '',
    password: '',
  });

  // 유효성 검사
  const validityCheck = (event) => {
    const field = event.target;
    const regexHelper = new RegexHelper();
    try {
      switch (field.name) {
        // 필드명에 따른 정규표현식 프로세스 수행
        case 'id':
          regexHelper.email(field, '이메일 주소를 다시 확인해주세요.');
          break;
        case 'password':
          regexHelper.password(field, '대문자, 숫자, 특수문자 포함 8자리 이상을 사용하세요.');
          break;
      }
      event.target.style.border = '1px solid var(--color-text-gray)';
      setData((data) => ({ ...data, [field.name]: field.value }));
    } catch (error) {
      console.error(error);
      event.target.style.border = '1px solid var(--color-red)';
    }
  };

  // 로그인
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!done) return;
    localStorage.setItem('username', data.id);
    formRef.current.reset();
    navigate('/home');
  };

  // 상태값 저장
  useEffect(() => {
    data.id && data.password && setDone(true);
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
        <button type="submit">로그인</button>
      </div>
    </FormWrapper>
  );
};

export default LoginForm;

const FormWrapper = styled.form`
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
        color: var(--color-text-gray);
        background-color: var(--color-light-gray);
        border: 1px solid var(--color-text-gray);
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
`;
