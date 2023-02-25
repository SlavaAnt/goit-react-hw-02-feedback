import React from 'react';
import FeedbackWidget from 'components/FeedbackWidget/FeedbackWidget';
import 'index.css';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackWidget initialValue={0} />
    </div>
  );
};
