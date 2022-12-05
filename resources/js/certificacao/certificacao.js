
 document.addEventListener("DOMContentLoaded", function(event) {
    const cars  = [
 
        {
    
            "marca": "BMW",
    
            "modelo" : "Z4 coup",
    
            "ano": "2007",
    
            "cor": "laranja",
    
            "placa": "NEJ-6420"
    
        },
    
        {
    
            "marca": "Honda",
    
            "modelo" : "Accord Coupe EX",
    
            "ano": "1991",
    
            "cor": "Preto",
    
            "placa": "NEJ-5085"
    
        },
    
        {
    
            "marca": "Peugeot",
    
            "modelo" : "207 Sedan Passion XR 1.4 Flex 8V 4p",
    
            "ano": "2009",
    
            "cor": "Bege",
    
            "placa": "NES-0659"
    
        },
    
        {
    
            "marca": "Fiat",
    
            "modelo" : "MOBI Like 1.0 Fire Flex 5p.",
    
            "ano": "2017",
    
            "cor": "Cinza",
    
            "placa": "NEP-1151"
    
        },
    
        {
    
            "marca": "Ford",
    
            "modelo" : "Ranger XLS 3.2 20V 4x4 CD Diesel Mec.",
    
            "ano": "2013",
    
            "cor": "Verde",
    
            "placa": "NFA-5128"
    
        },
    
     ]
    
    
    
    
    /* Verifica se o placa existe quando clica em Busca */
    document.getElementById("btn-busca").addEventListener("click", function() {
    /* pegar valor da placa digitado na busca */
    let placaInput =  document.getElementById("placa").value;
    let achou  = false;
    
    let resultado = document.getElementById("resultado")
            
    for(let i = 0; i < cars.length; i++){
    /* verifica se a placa é igual a digitada */
    if(cars[i].placa == placaInput){
    resultado.innerHTML = `<p>Marca: ${cars[i].marca}</p> <p> Modelo:${cars[i].modelo} </p><p> Ano: ${cars[i].ano}</p><p> Cor: ${cars[i].cor} </p><p> Placa: ${cars[i].placa}</p>` ;
    achou = true;
    }
    }
    
    if(!achou){
    resultado.innerHTML = "Veiculo não encontrado"
    }
    
    /* Add class resultado div */
    document.getElementById("resultado").parentNode.parentNode.classList.add("show-cars")
    
    
    });
    
    
    
    document.getElementById("close-cars").addEventListener("click", function() {
    /* Remove class resultado div */
    document.getElementById("resultado").parentNode.parentNode.classList.remove("show-cars")
    });
    
  });



