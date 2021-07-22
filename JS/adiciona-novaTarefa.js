//var RemovPacient = document.querySelectorAll(".paciente")
//RemovPacient.forEach(function(paciente){
//paciente.addEventListener("dblclick", function(){
   // console.log("Fui clicado")
   // this.remove()  // this é prra eu saber dentro de uuma função anonima o que eu quero pegar
//})                 //remove é uma funçao   pronta do js que me ajuda a remover o  que eu quiser 

//}) esse codigo ´so serve para uma tabela pronta se voc~e add algo nela agr não vai remover 

var tabela = document.querySelector("table");

var botão = document.querySelector("#Excluir-paciente")

botão.addEventListener("click", function(){
 
tabela.addEventListener("dblclick",function evento(event){    //Para descobrirmos qual filho foi clicado, utilizaremos o event como parâmetro na função
    event.target.parentNode.classList.add("feDault")  
    setTimeout(function(){   //função que faz que o JS segure um pouco a proxima funçao
        event.target.parentNode.remove();  //Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode
    },1000) // da função passada por parâmetro para ela, com o tempo de 500 milissegundos, equivalente a meio segundo.
   // event.target.parentNode.remove();
   });                //Ele irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target.
                // Enquanto o this se refere ao dono do evento, o event.
                //target será quem sofreu propriamente o evento. "dblclick"

                
 }) 