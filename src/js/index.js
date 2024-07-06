document.addEventListener("DOMContentLoaded", () =>
{
    const saida = document.querySelector(".saida")
    const entradaDoNumero = document.querySelector("#entradaDoNumero")
    const calcular = document.querySelector("#calcular")

    calcular.addEventListener("click", calculadora)

    entradaDoNumero.addEventListener("keydown", () =>
    {
        if (event.key === "Enter")
        {
            calculadora()
        }
    })

    function calculadora()
    {
        if (entradaDoNumero.value != "")
            {
                let numeroAlvo = Math.floor(Number(entradaDoNumero.value))
                entradaDoNumero.value = numeroAlvo
                let sequenciaDeFibonacci = calcularSequeciaDeFibonacci(numeroAlvo)
            }    
            else
            {
                saida.innerHTML = 0
            }
    }

    function calcularSequeciaDeFibonacci(valor)
    {
        let fibonacci = 0

        for (let contador = 0; contador <= valor; contador++)
        {
            if (contador === 0)
            {
                saida.innerHTML = fibonacci 
                limparEntrada()               
            } 
            else if (contador === 1)  
            {
                fibonacci = 1
                saida.innerHTML += " " + fibonacci
                limparEntrada()                
            }  
            else
            {
                fibonacci = (contador - 1) + (contador - 2)
                saida.innerHTML += " " + fibonacci 
                limparEntrada()
            }  
        }
    }

    function limparEntrada()
    {
        entradaDoNumero.value = ""
    }
})