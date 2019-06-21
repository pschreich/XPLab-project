// In this file you can create your own custom view templates


// A view template is a function that returns a view,
// this functions gets some config (e.g. trial_data, name, etc.) information as input
// A view is an object, that has a name, CT (the counter of how many times this view occurred in the experiment),
// trials the maximum number of times this view is repeated
// and a render function, the render function gets CT and the babe-object as input
// and has to call babe.findNextView() eventually to proceed to the next view (or the next trial in this view),
// if it is an trial view it also makes sense to call babe.trial_data.push(trial_data) to save the trial information
const answer_container_generators = {
    custom_dropdown: function(config) {
      const view = {
        name: config.name,
        CT: 0,
        trials: config.trials,
        render: function(CT, babe) {
          const question_left_part =
              config.data[CT].question_left_part === undefined ? "" : config.data[CT].question_left_part;
          const question_right_part =
              config.data[CT].question_right_part === undefined ? "" : config.data[CT].question_right_part;
          const option1 = config.data[CT].option1;
          const option2 = config.data[CT].option2;
          const option3 = config.data[CT].option3;
          const option4 = config.data[CT].option4;
          const option5 = config.data[CT].option5;
          const option6 = config.data[CT].option6;
          const option7 = config.data[CT].option7;
          const option8 = config.data[CT].option8;

          babe.trial_data.push(trial_data)
          babe.findNextView()
        }
      };
      return `<div class='babe-view-answer-container babe-response-dropdown'>
                  ${question_left_part}
                  <select id='response' name='answer'>
                      <option disabled selected></option>
                      <option value=${option1}>${option1}</option>
                      <option value=${option2}>${option2}</option>
                      <option value=${option3}>${option3}</option>
                      <option value=${option4}>${option4}</option>
                      <option value=${option5}>${option5}</option>
                      <option value=${option6}>${option6}</option>
                      <option value=${option7}>${option7}</option>
                      <option value=${option8}>${option8}</option>
                  </select>
                  ${question_right_part}
                  </p>
                  <button id='next' class='babe-view-button babe-nodisplay'>Next</button>
              </div>`;
    }
};
