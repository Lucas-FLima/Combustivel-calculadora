    let cpkmt = document.querySelector('#cpkmt');
    let vcl = document.querySelector('#vcl');
    let trajeto = document.querySelector('#trajeto');
    let diario = document.querySelector('#diario');
    let cincodias = document.querySelector('#cincodias');
    let semana = document.querySelector('#semana');
    let mes = document.querySelector('#mes');

function calcular() {
    cpkmt = parseFloat(cpkmt.value);
    vcl = parseFloat(vcl.value);
    trajeto = parseFloat(trajeto.value);
    let valordiario = (((trajeto / cpkmt) + (trajeto * (0.1)))* vcl).toFixed(2);
    let valorcincodias = (valordiario * 5).toFixed(2);
    let valorsemana = (valordiario * 7).toFixed(2);
    let valormes = (valordiario * 30).toFixed(2);
    diario.innerHTML = "Para 1 dia dessa rota, o custo é de R$: " + valordiario + ".";
    cincodias.innerHTML = "Para 5 dia dessa rota, o custo é de R$: "+valorcincodias + ".";
    semana.innerHTML = "Para 7 dia dessa rota, o custo é de R$: "+valorsemana + ".";
    mes.innerHTML = "Para 30 dia dessa rota, o custo é de R$: "+ valormes + ".";
}

function limpar() {
    location.reload();
}