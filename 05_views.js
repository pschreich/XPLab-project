// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator('intro',{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `Hallo und herzlich willkommen zu unserem Experiment über den Einfluss von Fremdsprachen auf unser geistiges Vorstellungsvermögen.
            <br />
            <br />
            In diesem Experiment werden Sie entweder in eine englische oder eine deutsche Gruppe eingeteilt und werden daraufhin in der jeweiligen Sprache
            versuchen sich verschiedene sensorische Stimulationen vorzustellen und diese Vorstellung bewerten. Sie sind in der Gruppe <strong>${coin}</strong>.
            `,
   buttonText: 'Mit dem Experiment anfangen'
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucions',
    title: 'Allgemeine Anleitung',
    text:  `Bevor wir mit dem Experiment anfangen wird es einen kurzen Probelauf geben.
            Wenn Sie in der Englisch Gruppe sind wird es einen kurzen Sprachtest geben, dabei wird Ihnen ein englisches Wort angezeigt und darunter zwei Möglichkeiten
            dieses zu übersetzen. Davon sollen Sie die richtige aussuchen.
            <br />
            <br />
            Anschliessend werden wir Ihnen fünf sensorische Stimulationen unterschiedlicher Art in Textform zeigen, welche Sie sich vorstellen sollen.
            Oben auf der Seite wird immer die Art von Stimulation, die Sie sich grade vorstellen wollen angezeigt, es gibt sieben verschiedene Möglichkeiten:
            <br />
            Visuell (Visual), Auditiv (Auditory), Geschmack (Gustatory), Fühlen (Tactile), Organisch (Organic), Kinästhetisch (Kinesthetic) und Geruch (Olfactory).
            <br />
            Danach sollen Sie diese Vorstellung bewerten, dazu gibt es eine Dropdown-Liste aus der Sie eine von sieben möglichen Antworten auswählen sollen.
            Wenn Sie in der englischen Gruppe sind wird es noch eine achte Antwortmöglichkeit geben, "I don't understand", mit der Sie
            uns zeigen können, dass Sie das Wort oder den Satz, den Sie sich vorstellen sollen nicht verstanden haben.
            Wenn Sie mit dem Probelauf fertig sind und auf "Weiter" klicken beginnt direkt danach das richtige Experiment.
            <br />
            <br />
            Wenn Sie bereit sind klicken Sie einfach auf "Los gehts, Sie werden dann automatisch zu dem Probelauf weitergeleitet.`,
    buttonText: 'Los gehts!'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator('post_test',{
    trials: 1,
    name: 'post_test',
    title: 'Zusatzinformationen',
    text: 'Die Beantwortung der folgenden Fragen ist optional, aber Ihre Antworten werden uns dabei helfen Ihre Resultate genauer zu anaylsieren.'

    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    // buttonText: 'Weiter',
    // age_question: 'Alter',
    // gender_question: 'Geschlecht',
    // gender_male: 'männlich',
    // gender_female: 'weiblich',
    // gender_other: 'divers',
    // edu_question: 'Höchster Bildungsabschluss',
    // edu_graduated_high_school: 'Abitur',
    // edu_graduated_college: 'Hochschulabschluss',
    // edu_higher_degree: 'Universitärer Abschluss',
    // languages_question: 'Muttersprache',
    // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    // comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thanks',
    title: 'Vielen Dank, dass Sie an diesem Experiment teilgenommen haben!',
    prolificConfirmText: 'Experiment beenden'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://babe-project.github.io/babe-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://babe-project.github.io/babe-docs/01_designing_experiments/01_template_views/#trial-views
*/


// Here, we initialize a normal forced_choice view

  const language = babeViews.view_generator('forced_choice', {
      // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
      trials: trial_info.forced_choice.length,
      // name should be identical to the variable name
      name: 'language',
      trial_type: 'language',
      data: _.shuffle(trial_info.forced_choice),
      buttonText: "Weiter"

  });

const dropdown_choice_1A = babeViews.view_generator('dropdown_choice', {
   // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.dropdown_choice_pe.length,
    //name should be identical to the variable name
    name: 'dropdown_choice_1A',
    trial_type: 'dropdown_choice_1A',
    data: _.shuffle(trial_info.dropdown_choice_pe),
    pause: 1000,
    buttonText: "Zum Experiment"


});

const dropdown_choice_1 = babeViews.view_generator('dropdown_choice', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.dropdown_choice_pd.length,
    // name should be identical to the variable name
    name: 'dropdown_choice_1',
    trial_type: 'dropdown_choice_1',
    data: _.shuffle(trial_info.dropdown_choice_pd),
    pause: 1000,
    buttonText: "Zum Experiment"

});

const dropdown_choice_2A = babeViews.view_generator('dropdown_choice', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.dropdown_choice.length,
    // name should be identical to the variable name
    name: 'dropdown_choice_2A',
    trial_type: 'dropdown_choice_2A',
    data: _.shuffle(trial_info.dropdown_choice),
    pause: 1000
  },

);

const dropdown_choice_2 = babeViews.view_generator('dropdown_choice', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trial_info.dropdown_choice_d.length,
    // name should be identical to the variable name
    name: 'dropdown_choice_2',
    trial_type: 'dropdown_choice_2',
    data: _.shuffle(trial_info.dropdown_choice_d),
    pause: 1000
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }

});
