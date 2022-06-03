import React from 'react';
import {FaTimes} from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedItem({item, handleDelete}) {
  return (
    <Card>

      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete (item.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>

    </Card>
  )
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedItem;
