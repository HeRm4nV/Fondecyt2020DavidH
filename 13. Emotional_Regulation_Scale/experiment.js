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
    pages: ['<p><left><b><big>Escala de Regulación Emocional</big></b><br /><br>'+
    'Nos gustaría hacerle algunas preguntas sobre su vida emocional, en particular, <br> cómo usted controla (es decir, regula y maneja) sus emociones. Las siguientes <br> preguntas involucran dos aspectos distintos de su vida emocional. Una es su <br> experiencia emocional, o lo que sientes dentro. El otro es su expresión <br> emocional, o cómo usted demuestra sus emociones en la manera que usted <br> habla, gesto, o se comporta. Aunque algunas de las siguientes preguntas <br> pueden parecer similares entre sí, difieren de maneras importantes.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Cuando quiero sentir una emoción más positiva (como la alegría o la diversión), cambio lo que estoy pensando.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Mantengo mis emociones para mí mismo.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Cuando quiero sentir una emoción menos negativa (como tristeza o enojo), cambio lo que estoy pensando.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Cuando siento emociones positivas, tengo cuidado de no expresarlas.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Cuando me enfrento a una situación estresante, me hago pensar en ello de una manera que me ayuda a mantener la calma.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Controlo mis emociones al no expresarlas.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Cuando quiero sentir una emoción más positiva, cambio la forma en que estoy pensando en la situación.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Controlo mis emociones cambiando la forma en que pienso acerca de la situación en la que estoy.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Cuando estoy sintiendo emociones negativas, me aseguro de no expresarlas.</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Si quiero sentir una</div></br>", required: true, min: 1, max: 7, slider_width: 500, start: 4, step: 1, labels: ["Muy en desacuerdo", "Muy de acuerdo"], button_label: "Siguiente",
  data: {trialid: 'Emotional_Regulation_Scale_10'}
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
