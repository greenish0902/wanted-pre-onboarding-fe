import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import FeedItem from './FeedItem';

const Feeds = memo(() => {
  const [data, setData] = useState([]);
  const url = 'http://localhost:3001/feeds';

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <FeedsWrapper>
      {data?.map((item, index) => (
        <FeedItem item={item} key={index} />
      ))}
    </FeedsWrapper>
  );
});

Feeds.displayName = 'Feeds';
export default Feeds;

const FeedsWrapper = memo(styled.ul`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  @media screen and (max-width: 480px) {
    max-width: 360px;
  }
`);
