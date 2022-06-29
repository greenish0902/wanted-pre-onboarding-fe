import React, { memo } from 'react';
import styled from 'styled-components';

const CommentItem = memo(({ username, comment }) => {
  return (
    <CommentItemContainer>
      <span className="username">{username}</span>
      <span className="comment">{comment}</span>
    </CommentItemContainer>
  );
});

CommentItem.displayName = 'CommentItem';
export default CommentItem;

const CommentItemContainer = memo(styled.li`
  margin: 8px 0;
  font-size: 12px;
  .username {
    margin-right: 4px;
  }
`);
