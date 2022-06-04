import React from 'react';
import FeedItem from './feedItem';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function FeedbackList({feedback, handleDelete}) {
  if (!feedback || feedback.length === 0) {
    return <p> No Feedback Yet</p>;
  } else {
    console.log (feedback);

    // return (
    //   <div className="feedback-list">
    //     {feedback.map (function (item) {
    //       return (
    //         <FeedItem key={item.id} item={item} handleDelete={handleDelete} />
    //       );
    //     })}

    //   </div>
    // );
     return (
         <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedItem key={item.id} item={item} handleDelete={handleDelete} />;

          </motion.div>
        ))}
      </AnimatePresence>
    </div>
    )
  }
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf (
    PropTypes.shape ({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
