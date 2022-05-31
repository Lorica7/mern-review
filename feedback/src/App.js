import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import  FeedbackData  from './FeedbackData';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData );
  
  const deleteFeedback = id => {
  if (window.confirm ('Are you sure you want to delete?')) {
    setFeedback (feedback.filter (item => item.id !== id));
  }
};


  return (
    <>
      <Header text='Hello World' bgColor="blueviolet"/>
      <div className="container">
    < FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
          handleDelete={deleteFeedback}
        />
        
</div>
    </>
   
  )
}

export default App;
