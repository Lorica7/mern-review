import React from 'react';
import {useState} from 'react';

function feedbackItem () {
  const [rating, setRating] = useState (7);
  const [text, setText] = useState ('This is an example of a feedback Item');

  return (
    <div className="card">
      <div className="card">feedback</div>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default feedbackItem;
