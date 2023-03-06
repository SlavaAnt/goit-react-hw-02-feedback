import React from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  // console.log(onLeaveFeedback);
  //   const { Good, Neutral, Bad } = options;

  return (
    <div className={css.feedbackBtnBox}>
      {options.map(option => {
        console.log(option);
        return (
          <button
            key={option}
            className={
              css.feedbackBtn

              // if ({ option } === "good"){ css.feedbackGoodBtn } else if ({option} === "bad"){css.feedbackNeutralBtn} else if ({option} === "bad"){css.feedbackBadBtn}
              //         switch (option) {
              //           case :
              // return {className=css.feedbackGoodBtn};
              // case "neutral" return {css.feedbackNeutralBtn}; case "bad" return {css.feedbackBadBtn}}
            }
            type="button"
            // onClick={() => onLeaveFeedback(option)}
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
//     <div className={css.feedbackBtnBox}>
//       <button
//         className={css.feedbackBtn}
//         type="button"
//         onClick={onLeaveFeedback[0]}
//       >
//         {options[0]}
//       </button>
//       <button
//         className={css.feedbackBtn}
//         type="button"
//         onClick={onLeaveFeedback[1]}
//       >
//         {options[1]}
//       </button>
//       <button
//         className={css.feedbackBtn}
//         type="button"
//         onClick={onLeaveFeedback[2]}
//       >
//         {options[2]}
//       </button>
//     </div>
//   );
// };
