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
    pages: ['<p><left><b><big>Escala de creencias sobrenaturales</big></b><br />'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Existe un Dios todopoderoso, omnisciente y amoroso.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Existe un ser espiritual espiritual maligno, a quien podríamos llamar el Diablo.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Existen buenos seres espirituales personales, a quienes podríamos llamar ángeles.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Existen seres espirituales personales malvados, a quienes podríamos llamar demonios.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Los seres humanos tienen almas inmateriales e inmortales.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Hay un reino espiritual además del físico.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Algunas personas irán al cielo cuando mueran.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Algunas personas irán al infierno cuando mueran.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Los milagros, eventos divinamente causados que no tienen una explicación natural, pueden suceder y lo hacen.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Hay individuos que son mensajeros de Dios y / o pueden prever el futuro.</div></br>", required: true, min: -4, max: 4, slider_width: 500, start: 0, step: 1, labels: ["Totalmente en desacuerdo", "Totalmente de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Supernatural_Belief_10'}
};
questions_experiment.push(question10);

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
