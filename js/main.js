function openModal(modalId) {
    const modal = document.querySelector(modalId)/*seleciona a classe modal (exibição da classe)*/
    modal.style.display = "flex"
}

function closeModal() {
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
                <h2><p>NYSE</p></h2>
            </div>

            <div class="content">
                <p>U$${valor}</p>
                <div class="bottom">
                    <p>Ativos:${ativos}</p>
                    <p>Posição: ${total}</p>
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
    const card = event.target.closest(".card")/*pega o elemento que disparou o evento, e procura pelo ancestral mais proximo com a classe card*/
    card.remove()/*remove o card*/
}

function openEditCard(event) {
    const buttonedit = event.target
    const card = buttonedit.closest(".card")
    const ticker = card.querySelector(".top h2 p").innerText
    const inputeditticker = document.getElementById("editticker")
    inputeditticker.value = ticker
    openModal('#edit')

}