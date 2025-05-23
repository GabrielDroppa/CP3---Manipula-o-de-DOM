const formulario = document.getElementById("formulario")
const nome = document.getElementById("nome")
const preco = document.getElementById("preco")
const categoria = document.getElementById("categoria")
const lista = document.getElementById("lista")
const mensagemErro = document.getElementById("mensagemErro")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nomeProduto = nome.value.trim()
    const precoProduto = parseFloat(preco.value)
    const categoriaProduto = categoria.value

    if (nomeProduto === "" || isNaN(precoProduto) || precoProduto <= 0 || categoriaProduto === "") {
        mensagemErro.textContent = "Preencha todos os campos corretamente"
        return
    }

    const precoFormatado = precoProduto.toFixed(2)

    if (precoFormatado.split(".")[1].length !== 2) {
        mensagemErro.textContent = "O preço deve ter duas casas decimais"
        return
    }

    mensagemErro.textContent = ""

    const item = document.createElement("li")
    item.textContent = "Produto: " + nomeProduto + " – R$ " + precoFormatado + " – Categoria: " + categoriaProduto

    if (categoriaProduto === "Tecnologia") {
        item.style.fontWeight = "bold"
    } else if (categoriaProduto === "Alimentos") {
        item.style.backgroundColor = "yellow"
    }

    lista.appendChild(item)

    nome.value = ""
    preco.value = ""
    categoria.value = ""
})
