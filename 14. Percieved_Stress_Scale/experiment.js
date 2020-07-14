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
    pages: ['<p><left><b><big>Escala de estrés percibido</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. En el último mes, ¿con qué frecuencia ha estado afectado por algo que ha ocurrido inesperadamente?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. En el último mes, ¿con qué frecuencia se ha sentido incapaz de controlar las cosas importantes en su vida?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. En el último mes, ¿con qué frecuencia se ha sentido nervioso o estresado?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. En el último mes, ¿con qué frecuencia ha manejado con éxito los pequeños problemas irritantes de la vida?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. En el último mes, ¿con qué frecuencia ha sentido que ha afrontado efectivamente los cambios importantes que han estado ocurriendo en su vida?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. En el último mes, ¿con qué frecuencia ha estado seguro sobre su capacidad para manejar sus problemas personales?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. En el último mes, ¿con qué frecuencia ha sentido que las cosas le van bien?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. En el último mes, ¿con qué frecuencia ha sentido que no podía afrontar todas las cosas que tenía que hacer?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. En el último mes, ¿con qué frecuencia ha podido controlar las dificultades de su vida?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. En el último mes, ¿con qué frecuencia se ha sentido al control de todo?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>11. En el último mes, ¿con qué frecuencia ha estado enfadado porque las cosas que le han ocurrido estaban fuera de su control?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>12. En el último mes, ¿con qué frecuencia ha pensado sobre las cosas que le quedan por lograr?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>13. En el último mes, ¿con qué frecuencia ha podido controlar la forma de pasar el tiempo?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>14. En el último mes, ¿con qué frecuencia ha sentido que las dificultades se acumulan tanto que no puede superarlas?</div>", options: ['Nunca', 'Casi nunca', 'De vez en cuando', 'A menudo', 'Muy a menudo'], required: true, horizontal: true}],
  data: {trialid: 'Percieved_Stress_Scale_14'}
};
questions_experiment.push(question14);

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
