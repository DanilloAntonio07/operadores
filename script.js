function soma(){
        var valor1 = parseInt(document.getElementById(`primeiroValor`).value);
        var valor2 = parseInt(document.getElementById(`segundoValor`).value);
        document.getElementById('resultado').value = (valor1 + valor2);
}

function soma2(){
        var valora = parseInt(document.getElementById(`primeiroValor2`).value);
        var valorb = parseInt(document.getElementById('segundoValor2').value);
        var valorc = parseInt(document.getElementById(`terceiroValor2`).value);
        document.getElementById('resultado2').value = (valora * valorb * valorc);
}

function soma3(){
        var valora1 = parseInt(document.getElementById(`primeiroValor3`).value);
        var valorb2 = parseInt(document.getElementById('segundoValor3').value);
        var valorc3 = parseInt(document.getElementById(`terceiroValor3`).value);
        document.getElementById('resultado3').value = (valora1 / valorb2 / valorc3);
}