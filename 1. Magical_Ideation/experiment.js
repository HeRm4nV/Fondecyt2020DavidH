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
    pages: ['<p><left><b><big>Ideación Mágica</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>1. Algunas personas pueden hacerme consciente de ellos simplemente pensando en mí.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>2. He tenido la sensación momentánea de que tal vez no soy humano.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>3. A veces he tenido miedo de pisar las grietas en la acera.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>4. Creo que podría aprender a leer las mentes de otros si yo quisiera</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>5. Los horóscopos son correctos con demasiada frecuencia para que sea una coincidencia.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>6. Las cosas a veces parecen estar en diferentes lugares cuando llego a casa, a pesar de que nadie ha estado allí.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>7. Los números como 13 y 7 no tienen poderes especiales.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>8. Ocasionalmente tuve la tonta sensación de que un televisor o la emisora ​​de radio sabía que lo estaba escuchando.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>9. Me preocupa que las personas en otros planetas puedan influir en lo que sucede en la tierra</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>10. El gobierno se niega a decirnos la verdad sobre platillos voladores.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>11. He sentido que había mensajes para mí en cómo se organizaron las cosas en un escaparate.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>12. Nunca he dudado de que mis sueños son los productos de mi propia mente.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>13. Los amuletos de buena suerte no funcionan.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>14. He notado sonidos en mis registros que no están allí en otros momentos.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>15. Los movimientos de las manos que los extraños hacen parecen influir en mí a veces.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>16. Casi nunca sueño con cosas antes de que sucedan.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>17. He tenido la sensación momentánea de que algún lugar de alguien ha sido ocupado por un parecido.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>18. No es posible dañar a otros simplemente teniendo malos pensamientos sobre ellos.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>19. A veces he sentido una presencia maligna a mi alrededor, aunque no podía verla.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>20. A veces tengo la sensación de ganar o perder energía cuando ciertas personas me miran o me tocan.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>21. A veces he tenido el pensamiento pasajero de que los extraños están enamorados de mí.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>22. Nunca tuve la sensación de que ciertos pensamientos míos realmente pertenecían a otra persona.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_22'}
};
questions_experiment.push(question22);

var question23 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>23. Cuando me presentan a extraños, rara vez me pregunto si los he conocido antes.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_23'}
};
questions_experiment.push(question23);

var question24 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>24. Si la reencarnación fuera cierta, explicaría algunas experiencias inusuales que he tenido.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_24'}
};
questions_experiment.push(question24);

var question25 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>25. Las personas a menudo se comportan de manera tan extraña que uno se pregunta si son parte de un experimento.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_25'}
};
questions_experiment.push(question25);

var question26 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>26. A veces realizo ciertos pequeños rituales para alejar las influencias negativas.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_26'}
};
questions_experiment.push(question26);

var question27 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>27. He sentido que podría causar que algo suceda simplemente pensando demasiado en ello.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_27'}
};
questions_experiment.push(question27);

var question28 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>28. Me he preguntado si los espíritus de los muertos pueden influir en los vivos.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_28'}
};
questions_experiment.push(question28);

var question29 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>29. A veces he sentido que la conferencia de un profesor estaba destinada especialmente para mí.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_29'}
};
questions_experiment.push(question29);

var question30 = {
  type: 'survey-multi-choice-vertical',
  questions: [{prompt: "<div class='justified'>30. A veces he sentido que extraños leían mi mente.</div>", options: ['Verdadero', 'Falso'], required: true, horizontal: false}],
  data: {trialid: 'Magical_Ideation_30'}
};
questions_experiment.push(question30);

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
