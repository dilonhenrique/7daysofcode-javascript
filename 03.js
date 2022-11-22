const msg = document.querySelector(".usuario .mensagem");
const but = document.querySelector(".usuario .enviar");
const conversa = document.querySelector(".conversa");

let nome;
let side;
let linguagem;
let foco;
let tecnologia = [];

//funções repetitivas --------------------------------------
const timer = (seconds) =>  {
    let time = seconds * 1000
    return new Promise(res => setTimeout(res, time))
}

async function escreverMensagem(m){
    conversa.appendChild(document.createElement("span")).append(msg.value);
    msg.value = "";
    await timer(1);
    conversa.appendChild(document.createElement("p")).append(m);
}

//funções de perguntas---------------------------------
function perguntaNome(){
    event.preventDefault();
    if (msg.value != ""){
        nome = msg.value;

        escreverMensagem("Você pretende seguir para área de Front-end (digite 1) ou Back-end (digite 2)?");
        but.onclick = perguntaSide;
    }
}

function perguntaSide(){
    event.preventDefault();
    let v = msg.value.toLowerCase();
    if (v === "1" || v === "frontend" || v === "front end" || v === "front-end"){
        side = "front-end";
        escreverMensagem("E você quer aprender React (digite 1) ou Vue (digite 2)?");
        but.onclick = perguntaLinguagem;
    } else if (v === "2" || v === "backend" || v === "back end" || v === "back-end"){
        side = "back-end";
        escreverMensagem("E você quer aprender C# (digite 1) ou Java (digite 2)?");
        but.onclick = perguntaLinguagem;
    } else {
        escreverMensagem("Por favor, digite 1 para Front-end ou 2 para Back-end");
        but.onclick = perguntaSide;
    }
}

function perguntaLinguagem(){
    event.preventDefault();
    let v = msg.value.toLowerCase();
    if (side === "front-end") {
        if (v === "1" || v === "react"){
            linguagem = "react";
            escreverMensagem("Você pretende seguir se especializando na área escolhida (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?");
            but.onclick = perguntaFoco;
        } else if (v === "2" || v === "vue"){
            linguagem = "vue";
            escreverMensagem("Você pretende seguir se especializando na área escolhida (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?");
            but.onclick = perguntaFoco;
        } else {
            escreverMensagem("Por favor, digite 1 para React ou 2 para Vue");
            but.onclick = perguntaLinguagem;
        }
    } else {
        if (v === "1" || v === "c#"){
            linguagem = "C#";
            escreverMensagem("Você pretende seguir se especializando na área escolhida (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?");
            but.onclick = perguntaFoco;
        } else if (v === "2" || v === "java"){
            linguagem = "java";
            escreverMensagem("Você pretende seguir se especializando na área escolhida (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?");
            but.onclick = perguntaFoco;
        } else {
            escreverMensagem("Por favor, digite 1 para C# ou 2 para Java");
            but.onclick = perguntaLinguagem;
        }
    }
}

function perguntaFoco(){
    event.preventDefault();
    let v = msg.value.toLowerCase();
    if (v === "1" || v === "especialista" || v === "especializando"){
        foco = "especialista";
        escreverMensagem("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Sim ou 2 para Não");
        but.onclick = perguntaFinal;
    } else if (v === "2" || v === "fullstack" || v === "full stack" || v === "full-stack"){
        foco = "fullstack";
        escreverMensagem("Tem mais alguma tecnologia que você gostaria de aprender? Digite 1 para Sim ou 2 para Não");
        but.onclick = perguntaFinal;
    } else {
        escreverMensagem("Por favor, digite 1 para Especialista ou 2 para Fullstack");
        but.onclick = perguntaFoco;
    }
}

function perguntaFinal(){
    event.preventDefault();
    let v = msg.value.toLowerCase();
    if (v === "1" || v === "sim" || v === "yes" || v === "y" || v === "s"){
        escreverMensagem("Qual tecnologia? Digite somente um nome de tecnologia por vez");
        but.onclick = perguntaTecnologia;
    } else if (v === "2" || v === "nao" || v === "não" || v === "no" || v === "n"){
        escreverMensagem(`Certo, ${nome}! Firmamos aqui o compromisso de você se tornar um desenvolvedor ${side} focado na linguagem ${linguagem}. Você será um desenvolvedor ${foco} e terá domínios sobre as tecnologias ${tecnologia}. Digite seu nome corretamente para assinar e se comprometer com isso.`);
        but.onclick = assinatura;
    } else {
        escreverMensagem("Por favor, digite 1 para Sim ou 2 para Não e encerrar");
        but.onclick = perguntaFinal;
    }
}

function perguntaTecnologia(){
    event.preventDefault();
    if (msg.value != ""){
        tecnologia.push(msg.value);

        escreverMensagem("Ok. Tem mais alguma tecnologia que gostaria de conhecer? Digite 1 para Sim ou 2 para Não e encerrar");
        but.onclick = perguntaFinal;
    }
}

function assinatura(){
    event.preventDefault();
    if (msg.value === nome){
        escreverMensagem("Parabéns pelo comprometimento! Tenho certeza que vai conseguir.");
        //desativar inputs
        but.disabled = true;
        msg.disabled = true;
    } else {
        escreverMensagem("Para se comprometer com seu futuro, escreva seu nome exatamente como digitou da primeira vez.");
        but.onclick = assinatura;
    }
}

but.onclick = perguntaNome;

/*but.onclick = function(){
    event.preventDefault();
    if (msg.value != ""){
        nome = msg.value;

        escreverMensagem(msg.value, "user");
        escreverMensagem("Qual sua idade?");
        //conversa.appendChild(document.createElement("p")).append("Qual sua idade?");
        msg.value = "";

        but.onclick = function(){
            event.preventDefault();
            if (msg.value != ""){
                idade = msg.value;
    
                escreverMensagem(msg.value, "user");
                escreverMensagem("Qual linguagem de programação você está estudando?");
                //conversa.appendChild(document.createElement("p")).append("Qual linguagem de programação você está estudando?");
                msg.value = "";

                but.onclick = function (){
                    event.preventDefault();
                    if (msg.value != ""){
                        linguagem = msg.value;

                        escreverMensagem(msg.value, "user");
                        escreverMensagem(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
                        escreverMensagem("Você está gostando de estudar "+ linguagem +"?");
                        escreverMensagem("Digite 1 para SIM ou 2 para NÃO");
                        //conversa.appendChild(document.createElement("p")).append(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);
                        //conversa.appendChild(document.createElement("p")).append("Você está gostando de estudar "+ linguagem +"?");
                        //conversa.appendChild(document.createElement("p")).append("Digite 1 para SIM ou 2 para NÃO");
                        msg.value = "";

                        but.onclick = function (){
                            event.preventDefault();
                            if (msg.value != ""){
                                if (msg.value != '1' && msg.value != '2'){
                                    escreverMensagem(msg.value, "user");
                                    escreverMensagem("Porfavor, digite 1 para SIM ou 2 para NÃO");
                                    //conversa.appendChild(document.createElement("p")).append("Porfavor, digite 1 para SIM ou 2 para NÃO");
                                    msg.value = "";
                                }
                                if (msg.value === '1'){
                                    escreverMensagem(msg.value, "user");
                                    escreverMensagem("Muito bom! Continue estudando e você terá muito sucesso.");
                                    //conversa.appendChild(document.createElement("p")).append("Muito bom! Continue estudando e você terá muito sucesso.");
                                    msg.value = "";
                                }
                                if (msg.value === '2'){
                                    escreverMensagem(msg.value, "user");
                                    escreverMensagem("Ahh que pena... Já tentou aprender outras linguagens?");
                                    msg.value = "";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}*/