import React from 'react';
import FeedItem from './feedItem';

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  } else {
    console.log (feedback);
    const myArr = feedback.FeedbackData;
    console.log (myArr);
    return (
      <div className="feedback-list">
        {myArr.map (function (item) {
          return <FeedItem key={item.id} item={item} />;
        })}

      </div>
    );
  }
}

export default FeedbackList;
