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
    pages: ['<p><left><b><big>Escala de creencias sobrenaturales Revisada</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>1. El alma sigue existiendo aunque el cuerpo pueda morir.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>2. Algunos individuos pueden levitar (levantar) objetos a través de fuerzas mentales.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>3. La magia negra realmente existe.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>4. Los gatos negros traen mala suerte.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>5. Tu mente o alma puede salir del cuerpo y viajar (proyección astral).</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>6. El abominable hombre de las nieves, o pie grande del Tíbet, existe.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. La astrología es una forma precisa de predecir el futuro.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>8. Existe el diablo.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>9. La telekinesis, mover objetos a través de poderes psíquicos, existe.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>10. Las brujas existen.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>11. Si quiebras un espejo, tendrás mala suerte.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>12. Durante estados alterados, como el sueño o los trances, el espíritu puede salir del cuerpo.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>13. El monstruo del lago Ness en Escocia, existe.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>14. El horóscopo dice el futuro de las personas de forma precisa.</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>15. Creo en Dios</div>", options: ['Muy en desacuerdo', 'Moderadamente en desacuerdo', 'Un poco en desacuerdo', 'No sé / No tengo certeza', 'Un poco de acuerdo', 'Moderadamente de acuerdo', 'Muy de acuerdo'], required: true, horizontal: true}],
  data: {trialid: 'Revised_Supernatural_Belief_Scale_15'}
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
