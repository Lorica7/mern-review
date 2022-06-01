import React from 'react';
import Card from './shared/Card.jsx';
import {useState} from 'react';

function FeedbackForm () {
  const [text, setText] = useState ('');
  const handleTextChange = e => {
    setText (e.target.value);
    console.log (text);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service? </h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <button type="submit"> Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
