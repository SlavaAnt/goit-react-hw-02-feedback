import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from './Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <div>
      <h2 className={css.title}>Statistic</h2>
      <div className={css.statisticsBox}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
