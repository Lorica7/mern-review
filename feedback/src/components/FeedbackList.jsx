import React from 'react';
import FeedItem from './feedItem';
import {useContext} from 'react';
import Spinner from './shared/Spinner';

import {motion, AnimatePresence} from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList () {
  const {feedback, isLoading} = useContext (FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p> No Feedback Yet</p>;
  } else {
    console.log (feedback);

    return isLoading
      ? <Spinner />
      : <div className="feedback-list">
          <AnimatePresence>
            {feedback.map (item => (
              <motion.div
                key={item.id}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
              >
                <FeedItem key={item.id} item={item} />

              </motion.div>
            ))}
          </AnimatePresence>
        </div>;
  }
}

export default FeedbackList;
