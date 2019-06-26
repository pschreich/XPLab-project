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
if(coin === "English") {
  trials = english_version;
}
if(coin === "Deutsch") {
  trials = german_version;
};


const introe = babeViews.view_generator('intro',{
    trials: 1,
    name: 'introe',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    title: 'Welcome',
    text:   `Hello and welcome to our experiment on the influence of foreign langauges on our mental imagery!
            <br />
            <br />
            This experiment is part of the Experimental Psychology Lab course at the University of Osnabrück and any collected data will be handled <strong>anonymously</strong>
            and used solely for <strong>scientific purposes</strong>.
            <br / >
            <br / >
            In this experiment you will be put in an english or a german group and subsequently in the chosen language try to imagine
            different sensory stimulations and rate the vividness of the imagination. You are in the group <strong>${coin}</strong>.
            <br / >
            <br / >
            If you have any further questions you can write to pschreich@uos.de or ehrybinski@uos.de . `,
   buttonText: 'Begin the experiment'
});
const introd = babeViews.view_generator('intro',{
    trials: 1,
    name: 'introd',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    title: 'Willkommen',
    text:   `Hallo und herzlich willkommen zu unserem Experiment über den Einfluss von Fremdsprachen auf unser geistiges Vorstellungsvermögen!
            <br />
            <br />
            Dieses Experiment ist Teil des Experimental Psychology Lab Kurses der Universität Osnabrück und jegliche erhobene Daten werden <strong>anonym</strong> behandelt und zu rein
            <strong>wissenschaftlichen Zwecken</strong> verwendet.
            <br />
            <br / >
            In diesem Experiment werden Sie entweder in eine englische oder eine deutsche Gruppe eingeteilt und werden daraufhin in der jeweiligen Sprache
            versuchen sich verschiedene sensorische Stimulationen vorzustellen und diese Vorstellung bewerten. Sie sind in der Gruppe <strong>${coin}</strong>.
            <br / >
            <br / >
            Bei Nachfragen können Sie sich an pschreich@uos.de oder ehrybinski@uos.de wenden. `,
   buttonText: 'Mit dem Experiment anfangen'
});

// For most tasks, you need instructions views
const instructionse = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucionse',
    title: 'Instructions',
    text:  `Before we begin with the experiment we will have a short language test.
            You will be shown five different english words and below each word two possibilities to translate it.
            You are supposed to click on the correct one.
            <br />
            <br />
            When you are ready click on ”Let's go!" and you will be automatically redirected to the language test.`,
    buttonText: "Let's go!"
});
const instructionsd = babeViews.view_generator('instructions',{
    trials: 1,
    name: 'instrucionsd',
    title: 'Allgemeine Anleitung',
    text:  `Bevor wir mit dem Experiment anfangen wird es einen kurzen Sprachtest geben.
            Dabei werden Ihnen fünf verschiedene englische Wörter angezeigt und darunter jeweils zwei Möglichkeiten
            diese zu übersetzen. Davon sollen Sie die richtige aussuchen.
            <br />
            <br />
            Wenn Sie bereit sind klicken Sie einfach auf "Los gehts!", Sie werden dann automatisch zu dem Sprachtest weitergeleitet.`,
    buttonText: 'Los gehts!'
});

const after_practicee = babeViews.view_generator('instructions', {
  trials: 1,
  name: 'Start',
  title: 'Instructions',
  text: `You just finished the language test!
        Now  you will do a short practice run and afterwards the real experiment. In both we will show you five sensoric stimulations of different kind in textual form, which you are supposed to imagine.
          On the top of the page you will see the kind of stimulation, there are seven different kinds:
          <br />
          <br />
          <strong>Visual, Auditory, Gustatory, Tactile, Organic, Kinesthetic and Olfactory</strong>.
          <br />
          <br />
          Subsequently you are supposed to rate your mental image. For this there will be a dropdown-list where you can choose one out of seven options.
          There will be an additional eighth option ”Do not understand”, with this you can tell us that you did not comprehend the meaning of the word or sentence you are supposed to imagine.
          If you are ready to continue, click on "To the practice run".`,
  buttonText: 'To the practice run',
});
const after_practiced = babeViews.view_generator('instructions', {
  trials: 1,
  name: 'Start',
  title: 'Anweisungen',
  text: `Der Sprachtest ist nun fertig!
  Jetzt folgt ein kurzer Probelauf und danach das eigentliche Experiment. In beidem werden wir Ihnen fünf sensorische Stimulationen unterschiedlicher Art in Textform zeigen, welche Sie sich vorstellen sollen.
  Oben auf der Seite wird immer die Art von Stimulation angezeigt, es gibt sieben verschiedene Möglichkeiten:
  <br />
  <br />
  <strong>Visuell, Auditiv, Geschmack, Fühlen, Organisch, Kinästhetisch und Geruch</strong>.
  <br />
  <br />
  Danach sollen Sie diese Vorstellung bewerten. Dazu gibt es eine Dropdown-Liste aus der Sie eine von sieben möglichen Antworten auswählen sollen.
  Wenn Sie mit dem Probelauf fertig sind und auf "Weiter" klicken beginnt direkt danach das richtige Experiment.
  Wenn Sie bereit sind, klicken Sie auf "Zum Probelauf".`,
  buttonText: 'Zum Probelauf',
});
// In the post test questionnaire you can ask your participants addtional questions

const bridgee = babeViews.view_generator('instructions', {
  trials: 1,
  name: 'bridge',
  title: '',
  text: `<br />
        <br />
        <br />
        <br />
        The practice run is finished! When you are ready click on "Next" and you will start the experiment. `
});

const bridged = babeViews.view_generator('instructions', {
  trials: 1,
  name: 'bridge',
  title: '',
  text: `<br />
        <br />
        <br />
        <br />
        Der Probelauf ist fertig! Wenn Sie bereit sind klicken Sie auf "Next" und Sie werden das Experiment starten.`
});

const post_teste = babeViews.view_generator('sentence_choice', {
  trials: 1,
  name: 'post_teste',
  title: 'Additional Information',
  trial_type: 'post_teste',
  data: trials.sentence_choice,

});
const post_testd = babeViews.view_generator('sentence_choice', {
  trials: 1,
  name: 'post_testd',
  title: 'Zusatzinformationen',
  trial_type: 'post_testd',
  data: trials.sentence_choice,

});

const textboxe = babeViews.view_generator('textbox_input', {
  trials: 1,
  name: 'textboxe',
  title: 'Additional Information',
  trial_type: 'textboxe',
  data: trials.textbox_input,
});

const textboxd = babeViews.view_generator('textbox_input', {
  trials: 1,
  name: 'textboxd',
  title: 'Zusatzinformationen',
  trial_type: 'textboxe',
  data: trials.textbox_input,
});
// The 'thanks' view is crucial; never delete it; it submits the results!
const thankse = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thankse',
    title: 'Thank you for participating in this experiment!',
    prolificConfirmText: 'End experiment'
});
const thanksd = babeViews.view_generator('thanks', {
    trials: 1,
    name: 'thanksd',
    title: 'Vielen Dank, dass Sie an diesem Experiment teilgenommen haben!',
    prolificConfirmText: 'Experiment beenden'
});

const language = babeViews.view_generator('forced_choice', {
      // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value

      trials: english_version.forced_choice.length,
      // name should be identical to the variable name
      name: 'language',
      trial_type: 'language',
      data: _.shuffle(english_version.forced_choice),
      buttonText: "Weiter",
      pause: 1000

  });

const dropdown_choice_1A = babeViews.view_generator('dropdown_choice', {
   // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trials.dropdown_choice_p.length,
    //name should be identical to the variable name
    name: 'dropdown_choice_1A',
    trial_type: 'dropdown_choice_1A',
    data: _.shuffle(trials.dropdown_choice_p),
    pause: 1000,
});



const dropdown_choice_2A = babeViews.view_generator('dropdown_choice', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trials.dropdown_choice.length,
    // name should be identical to the variable name
    name: 'dropdown_choice_2A',
    trial_type: 'dropdown_choice_2A',
    data: _.shuffle(trials.dropdown_choice),
    pause: 1000
  },

);

/*const dropdown_choice_2 = babeViews.view_generator('dropdown_choice', {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: trials.dropdown_choice.length,
    // name should be identical to the variable name
    name: 'dropdown_choice_2',
    trial_type: 'dropdown_choice_2',
    data: _.shuffle(trials.dropdown_choice),
    pause: 1000
    // you can add custom functions at different stages through a view's life cycle
    // hook: {
    //     after_response_enabled: check_response
    // }

});*/
