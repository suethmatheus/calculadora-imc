function calcular() {
    let nome = document.querySelector('#nome').value;
    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let resultado = document.querySelector('.resultado')
    let imc = (peso/(altura*altura)).toFixed(2);

    if (nome == '' && peso == '' && altura == '') {
        alert ('Informe os dados corretamente.')
    } else {
        let classificacao = '';
        if (imc < 18){
            classificacao = 'Você está abaixo do peso';
        } else if (imc < 25) {
            classificacao = 'Você está com peso ideal'
        } else if (imc < 30) {
            classificacao = 'Você está levemente acima do peso'
        } else if (imc < 35) {
            classificacao = 'Você está com obesidade grau I'
        } else if (imc < 40) {
            classificacao = 'Você está com obesidade grau II'
        } else {
            classificacao = 'Você está com obesidade grau III, CUIDADO!'
        }
        resultado.innerHTML = `Olá ${nome}, seu IMC é ${imc}!<br>
        ${classificacao}`
    }
}