import React from 'react';

function FeedbackList({feedback}) {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  } else {
    console.log (feedback);
    return <div>FeedbackList</div>;
  }
}

export default FeedbackList;
