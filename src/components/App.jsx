import React, { Component } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import 'index.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // goodFeedback = () => {
  //   this.setState(prevState => {
  //     return { good: prevState.good + 1 };
  //   });
  // };

  // neutralFeedback = () => {
  //   this.setState(prevState => {
  //     return { neutral: prevState.neutral + 1 };
  //   });
  // };

  // badFeedback = () => {
  //   this.setState(prevState => {
  //     return { bad: prevState.bad + 1 };
  //   });
  // };

  // feedback = option => {
  //   this.setState(prevState => {
  //     return { [option]: prevState[option] + 1 };
  //   });
  // };

  onSetFeedback = evt => {
    const { name } = evt.currentTarget;
    // console.log(evt);
    // console.log(name);

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
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
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section
          title={'Please leave callback'}
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        >
          <FeedbackOptions
            options={Object.keys(this.state)}
            // options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.onSetFeedback}
            // onLeaveFeedback={[
            //   this.goodFeedback,
            //   this.neutralFeedback,
            //   this.badFeedback,
            // ]}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
