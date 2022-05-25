import React from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';

function FeedItem({item}) {
  return (
    <Card>

      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>

    </Card>
  );
}

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedItem;
