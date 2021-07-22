var botao = document.querySelector("#adicionar-paciente")
botao.addEventListener("click", function(event){     //addEventListener para vc poder cliccar com o mause ou teclado
    event.preventDefault() // preventDefault previne que o HTMLfaça uma ação natural dele 
     var form = document.querySelector("#addPaciente")
     
     var paciente = formDoPaciente(form)

     //var pacientetr = montaTr(paciente)

     //var erros = ValidaPeso(paciente)
      //console.log(erros)
     //if(erros.length > 0){   
        //exibeMensagemdeErro(erros)
        // return;
     
     
     motantaTabela(paciente)

    form.reset()
})
var pacientetr = montaTr(paciente)

function motantaTabela(paciente){
    var pacientetr = montaTr(paciente)
    montaTr(paciente)
    var tabela  = document.querySelector("#tabela-pacientes")
    tabela.appendChild(pacientetr)
    
}

function exibeMensagemdeErro(erros){
    var ul = document.querySelector("#mensagens-erros")
    ul.innerHTML = "" 
    erros.forEach(function(erro){    
        var li = document.createElement("li") 
        li.textContent = erro                   
        ul.appendChild(li)
    })

}

function formDoPaciente(form){
    var paciente = {
      nome:form.nome.value,
      peso:form.peso.value,  
      altura:form.altura.value,
      gordura:form.gordura.value,
      
    }
    return paciente
}
function montaTr(paciente){
    var pacientetr = document.createElement("tr")
    pacientetr.classList.add("paciente")

    var nometd = montaTd(paciente.nome,"info-nome") 
    var pesotd = montaTd(paciente.peso,"info-peso")   //  textContent utlizado oparra so pegar um  valor da tag
    var alturatd = montaTd(paciente.altura,"info-altura")
    var gorduratd = montaTd(paciente.gordura,"info-gordura") 
   

    pacientetr.appendChild(nometd)
    pacientetr.appendChild(pesotd)  //appendChild fala qual das tags é filho
    pacientetr.appendChild(alturatd)
    pacientetr.appendChild(gorduratd)
   

 return pacientetr //return retorna o que vc pediu dentro das()
}
function montaTd(dado,classe) {
    var Td = document.createElement("td") //creatElement Ja é o que fala cria um elemento em HTML 
    Td.textContent = dado
    Td.classList.add(classe)  // classList adiciona uma classe

     return Td
}
