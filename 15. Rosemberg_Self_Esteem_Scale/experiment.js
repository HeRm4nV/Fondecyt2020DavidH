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
    pages: ['<p><left><b><big>Escala de autoestima de Rosenberg</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. Siento que soy una persona digna de aprecio, al menos en igual medida que los demás.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Creo que tengo un bueno número de cualidades.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. En general, me inclino a pensar que soy un fracasado/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Soy capaz de hacer las cosas tan bien como la mayoría de la gente.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Siento que no tengo muchos motivos para sentirme orgulloso/a de mi.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. Tengo una actitud positiva hacia mí mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. En general, estoy satisfecho conmigo mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Desearía valorarme más a mi mismo/a.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. A veces me siento verdaderamente inútil.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. A veces pienso que no soy bueno/a para nada.</div>", options: ['Muy en desacuerdo', 'En desacuerdo', 'De acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Rosenberg_Scale_10'}
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
