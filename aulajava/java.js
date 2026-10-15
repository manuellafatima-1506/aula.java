 const botao = document.querySelector("#botao");
 const texto = document.querySelector("#texto");
 const msg = document.querySelector("#msg");
 const modo = document.querySelector("#modo");
 const titulo = document.querySelector("#titulo");
 const fundo = document.querySelector("#fundo");
  
botao.addEventListener ("click",
 function() {
 titulo.textContent= ("Pagina alterada pelo Javascript");
 titulo.style.color="red";
 texto.textContent ="Você clicou no botão";
 msg.textContent=("Alteração feita com sucesso!");
 }
);

modo.addEventListener ("click", 
    function() {
      fundo.style.backgroundColor="black";
texto.style.color="white";
        titulo.style.color="white";
        msg.style.color="white";

        }
       );

