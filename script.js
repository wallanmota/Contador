document.querySelector('#contador').addEventListener('submit', (event)=>{
    event.preventDefault();
    
    let inicio = document.querySelector('#primeiro').value;
    let fim = document.querySelector('#ultimo').value;
    let passo = document.querySelector('#passo').value;

    for(let i = Number(inicio); i <= Number(fim); i += Number(passo)){

        console.log(i);
        
    }
})