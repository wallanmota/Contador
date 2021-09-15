document.querySelector('#contador').addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let inicio = document.querySelector('#primeiro').value;
    let fim = document.querySelector('#ultimo').value;
    let passo = document.querySelector('#passo').value;
    var r = document.querySelector('#result');

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert("Digite todos os valores")
    }else{
        for(let i = Number(inicio); i <= Number(fim); i += Number(passo)){
            r.innerHTML += ` ${i} `
            
        }
    } 
})