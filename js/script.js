function mudou() {
    var preco = Number(window.prompt('Qual era o preço anterior do produto: '))
    var precoAtual = Number(window.prompt('Qual o preço atual do produto: '))
    var diferenca = precoAtual - preco
    var porcentagemPreco = (diferenca * precoAtual) / 100

    var msg1 = window.document.querySelector('#msg1')
    var msg2 = window.document.querySelector('#msg2')
    var msg3 = window.document.querySelector('#msg3')
    var msg4 = window.document.querySelector('#msg4')
    var msg5 = window.document.querySelector('#msg5')

    msg1.innerHTML = `Analisando os valores informados`
    msg2.innerHTML = `O produto custava ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${precoAtual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`

    if (precoAtual >= preco) {
        msg3.innerHTML = `O preço está mais caro!`
        msg4.innerHTML = `O preço subiu ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior`

    }else {
        msg3.innerHTML = `O preço está mais barato!`
        msg4.innerHTML = `O preço caiu  ${diferenca.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior`
    }

}
