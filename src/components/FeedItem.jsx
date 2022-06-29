import React, { useState } from 'react';
import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';
import styled from 'styled-components';

import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

const FeedItem = ({ item }) => {
  const [comments, setComments] = useState([]);
  // item?.image?.onload &&
  const handleNewSubmit = (data) => {
    setComments((comments) => [...comments, { ...data }]);
  };

  return (
    <ItemContainer>
      <div className="box top">
        <div className="box left">
          <img src={item.profileImg} alt={item.username} />
          <span className="username">{item.username}</span>
        </div>
        <FiMoreHorizontal />
      </div>
      <img src={item.img} alt="main image" className="mainImg" />
      <div className="box icons">
        <div className="left">
          <FiHeart />
          <FiMessageCircle />
          <FiSend />
        </div>
        <div className="right">
          <FiBookmark />
        </div>
      </div>
      <div className="box">
        {/* <span className="username">{item.username}</span> */}
        <span className="like">좋아요 {(item.like * 1).toLocaleString()}개</span>
      </div>
      {comments.length > 0 && (
        <ul className="box comments">
          {comments?.map((item, index) => (
            <CommentItem username={item.username} comment={item.comment} key={index} />
          ))}
        </ul>
      )}
      <CommentForm onSubmit={handleNewSubmit} />
    </ItemContainer>
  );
};

export default FeedItem;

const ItemContainer = styled.li`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  border: 0.5px solid var(--color-text-gray);
  background-color: var(--color-white);
  &:first-child {
    border-top: 0;
  }

  .box {
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.top {
      height: 64px;
      .left {
        padding: 0;
        img {
          margin-right: 12px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }
    }

    &.icons {
      font-size: 20px;
      * {
        margin-right: 8px;
        &:last-child {
          margin-right: 0;
        }
      }
    }

    &.comments {
      align-items: baseline;
      flex-direction: column;
    }
  }

  .mainImg {
    object-fit: cover;
  }

  .username,
  .like {
    font-weight: 600;
  }
`;
