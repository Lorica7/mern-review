import React from 'react';
import {useState} from 'react';

function FeedbackItem () {
  let [rating, setRating] = useState (7);
  let [text, setText] = useState ('This is an example of a feedback Item');

  const handleClick = prev => {
    setRating (prev => {
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="card">feedback</div>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default FeedbackItem;
