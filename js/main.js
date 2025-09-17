function openModal(modalId) {
    const modal = document.querySelector(modalId)/*seleciona a classe modal (exibição da classe)*/
    modal.style.display = "flex"
}

function closeModal(modalId) {
    const modal = document.querySelector(modalId)/*seleciona a classe modal (ocultação da classe)*/
    modal.style.display = "none"
}

function addTicker(event) {
    event.preventDefault()/*previne o comportamento padrao do formulario, que é recarregar a pagina apos o envio*/
    const ticker = event.target.ticker.value/*pega o valor do input ticker*/
    const bolsa = event.target.bolsa.value/*pega o valor do input bolsa*/
    const valor = event.target.valor.value/*pega o valor do input valor*/
    const ativos = event.target.ativos.value/*pega o valor do input ativos*/
    const total = valor * ativos


    const card = /*cria o card com os valores inseridos no formulario*/`
        <div class="card" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <div class="top">
                <h2><p>${ticker}</p></h2>
                <h2><p>${bolsa}</p></h2>
            </div>

            <div class="content">
                <p>U$<span>${valor}<span></p>
                <div class="bottom">
                    <p>Ativos:${ativos}</p>
                    <p>Posição:<span> ${total}</span></p>
                </div>
                <div class="buttons">
                    <button type="button">Editar</button>
                    <button type="button" onclick="deleteCard(event)">Excluir</button>
                </div>
            </div>
        </div>
`

    const cards = document.getElementById("cards")
    cards.innerHTML += card/*adiciona o card criado dentro da div com id cards*/
    closeModal('#add')
    event.target.reset()/*reseta o formulario apos o envio*/
}

function editTicker(event) {
    event.preventDefault()
}



function editTicker(event) {
    event.preventDefault()

    const idcard = event.target.idcard.value
    const ticker = event.target.editticker.value
    const bolsa = event.target.editbolsa.value
    const valor = event.target.editvalor.value
    const ativos = event.target.editativos.value

    const total = valor * ativos

    const cardEdit = document.getElementById(idcard)

    const h2Ticker = cardEdit.querySelector('.top .ticker p')
    h2Ticker.innerText = ticker

    const h3Bolsa = cardEdit.querySelector('.top .bolsa p')
    h3Bolsa.innerText = bolsa

    const pValor = cardEdit.querySelector('.content p span')
    pValor.innerText = valor

    const pAtivos = cardEdit.querySelector('.bottom p')
    pAtivos.innerText = ativos

    const spanTotal = cardEdit.querySelector('.bottom p span')
    spanTotal.innerText = total

    closeModal('#edit')
}

function openEditCard(event) {
    const buttonEdit = event.target
    const card = buttonEdit.closest(".card")
    console.log(card)

    const ticker = card.querySelector('.top .ticker p').innerText
    const inputEditTicker = document.getElementById('editticker')
    inputEditTicker.value = ticker

    const idCard = card.getAttribute('id')/*pega o atributo id do card*/
    //cardStock.setAttribute("teste", "123") //Exemplo de setAttribute para adicionar um atributo em um elemento
    const inputIdCard = document.getElementById('idcard')
    inputIdCard.value = idCard

    const bolsa = card.querySelector('.top .bolsa p').innerText
    const selectEditBolsa = document.getElementById('editbolsa')
    selectEditBolsa.value = bolsa

    const valor = card.querySelector('.content p span ').innerText
    const inputEditValor = document.getElementById('editvalor')
    inputEditValor.value = valor

    const ativos = card.querySelector('.bottom p span ').innerText
    const inputEditAtivos = document.getElementById('editativos')
    inputEditAtivos.value = ativos

    openModal('#edit')
}

function showButtons(event) {
    const card = event.target /*pega o elemento que disparou o evento*/
    const buttons = event.target.querySelector(".buttons")/*seleciona a classe buttons dentro do card*/
    buttons.style.display = "flex"
}

function hideButtons(event) {
    const card = event.target
    const buttons = event.target.querySelector(".buttons")
    buttons.style.display = "none"

}

function deleteCard(event) {
    const buttonDelete = event.target
    const card = buttonDelete.closest(".card")
    card.remove()
}