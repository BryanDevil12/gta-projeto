/* 
Objetivo 1 - quando o usuario clicar no botão de seleção de plataformas, deve abrir uma caixa com os botões de seleção de plataforma.
    Passo 1 - pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado

    Passo 3 - pegar o clique do usuário no JS

    Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão, para que o conteúdo apareça


Objetivo 2 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
*/




//Obj.1 
    //passo 1: pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele
const botao = document.querySelector(".btn-plataforma");

    //passo 2:pegar o elemento do conteúdo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    //Passo 3 - pegar o clique do usuário no JS
botao.addEventListener("click", () => {


    //Obj.2 
    // Passo 1 - caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido
    const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");

    /*
    isso aqui se eu colocar e tirar o "if", dá td mesma coisa. DÁ NO MESMO: 
    elementoPlataformas.classList.toggle("ativo");
    */

    if(botaoEstaAberto) {
        elementoPlataformas.classList.remove("ativo");
    }else{
        //Passo 4 - quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão, para que o conteúdo apareça
        elementoPlataformas.classList.add("ativo");
    }
});



