const formulario = document.querySelector("#form-movimentacao");
const campoDescricao = document.querySelector("#descricao");
const campoValor = document.querySelector("#valor");
const campoTipo = document.querySelector("#tipo");
const textoSaldo = document.querySelector("#saldo");
const textoReceitas = document.querySelector("#receitas");
const textoDespesas = document.querySelector("#despesas");
const listaMovimentacoes = document.querySelector("#lista-movimentacoes");

let totalReceitas = 0;
let totalDespesas = 0;


formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const descricao = campoDescricao.value;
    const valor = campoValor.value;
    const tipo = campoTipo.value;

    const valorNumerico = Number(valor);

    if (tipo === "receita") {
        totalReceitas = totalReceitas + valorNumerico;
    }else{
        totalDespesas = totalDespesas + valorNumerico;
    }
    const saldo = totalReceitas - totalDespesas;
    textoReceitas.textContent = `R$ ${totalReceitas.toFixed(2)}`;
    textoDespesas.textContent = `R$ ${totalDespesas.toFixed(2)}`;
    textoSaldo.textContent = `R$ ${saldo.toFixed(2)}`;

    const item = document.createElement("li");
    item.textContent = `${descricao} - ${tipo}: R$ ${valorNumerico.toFixed(2)}`;
    item.classList.add(tipo);

    listaMovimentacoes.appendChild(item);

    formulario.reset();


});

