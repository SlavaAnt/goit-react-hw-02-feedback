import React from 'react';
import css from './FeedbackWidget.module.css';

class FeedbackWidget extends React.Component {
  static defaultProps = { initialValue: 0 };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  goodFeedback = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralFeedback = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  badFeedback = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good !== 0) {
      return Math.round((this.state.good * 100) / this.countTotalFeedback());
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className={css.feedbackBox}>
        <h2 className={css.feedbackTitle}>Please leave callback</h2>
        <div className={css.feedbackBtnBox}>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={this.goodFeedback}
          >
            Good
          </button>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={this.neutralFeedback}
          >
            Neutral
          </button>
          <button
            className={css.feedbackBtn}
            type="button"
            onClick={this.badFeedback}
          >
            Bad
          </button>
        </div>
        <h2 className={css.feedbackTitle}>Statistic</h2>
        <div className={css.feedbackResultBox}>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
