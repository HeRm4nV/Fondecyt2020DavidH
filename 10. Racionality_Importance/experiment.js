/**
 * CSCN lab
/**
This document was made with test_maker
*/

onkeydown = function block_fkeys(event){
    var x = event.which || event.keyCode;
    if(x == 112 || x == 116){
        console.log("Blocked key");
        event.preventDefault();
        return false;
    }else{
        return;
    }
}

questions = [];    //final timeline

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Importancia de la Racionalidad</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Es importante para mí personalmente ser escéptico sobre las afirmaciones que no están respaldadas por evidencia.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_1'}
};
questions_experiment.push(question1);

var question2 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Es importante para mí personalmente ser racional y sensato incluso en discusiones acaloradas.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_2'}
};
questions_experiment.push(question2);

var question3 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Para mí es importante examinar personalmente las creencias tradicionales utilizando la lógica y la evidencia.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_3'}
};
questions_experiment.push(question3);

var question4 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Es importante para mí personalmente que pueda justificar mis creencias utilizando argumentos y pruebas racionales.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_4'}
};
questions_experiment.push(question4);

var question5 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Es importante para mí personalmente examinar críticamente mis creencias arraigadas.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_5'}
};
questions_experiment.push(question5);

var question6 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Para mí es importante ser una persona racional.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Racionality_Importance_6'}
};
questions_experiment.push(question6);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

if(window.innerWidth != screen.width || window.innerHeight != screen.height){
  questions.unshift({
    type: 'fullscreen',
    message: '<p>El experimento entrará en modo pantalla completa</p>',
    button_label: 'Full screen',
    delay_after: 0,
    fullscreen_mode: true
  });
}
