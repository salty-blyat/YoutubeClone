import React from 'react';

export const GetViews = ({ view }) => {
  let formattedViews = '';

  if (view >= 1000000) {
    // If views are over 1 million, convert to millions (1M)
    formattedViews = `${(view / 1000000).toFixed(1)}M`;
  } else if (view >= 1000) {
    // If views are over 1000, convert to thousands (1k)
    formattedViews = `${(view / 1000).toFixed(1)}k`;
  } else {
    // Otherwise, just display the original view count
    formattedViews = view;
  }

  return <>{formattedViews}</>;
}
