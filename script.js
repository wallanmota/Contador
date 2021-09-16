document.querySelector('#contador').addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let inicio = document.querySelector('#primeiro').value;
    let fim = document.querySelector('#ultimo').value;
    let passo = document.querySelector('#passo').value;
    var r = document.querySelector('#result');
    clear();

    

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert("Digite todos os valores")
    }else if(Number(fim) < Number(inicio)){
        for(let i = Number(inicio); i >= Number(fim); i -= Number(passo)){
            validaPasso();
            r.innerHTML += ` ${i} &#x1F449;`
        }r.innerHTML += ' &#x1F3C1;'
    }else{
        for(let i = Number(inicio); i <= Number(fim); i += Number(passo)){
            validaPasso();
            r.innerHTML += ` ${i} &#x1F449;`    
        }r.innerHTML += ' &#x1F3C1;'
    } 

    function validaPasso(){
        if(Number(passo) <= 0){
            alert("Passo não pode ser 0 será considerado o passo 1")
            passo = 1;
        }
    }
    function clear(){
        r.innerHTML = "";
    }
})