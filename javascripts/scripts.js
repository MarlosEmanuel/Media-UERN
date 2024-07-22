var opc = 2;
window.document.getElementsByClassName("main-resposta")[0].style.display = 'none';

function changeButtonText(element) {
  var buttonText = element.textContent; // Pega o texto do elemento clicado
  document.getElementById('dropdownMenuButton').textContent = buttonText; // Atualiza o texto do botão
}

function nota_minima(){
    opc = 1;
    const notas = window.document.getElementsByClassName("nota");
    notas[2].value = 999;
    const notas_div = window.document.getElementsByClassName("main-nota-div");
    notas_div[2].style.display = 'none';
    const resposta = window.document.getElementsByClassName("main-resposta");
    resposta[0].firstElementChild.textContent = "Nota Mínima";
    resposta[0].style.display = 'none';
    
}

function media_final(){
    opc = 2;
    const notas = window.document.getElementsByClassName("nota");
    notas[2].value = 0;
    const notas_div = window.document.getElementsByClassName("main-nota-div");
    notas_div[2].style.display = 'block';
    const resposta = window.document.getElementsByClassName("main-resposta");
    resposta[0].firstElementChild.textContent = "Média Final";
    resposta[0].style.display = 'none';


}

function calcular(){
    const notas = window.document.getElementsByClassName("nota");
    var media_final = 0.0;
    for(i = 0; i < notas.length; i++){
        if(notas[i].value != 999){
            media_final += notas[i].value * (4+i);
        }
    }

    if(opc == 1){
        media_final = (105-media_final)/6;
    }else if(opc == 2){
        media_final = media_final/15;
    }
    const main_resposta = window.document.getElementsByClassName("main-resposta")[0];
    main_resposta.style.display= 'block';
    const resposta = window.document.getElementById("resp-main");
    resposta.value = media_final;
}

// window.document.getElementsByClassName("button-resp")[0].style.display = 'none';
