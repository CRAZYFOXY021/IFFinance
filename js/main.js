function openModal() {
    const modal = document.querySelector(".modal")
    modal.style.display = "flex"
}

function closeModal() {
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}

function addTicker(event) {
    event.preventDefault()
    const ticker = event.target.ticker.value
    const bolsa = event.target.bolsa.value
    const valor = event.target.valor.value
    const ativos = event.target.ativos.value
    console.log(ticker, bolsa, valor, ativos)
    const total = valor * ativos

    const card = `
        <div class="card">
            <div class="top">
                <h2><b>${ticker}</b></h2>
            </div>

            <div class="content">
                <p>U$${valor}</p>
                <div class="bottom">
                    <p>Ativos:${ativos}</p>
                    <p>Posição: ${total}</p>
                </div>
            </div>
        </div>
`
}