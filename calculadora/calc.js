function calcular (operador) {
    var numero1 = document.querySelector(n1).value;
    var numero2 = document.querySelector(n2).value;
    var resultado

    operador = document.querySelector(opera).value;

    if (operador === "+") { 
        resultado = numero1 + numero2;
    }

    if (operador === "-") { 
        resultado = numero1 - numero2;
    }

    if (operador === "*") { 
        resultado = numero1 * numero2;
    }

    if (operador === "/") { 
        resultado = numero1 / numero2;
    }
}
