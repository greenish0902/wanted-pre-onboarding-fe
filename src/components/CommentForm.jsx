import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { RiChatSmile3Line } from 'react-icons/ri';

const CommentForm = memo((props) => {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const comment = event.target.inputBox.value;
      const username = localStorage.getItem('username').split('@')[0];
      if (!comment) return;
      props.onSubmit({ username, comment });
      event.target.reset();
    },
    [props]
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div className="comment-input">
        <div className="left">
          <RiChatSmile3Line />
          <input name="inputBox" type="text" placeholder="댓글달기..." />
        </div>
        <button>게시</button>
      </div>
    </FormContainer>
  );
});

CommentForm.displayName = 'CommentForm';
export default CommentForm;

const FormContainer = memo(styled.form`
  display: flex;
  flex-direction: column;

  .comment-input {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 24px;
    .left {
      width: 88%;
      display: flex;
      align-items: center;
      input {
        width: 100%;
        margin-left: 8px;
        &::placeholder {
          color: var(--color-dark-gray);
        }
      }
    }
    button {
      width: 12%;
      color: var(--color-blue);
      background-color: var(--color-white);
      text-align: right;
    }
  }
`);
