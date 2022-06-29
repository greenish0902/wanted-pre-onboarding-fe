import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FeedItem from './FeedItem';

const Feeds = () => {
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
    <ul>
      {data?.map((item, index) => (
        <FeedItem item={item} key={index} />
      ))}
    </ul>
  );
  s;
};

export default Feeds;
