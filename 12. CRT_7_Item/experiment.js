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
    'En las siguientes páginas verá varios ítems que difieren en dificultad. Responda todos los que pueda.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question1 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>1. Un bate y una pelota cuestan  $1.100 en total. El bate cuesta $1.000 más que la pelota ¿Cuánto cuesta la pelota?</div>", type: 'number', required: false, endword: ' pesos.'}], 
  data: {trialid: 'CRT_7_1'}
};
questions_experiment.push(question1);

var question2 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>2. Si 5 máquinas se demoran 5 minutos en hacer 5 audífonos ¿Cuánto tiempo se demorarían 100 máquinas en hacer 100 audífonos?</div>", type: 'number', required: false, endword: ' minutos.'}],
  data: {trialid: 'CRT_7_2'}
};
questions_experiment.push(question2);

var question3 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>3. En un lago hay una mancha de hojas de lirio. Cada día la mancha se dobla en tamaño. Si se demora 48 días la mancha en cubrir el lago completo ¿Cuánto se demoraría la mancha en cubrir la mitad del lago?</div>", type: 'number', required: false, endword: ' días.'}],
  data: {trialid: 'CRT_7_3'}
};
questions_experiment.push(question3);

var question4 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>4. Si José puede tomar un litro de agua en 6 días y María puede tomar un litro de agua en 12 días ¿Cuánto se demorarían ambos en tomar un litro de agua juntos?</div>", type: 'number', required: false, endword: ' días.'}],
  data: {trialid: 'CRT_7_4'}
};
questions_experiment.push(question4);

var question5 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>5. Pedro recibió la quinceava nota más alta y la quinceava nota más baja en su clase ¿Cuántos estudiantes hay en su clase?</div>", type: 'number', required: false, endword: ' estudiantes.'}],
  data: {trialid: 'CRT_7_5'}
};
questions_experiment.push(question5);

var question6 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>6. Un hombre compra un cerdo a $60.000, lo vende a $70.000, lo compra de nuevo por $80.000, y lo vuelve a vender finalmente por $90.000 ¿Cuánta plata ha ganado?</div>", type: 'number', required: false, endword: ' pesos.'}],
  data: {trialid: 'CRT_7_6'}
};
questions_experiment.push(question6);

var question7 = {
  type: 'survey-multi-choice-horizontal',
  questions: [{prompt: "<div class='justified'>7. Simón decide invertir $8.000.000 en el mercado de acciones un día a inicios de 2008. Seis meses después de haber invertido, el 17 de julio, las acciones que había comprado bajaron 50%. Afortunadamente para Simón, desde el 17 de julio hasta el 17 de octubre, las acciones que compró subieron 75%. En este punto, Simón ha:</div>", options: ['No ha ganado ni perdido dinero', 'Ha ganado dinero', 'Ha perdido dinero'], required: false, horizontal: true}],
  data: {trialid: 'CRT_7_7'}
};
questions_experiment.push(question7);

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
