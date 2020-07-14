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
    pages: ['<p><left><b><big>CRT Verbal</big></b><br />'+
    'En las siguientes páginas vas a ver varios ítems que difieren en dificultad. Responde todos los que puedas.' +'</p>'],
    data:{trialid: 'Screen_WM'},
    show_clickable_nav: true,
    on_trial_start: function(){
        bloquear_enter = 0;
    }
};

var question01 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>1. El papá de María tiene 5 hijas y ningún hijo: Nana, Nene, Nini, Nono ¿Cuál es probablemente el nombre de la quinta hija?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_01'}
};
questions_experiment.push(question01);

var question02 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>2. Si estuvieras corriendo una carrera y pasarás a la persona en segundo lugar ¿En qué lugar quedarías?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_02'}
};
questions_experiment.push(question02);

var question03 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>3. En una noche de tormenta un avión despega desde Nueva York. La tormenta empeora y el avión se estrella. La mitad cae en los Estados Unidos y la otra mitad en Canadá ¿En qué país enterrarías a los sobrevivientes?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_03'}
};
questions_experiment.push(question03);

var question04 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>4. Un mono, una ardilla, y un pájaro están haciendo una carrera a la punta de un manzano ¿Quién obtendrá el plátano primero? ¿El mono, la ardilla o el pájaro?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_04'}
};
questions_experiment.push(question04);

var question05 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>5. En una casa de un piso color rojo, había una persona roja, un gato rojo, un pez rojo, un computador rojo, una silla roja, una tabla roja, un teléfono rojo, una ducha roja ¡Todo era de color rojo! ¿De qué color son probablemente las escaleras?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_05'}
};
questions_experiment.push(question05);

var question06 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>6. ¿Qué número de cada animal puso Moisés en el arca?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_06'}
};
questions_experiment.push(question06);

var question07 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>7. El viento fluye en dirección oeste. Un tren eléctrico viaja hacia el este ¿En qué dirección cardinal viaja el humo de la locomotora?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_07'}
};
questions_experiment.push(question07);

var question08 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>8. Si tienes solo un fósforo y caminas a una habitación oscura donde hay aceite de lámpara, un periódico y madera ¿Qué cosa prenderías primero?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_08'}
};
questions_experiment.push(question08);

var question09 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>9. ¿Sería ético que un hombre se casara con la hermana de su viuda?</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_09'}
};
questions_experiment.push(question09);

var question10 = {
  type: 'survey-text',
  questions: [{prompt: "<div class='justified'>10. ¿Cuál de las oraciones es correcta? a) ‘La yema del huevo son blancas’ o b) ‘La yema del huevo es blanca’</div>", type: 'text', required: false}], 
  data: {trialid: 'Verbal_CRT_10'}
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
