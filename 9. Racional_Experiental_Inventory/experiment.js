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
    pages: ['<p><left><b><big>Inventario Racional-Experiencial</big></b><br />'+
    'Por favor, responda las siguientes preguntas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>1. No soy tan bueno/a resolviendo problemas complicados.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>2. Si me basara en mis corazonadas, me equivocaría seguido.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>3. Prefiero los problemas complejos antes que los simples.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>4. Generalmente, no dependo de mis sentimientos para tomar decisiones.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>5. No tengo problema en pensar las cosas con claridad.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>6. Cuando se trata de confiar en la gente, usualmente me baso en mis corazonadas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>7. Pensar no es para mi una actividad agradable.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>8. Me gusta confiar en mis primeras impresiones.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>9. No soy una persona que piense de manera muy analítica.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>10. Yo confío en mis corazonadas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_10'}
};
questions_experiment.push(question10);

var question11 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>11. Disfruto resolviendo problemas que requieren pensar mucho.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_11'}
};
questions_experiment.push(question11);

var question12 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>12. Creo que es una tontería tomar decisiones basadas en los sentimientos.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_12'}
};
questions_experiment.push(question12);

var question13 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>13. Sospecho que mis corazonadas a veces son inadecuadas y otras veces adecuadas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_13'}
};
questions_experiment.push(question13);

var question14 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>14. Usualmente tengo razones claras y explicables para mis decisiones.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_14'}
};
questions_experiment.push(question14);

var question15 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>15. Para mí es suficiente conocer la respuesta sin tener que entender el razonamiento detrás.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_15'}
};
questions_experiment.push(question15);

var question16 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>16. No quisiera depender de alguien que se describa a sí mismo como intuitivo.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_16'}
};
questions_experiment.push(question16);

var question17 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>17. generalmente usar la lógica me sirve para resolver mis problemas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_17'}
};
questions_experiment.push(question17);

var question18 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>18. Disfruto de los desafíos intelectuales.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_18'}
};
questions_experiment.push(question18);

var question19 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>19. Generalmente, puedo sentir cuando una persona está equivocada o no a pesar de no poder explicar cómo lo sé.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_19'}
};
questions_experiment.push(question19);

var question20 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>20. Frecuentemente sigo mi instinto cuando decido qué hacer.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_20'}
};
questions_experiment.push(question20);

var question21 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>21. Probablemente, mis juicios apresurados no son tan buenos como los de la mayoría de la gente.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_21'}
};
questions_experiment.push(question21);

var question22 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>22. Razonar las cosas cuidadosamente, no es uno de mis puntos fuertes.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_22'}
};
questions_experiment.push(question22);

var question23 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>23. No me gustan las situaciones en las cuales tengo que confiar en mi intuición.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_23'}
};
questions_experiment.push(question23);

var question24 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>24. Trato de evitar situaciones que requieren pensar en profundidad sobre algo.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_24'}
};
questions_experiment.push(question24);

var question25 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>25. Confío en mis sentimientos iniciales sobre la gente.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_25'}
};
questions_experiment.push(question25);

var question26 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>26. Pienso de manera lógica.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_26'}
};
questions_experiment.push(question26);

var question27 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>27. Pienso que no es una buena idea confiar en las propias intuiciones para tomar decisiones importantes.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_27'}
};
questions_experiment.push(question27);

var question28 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>28. No me gusta tener que pensar mucho.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_28'}
};
questions_experiment.push(question28);

var question29 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>29. No tengo muy buena intuición.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_29'}
};
questions_experiment.push(question29);

var question30 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>30. No soy muy bueno resolviendo problemas que requieren un análisis lógico minucioso.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_30'}
};
questions_experiment.push(question30);

var question31 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>31. Creo que hay veces en que uno debería confiar en su intuición.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_31'}
};
questions_experiment.push(question31);

var question32 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>32. Disfruto pensando en términos abstractos.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_32'}
};
questions_experiment.push(question32);

var question33 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>33. Generalmente mis intuiciones me sirven para resolver mis problemas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_33'}
};
questions_experiment.push(question33);

var question34 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>34. No razono bajo presión.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_34'}
};
questions_experiment.push(question34);

var question35 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>35. Tiendo a usar mi corazón como guía para mis acciones.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_35'}
};
questions_experiment.push(question35);

var question36 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>36. Pensar mucho y por un tiempo prolongado sobre algo me da poca satisfacción.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_36'}
};
questions_experiment.push(question36);

var question37 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>37. Casi nunca me equivoco cuando escucho mis sentimientos más profundos para encontrar una respuesta.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_37'}
};
questions_experiment.push(question37);

var question38 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>38. Soy mucho mejor que la mayoría de la gente para resolver las cosas de forma lógica.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_38'}
};
questions_experiment.push(question38);

var question39 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>39. La intuición puede ser una forma útil para resolver problemas.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_39'}
};
questions_experiment.push(question39);

var question40 = {
  type: 'html-slider-response',
  stimulus: "<div class='justified'>40. Me gustaría mucho aprender nuevas formas de pensar.</div></br>", required: true, min: 1, max: 5, slider_width: 500, start: 3, step: 1, labels: ["Totalmente Falso", "Totalmente Cierto"], button_label: "Siguiente",
  data: {trialid: 'Racional_Experiental_Inventory_40'}
};
questions_experiment.push(question40);

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
