const btn = document.getElementById("btn_click")
const btnLista = document.getElementById("btn_list")
btnLista.addEventListener("click",()=>{
    PegarValueStorage()
})
btn.addEventListener("click",()=>{
Insert ()

})



function Insert (){
    const bar = document.getElementById("inputStateBeer").value
    const cliente = document.getElementById("inputPassword4").value
    const descricao = document.getElementById("inputAddress").value
    const obs = document.getElementById("inputAddress2").value
    const date = document.getElementById("inputCity").value
    const colaborador = document.getElementById("inputState").value
    const status = document.getElementById("inputZip").value
    
    ArmazenasStorage()





   

    function ArmazenasStorage() {
        // Obter os valores existentes do localStorage
        const storedBar = localStorage.getItem("bar");
        const storedCliente = localStorage.getItem("cliente");
        const storedDescricao = localStorage.getItem("descrição");
        const storedObs = localStorage.getItem("obs");
        const storedDate = localStorage.getItem("date");
        const storedColaborador = localStorage.getItem("colaborador");
        const storedStatus = localStorage.getItem("status");
    
        // Criar objetos para os novos valores
        const newItem = {
            bar: bar,
            cliente: cliente,
            descrição: descricao,
            obs: obs,
            date: date,
            colaborador: colaborador,
            status: status
        };
    
        // Mesclar os novos valores com os existentes
        const mergedItem = {
            bar: storedBar ? storedBar + "," + newItem.bar : newItem.bar,
            cliente: storedCliente ? storedCliente + "," + newItem.cliente : newItem.cliente,
            descrição: storedDescricao ? storedDescricao + "," + newItem.descrição : newItem.descrição,
            obs: storedObs ? storedObs + "," + newItem.obs : newItem.obs,
            date: storedDate ? storedDate + "," + newItem.date : newItem.date,
            colaborador: storedColaborador ? storedColaborador + "," + newItem.colaborador : newItem.colaborador,
            status: storedStatus ? storedStatus + "," + newItem.status : newItem.status
        };
    
        // Salvar os valores no localStorage
        localStorage.setItem("bar", mergedItem.bar);
        localStorage.setItem("cliente", mergedItem.cliente);
        localStorage.setItem("descrição", mergedItem.descrição);
        localStorage.setItem("obs", mergedItem.obs);
        localStorage.setItem("date", mergedItem.date);
        localStorage.setItem("colaborador", mergedItem.colaborador);
        localStorage.setItem("status", mergedItem.status);
    }
}


function PegarValueStorage() {
    const body = document.getElementById("home_conteiner")


   const barLocal    = localStorage.getItem("bar");
   const clienteLocal= localStorage.getItem("cliente");
   const obdlocal    =localStorage.getItem("obs");
   const dataLocal   =localStorage.getItem("date");
   const colaboradorLocal=localStorage.getItem("colaborador");
   const statusLocal=localStorage.getItem("status");
   const div = document.createElement("div")
   const div1 = document.createElement("div")
   const div2 = document.createElement("div")
   const div3 = document.createElement("div")
   const div4 = document.createElement("div")
   const div5= document.createElement("div")
   const div6 = document.createElement("div")
   const div7 = document.createElement("div")
   
   div.append(barLocal)
   div1.append(clienteLocal)
   div2.append(obdlocal)
   div3.append(barLocal)
   div4.append(dataLocal)
   div5.append(barLocal)
   div6.append(colaboradorLocal)
   div7.append(statusLocal)
   

   body.append(div,div1,div2,div3,div4,div5,div6,div7)

  }
