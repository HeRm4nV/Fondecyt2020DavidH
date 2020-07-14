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
    pages: ['<p><left><b><big>Cuestionario de bienestar espiritual</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. Siento amor por otras personas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Siento una relación personal con lo Divino / Dios.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Siento perdón hacia los demás.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Siento una conexión con la naturaleza.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. Siento un sentido de identidad.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Adoro al Divino / al Creador.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Siento asombro por una vista impresionante.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Siento confianza entre las personas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. Siento autoconciencia.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Siento unidad con la naturaleza.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11. Siento unidad con lo Divino / Dios.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. Siento armonía con el medio ambiente.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. Siento paz con lo Divino / Dios.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14. siento alegría en la vida.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15. Siento que la oración enriquece mi vida.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16. siento paz interior.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17. Siento respeto por los demás.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18. Siento sentido en la vida.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19. Siento amabilidad hacia otras personas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20. Siento una sensación de "magia" en el medio ambiente.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21. Siento una conexión entre mí y los demás.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22. Tengo una sensación de asombro en la naturaleza.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_22'}
};
questions_experiment.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23. Siento que vivo en armonía con los demás.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_23'}
};
questions_experiment.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>24. Me siento en armonía con la naturaleza.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_24'}
};
questions_experiment.push(question24);

var question25 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>25. siento fuerza interior.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_25'}
};
questions_experiment.push(question25);

var question26 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>26. Siento que tengo confianza en las personas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Muy Bajo", "Muy Alto"], button_label: "Siguiente",
  data: {trialid: 'Spiritual_Wellness_Questionnarie_26'}
};
questions_experiment.push(question26);

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
