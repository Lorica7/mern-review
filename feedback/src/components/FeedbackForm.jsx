import React from 'react';
import Card from './shared/Card.jsx';
import {useState} from 'react';
import Button from './shared/Button.jsx';
import RatingSelect from './Rating-select.jsx';

function FeedbackForm () {
  const [text, setText] = useState ('');
  const [rating, setRating] = useState (10);
  const [btnDisabled, setBtnDisabled] = useState (true);
  const [message, setMessage] = useState ('');

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled (true);
      setMessage (null);
    } else if (text !== '' && text.trim ().length <= 10) {
      setMessage ('Text must be at least 10 characters');
      setBtnDisabled (false);
    } else {
      setMessage (null);
      setBtnDisabled (false);
    }
    setText (e.target.value);
    console.log (text);
  };
  return (
    <Card>
      <form>
        <h2 className="rate">How would you rate your service? </h2>
        <RatingSelect select={rating => setRating (rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button className="send" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
