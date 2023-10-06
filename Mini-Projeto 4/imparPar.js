//recebe um quantidade de valores para avaliar e a função exibe se os valores são par ou impar


function verificaTipo(num){
    for (let i = 0; i <= num; i++ ){
        if(i % 2 === 0)
           console.log(i,"PAR")
        else 
            console.log(i, "IMPAR")
    }   
}

verificaTipo(10)