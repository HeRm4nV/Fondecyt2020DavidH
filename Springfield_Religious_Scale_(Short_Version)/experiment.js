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
    pages: ['<p><left><b><big>Actividades Religiosas Organizacionales (ORA)</big></b><br />'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. ¿Con qué frecuencia asiste a los servicios de la iglesia?</div>", options: ['Varias veces a la semana.', 'Aproximadamente una vez a la semana', 'Varias veces al mes', 'Varias veces al año.', 'Raramente', 'Nunca'], required: true, horizontal: false}],
  data: {trialid: 'ORA_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. ¿Con qué frecuencia participas en otras actividades religiosas? actividades grupales (es decir, clases de escuela dominical para adultos, ¿Grupos de estudio bíblico, grupos de oración, etc.)?</div>", options: ['Varias veces a la semana.', 'Aproximadamente una vez a la semana', 'Varias veces al mes', 'Varias veces al año.', 'Raramente', 'Nunca'], required: true, horizontal: false}],
  data: {trialid: 'ORA_02'}
};
questions_experiment.push(question02);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Actividades religiosas no organizativas (NORA)</big></b><br />'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. ¿Con qué frecuencia rezas en privado?</div>", options: ['Para nada', 'Solo ocasionalmente', 'Varias veces a la semana.', 'Una vez al día', 'Dos veces al día', 'Tres o más veces al día'], required: true, horizontal: false}],
  data: {trialid: 'NORA_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. ¿Con qué frecuencia lees la Biblia u otros religiosos? literatura (revistas, periódicos, libros) en casa?</div>", options: ['Varias veces al día.', 'Diario', 'Varias veces a la semana.', 'Varias veces al mes.', 'Solo ocasionalmente', 'Para nada'], required: true, horizontal: false}],
  data: {trialid: 'NORA_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. ¿Con qué frecuencia escuchas o ves religiosos? programas en radio o televisión?</div>", options: ['Para nada', 'Solo ocasionalmente', 'Varias veces al mes', 'Varias veces a la semana.', 'Diario', 'Varias veces al día.'], required: true, horizontal: false}],
  data: {trialid: 'NORA_05'}
};
questions_experiment.push(question05);

questions_experiment.unshift(instruction_screen_experiment);
questions.push.apply(questions, questions_experiment)

questions_experiment = [];    //temporal timeline

var instruction_screen_experiment = {
    type: 'instructions',
    pages: ['<p><left><b><big>Religiosidad intrínseca (IR) (adaptada de Hill &amp; Hood, 1999, pp. 135137)</big></b><br />'+
    'Por favor, responde las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. Mi fe involucra toda mi vida</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. En mi vida, experimento la presencia de lo divino. (es decir, de Dios).</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Aunque soy una persona religiosa, me niego a dejar consideraciones religiosas influyen en mi cotidiano asuntos.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. Nada es tan importante para mí como servir a Dios como mejor sé cómo.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. Mi fe a veces restringe mis acciones.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. Mis creencias religiosas son lo que realmente está detrás de mi Enfoque completo de la vida.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Me esfuerzo por llevar mi religión a todos mis otros tratos en la vida.</div>", options: ['Definitivamente no es cierto para mí', 'Tiende a no ser cierto', 'Inseguro', 'Tiende a ser verdad', 'Definitivamente cierto de mí'], required: true, horizontal: false}],
  data: {trialid: 'IR_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. Uno debe buscar la guía de Dios al hacer Toda decisión importante.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'IR_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. Aunque creo en la religión, siento que hay muchos Cosas más importantes en la vida.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'IR_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. No importa mucho lo que creo siempre y cuando yo Llevar una vida moral.</div>", options: ['Definitivamente en desacuerdo', 'Tiende a estar en desacuerdo', 'Inseguro', 'Tiende a estar de acuerdo', 'Definitivamente de acuerdo'], required: true, horizontal: false}],
  data: {trialid: 'IR_15'}
};
questions_experiment.push(question15);

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
