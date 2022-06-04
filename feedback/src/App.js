import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackData from './FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid'
import AboutPage from "./Pages/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData );
  
  const deleteFeedback = id => {
  if (window.confirm ('Are you sure you want to delete?')) {
    setFeedback (feedback.filter (item => item.id !== id));
  }
  };
  
  const addFeedback = (newFeedback) => {
    const newId = uuidv4();
    newFeedback.id = newId
    feedback.push(newFeedback)
    setFeedback(feedback)
    console.log (feedback); 
  }


  return (
    
      <Router>
      <Header text='Hello World' bgColor="blueviolet"/>
      <div className="container">
        <Routes>
          <Route exact path='/' element={
            <>
            <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback} />
              </>
        }>
        
          </Route>
          <Route path='/about' element={<AboutPage/>} /> 
          </Routes>
      </div>
    
   </Router>
  )
}

export default App;
