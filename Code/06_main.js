// In this file you initialize and configure your experiment using babeInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };
    if(coin === "English") {
      intro = introe
      instructions = instructionse
      after_practice = after_practicee
      post_test = post_teste
      thanks = thankse
      bridge = bridgee
      textbox = textboxe
    }
    if(coin === "Deutsch") {
      intro = introd
      instructions = instructionsd
      after_practice = after_practiced
      post_test = post_testd
      thanks = thanksd
      bridge = bridged
      textbox = textboxd
    }
    // calls babeInit
    // in debug mode this returns the babe-object, which you can access in the console of your browser
    // e.g. >> window.babe_monitor or window.babe_monitor.findNextView()
    // in all other modes null will be returned
    window.babe_monitor = babeInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,
            instructions,
            language,
            after_practice,
            //dropdown_choice_1A,
            bridge,
            //dropdown_choice_2A,
            post_test,
            textbox,
            thanks,
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://babe-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "pschreich@uni-osnabrueck.de",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                dropdown_choice_1A.name,
                dropdown_choice_2A.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        }
    });
});
