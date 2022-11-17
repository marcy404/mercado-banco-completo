function random(x){
    return Math.floor(Math.random()*x+1);
}

table1 = document.getElementById("tabela1")

let tabelinha = [];
let cont = 1;
let tipo = 1;

let hoje = new Date();
let fab = new Date();
let val = new Date();
let precUn = Number((Math.random(99)*100).toFixed(2));

let vezes = random(10);
let round = 1;

let quant_perdas = 0;
let valor_perdas = 0;

let tamanhoTabela = random(50);

while(cont<=tamanhoTabela && tipo <=5){
    tr = document.createElement("tr");

    let mes_fab = random(12);
    let dia_fab = 0;

    fab.setMonth(mes_fab)

    switch(mes_fab){
        case 2:
            dia_fab = random(28);
            break;
        case 4,6,9,11:
            dia_fab = random(30);
            break;
        case 1,3,5,7,8,10,12:
            dia_fab = random(31);
            break;
    }

    fab.setDate(dia_fab);
    fab.setFullYear(hoje.getFullYear());

    let item = {
        tipo: String(tipo),
        hoje: hoje.toLocaleDateString(),
        fabricacao: fab.toLocaleDateString(),
        validade: new Date(),
        validadeDias: random(365),
        qualidade:'xx',
        precoUnitario: precUn,
        quantidadeLote: random(300)
    }

    val = fab;
    val.setDate(val.getDate() + item.validadeDias);
    item.validade = val.toLocaleDateString();

    
    if(val<hoje){
        item.qualidade = "Vencido";
        quant_perdas++;
        valor_perdas += item.precoUnitario;
    }

    else{
        item.qualidade = "Consumível";
    }

    if(round==vezes){
        vezes = random(10);
        round = 0;
        precUn = Number((Math.random(99)*100).toFixed(2));
        tipo++;
    }
    

    tabelinha.push(item);
    cont++;
    round++;

    let valores = Object.values(item);
    for(i in valores){
        td = document.createElement("td");
        td.innerHTML = valores[i];
        tr.appendChild(td);
    }
    table1.appendChild(tr);
}

thead = Object.keys(tabelinha[0]);
th1 = document.getElementsByClassName("cabeçalho1");
let index = 0;

for(i in th1){
    th1[i].innerHTML = thead[index];
    index++;
}

let perdas = {
    Quantidade: quant_perdas,
    Valor: valor_perdas.toFixed(2),
}

table2 = document.getElementById("tabela2");
tr2 = document.createElement("tr");

perdas_key = Object.keys(perdas);
perdas_values = Object.values(perdas);
th2 = document.getElementsByClassName("cabeçalho2");
let index2 = 0;

for(i in th2){
    th2[i].innerHTML = perdas_key[index2];
    index2++;
}

for(i in perdas_values){
    td2 = document.createElement("td");
    td2.innerHTML = perdas_values[i];
    tr2.appendChild(td2);
}

table2.appendChild(tr2);