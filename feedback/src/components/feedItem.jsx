import React from 'react';
import {useState} from 'react';
import Card from './shared/Card';

function FeedItem({item}) {
  let [rating, setRating] = useState (item.rating);

  const handleClick = prev => {
    setRating (prev => {
      return prev + 1;
    });
  };

  return (
    <div className="card">

      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedItem;
