import React from 'react';
import styled from 'styled-components';

const CommentItem = ({ username, comment }) => {
  return (
    <CommentItemContainer>
      <span className="username">{username}</span>
      <span className="comment">{comment}</span>
    </CommentItemContainer>
  );
};

export default CommentItem;

const CommentItemContainer = styled.li`
  margin: 8px 0;
  font-size: 12px;
  .username {
    margin-right: 4px;
  }
`;
