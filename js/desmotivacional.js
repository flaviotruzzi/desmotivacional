"use strict";

var phrases = [
    "As pessoas só te incentivam para rir do seu fracasso.",
    "Seus sonhos nunca se realizarão.",
    "Ele só te comeu por falta de opção.",
    "Ela não é dificil, você que é feio.",
    "Ela saiu com você para comer de graça.",
    "As vezes a vida te levanta </br>só pra você cair de novo.",
    "Você é um erro.",
    "Para de bater punheta pra desenho.",
    "Para de tentar criar polêmica pra chamar atenção.</br> Todo mundo te acha um bosta.",
    "Pra ser inútil </br>você tem que melhorar muito.",
    "Você é um desperdício de </br>esperma.",
    "Qualquer companhia </br>é melhor que a sua.",
    "Sua sombra só te segue</br>porque é obrigada.",
    "Azar no amor</br>Azar no dinheiro</br> e sorte no azar.",
    "Seu pai só teria um dia feliz</br> se não tivesse você como filho.",
    "Você vai morrer infeliz</br> e sozinho.",
    "Ela pediu um tempo</br> porque queria dar para outro.",
    "A tendência é piorar.",
    "A vida é curta</br> e mesmo assim você vai continuar trabalhando em projetos</br>bosta.",
    "Seu dia vai ser uma bosta.",
    "Tem peito grande mas é gorda.",
    "Sua mãe deveria ter engolido.",
    "Você só faz peso na terra.",
    "As pessoas só te respondem</br> para você parar de encher o saco.",
    "Ela só te usou para fazer ciúme no ex.",
    "Ta todo mundo transando</br> menos você.",
    "Nasceu para ser feito de otário.",
    "Agradeça seu pai por ele te amar</br> mesmo você sendo um merda.",
    "Comer que nem um filho da puta</br> não vai esconder o fracasso da sua vida.",
    "Você nunca vai conseguir.",
    "Calma, </br> o pior ainda está por vir.",
    "Ninguém acha graça </br>no que você diz.",
    "Vai dar merda.",
    "Mais um dia que passa </br>e tua insignificância prevalece.",
    "Ela gosta do seu melhor amigo.",
    "Nunca diga que sua vida não pode ficar pior",
    "A inteligência artificial não é páreo para a estupidez natural!",
    "Se você não conseguir de primeira,</br> remova todas as evidências de que você ao menos tentou!",
    "Finalmente ela olhou pra você. E te achou feio.",
    "Aquela festa parece legal... Ninguém te convidou.",
    "Uma mulher te cantou...era um travesti.",
    "Sua cara metade virou gay!",
    "Ele ainda se lembra de você. Com raiva!",
    "Não desanime com a derrota de hoje. Amanhã tem outra.",
    "Jesus só te ama por quê não convive com você",
    "Não importa as escolhas que você faça,</br> você vai estragar tudo do mesmo jeito!",
    "Nem sua mãe acredita no seu sucesso!",
    "Vai dar tudo certo!</br> ...menos pra você!",
    "Que merda é essa na minha cama? </br> Ah... Sou só eu!",
    "Seu primo mais novo tá ganhando bem mais que você",
    "Sua vida social no the sims não conta como uma",
    "A vida é bela,</br> mas você não!",
    "Tente ser feliz sem seus remédios",
    "Seja um fracassado,</br> culpe seus pais pelo seu fracasso"
];

var setOverlay = function() {
    var overlay = $("#overlay");
    var img = $("#canvas");
    overlay.width(img.css("width"));
    overlay.height(img.css("height"));
    overlay.css("top", img.offset().top + "px");
    overlay.css("left", img.offset().left + "px");

    setText();
};

var setCanvasStyle = function() {
    document.getElementById("canvas").src = "https://unsplash.it/" + window.innerWidth + "/" + window.innerHeight + "?random";
};

var setText = function() {
    var element = document.getElementById("text");
    var phrase = phrases[Math.floor(Math.random()*phrases.length)];
    element.innerHTML = phrase;
    element.addEventListener("OnVoiceReady", speak(phrase), false);
};

var speak = function(text) {
    setTimeout(function() {
        responsiveVoice.speak(text.replace(/<\/br>/g, ""), "Brazilian Portuguese Female");
    }, 1000);
};
