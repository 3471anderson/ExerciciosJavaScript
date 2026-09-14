let produtos = [];
let proximoId = 1;
let editandoId = null;

function addItems() {
  const itemName = document.querySelector("#itemName");
  const totalQuantity = document.querySelector("#totalQuantity");
  const itemPrice = document.querySelector("#itemPrice");
  const itemCategory = document.querySelector("#itemCategory");
  const itemCurrency = document.querySelector("#itemCurrency");

  // console.log(itemName.value, totalQuantity.value, itemPrice.value, itemCategory.value)

  if (
    itemName.value === "" ||
    totalQuantity.value === "" ||
    itemPrice.value === "" ||
    itemCategory.value === ""
  ) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (editandoId !== null) {
    const produto = produtos.find((p) => p.id === editandoId);
    produto.nome = itemName.value;
    produto.quantidade = parseInt(totalQuantity.value);
    produto.preco = parseFloat(itemPrice.value);
    produto.moeda = itemCurrency.value;
    produto.categoria = itemCategory.value;

    cancelarEdicao();
  } else {
    produtos.push({
      id: proximoId++,
      nome: itemName.value,
      quantidade: parseInt(totalQuantity.value),
      preco: parseFloat(itemPrice.value),
      moeda: itemCurrency.value,
      categoria: itemCategory.value,
    });

    itemName.value = "";
    totalQuantity.value = "";
    itemPrice.value = "";
    itemCategory.value = "";
  }

  itemName.value = "";
  totalQuantity.value = "";
  itemPrice.value = "";
  itemCategory.value = "";

  renderizarTabela();
}

function editarItem(id) {
  const produto = produtos.find((p) => p.id === id);
  editandoId = id;
  if (!produto) return;

  document.querySelector("#itemName").value = produto.nome;
  document.querySelector("#totalQuantity").value = produto.quantidade;
  document.querySelector("#itemPrice").value = produto.preco;
  document.querySelector("#itemCurrency").value = produto.moeda;
  document.querySelector("#itemCategory").value = produto.categoria;

  document.querySelector("#itemName").focus();
  document
    .querySelector("#itemName")
    .scrollIntoView({ behavior: "smooth", block: "center" });

  const btn = document.querySelector("#btnSalvar");
  btn.textContent = "Salvar alterações";
  btn.classList.remove("btn-success");
  btn.classList.add("btn-primary");

  document.querySelector("#btnCancelar").classList.remove("d-none");

  document.querySelector("#itemName").focus();
}

function cancelarEdicao() {
  editandoId = null;

  document.querySelector("#itemName").value = "";
  document.querySelector("#totalQuantity").value = "";
  document.querySelector("#itemPrice").value = "";
  document.querySelector("#itemCategory").value = "";
  document.querySelector("#itemCurrency").value = "BRL";

  const btn = document.querySelector("#btnSalvar");
  btn.textContent = "Adicionar na loja";
  btn.classList.remove("btn-primary");
  btn.classList.add("btn-success");

  document.querySelector("#btnCancelar").classList.add("d-none");
}

function deleteItem(id) {
  if (!window.confirm("Tem certeza que quer deletar isso?")) return;
  produtos = produtos.filter((p) => p.id !== id);
  renderizarTabela();
}

function formatarPreco(valor, moeda) {
  const locale = moeda === "BRL" ? "pt-BR" : "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: moeda,
  }).format(valor);
}

function renderizarTabela() {
  const tbody = document.querySelector("#itemData");
  const termo = document
    .querySelector("#searchInput")
    .value.toLowerCase()
    .trim();
  const categoriaFiltro = document.querySelector("#searchCategory").value;

  const filtrados = produtos.filter((p) => {
    const bateTexto =
      p.nome.toLowerCase().includes(termo) ||
      p.categoria.toLowerCase().includes(termo);
    const bateCategoria = !categoriaFiltro || p.categoria === categoriaFiltro;
    return bateTexto && bateCategoria;
  });

  tbody.innerHTML = "";

  if (filtrados.length === 0) {
    const tr = tbody.insertRow();
    const td = tr.insertCell(0);
    td.colSpan = 6;
    td.className = "text-center text-muted";
    td.textContent = "Nenhum produto encontrado";
    return;
  }

  filtrados.forEach((p, index) => {
    const row = tbody.insertRow();

    if (p.id === editandoId) {
      row.classList.add("table-warning");
    }

    row.insertCell(0).textContent = index + 1;
    row.insertCell(1).innerHTML = destacar(p.nome, termo);
    row.insertCell(2).textContent = p.quantidade;
    row.insertCell(3).textContent = formatarPreco(p.preco, p.moeda);
    row.insertCell(4).textContent = p.categoria;
    const tdBtn = row.insertCell(5);
    tdBtn.innerHTML = `<button class = 'btn btn-warning btn-sm me-1' onclick='editarItem(${p.id})'>Editar</button>
     <button class ='btn btn-danger btn-sm' onclick='deleteItem(${p.id})'>Deletar</button>`;
  });
}

function destacar(texto, termo) {
  if (!termo) return texto;
  const termoEscapado = termo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${termo})`, "gi");
  return texto.replace(regex, "<mark>$1</mark>");
}

document.addEventListener("DOMContentLoaded", renderizarTabela);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && editandoId !== null) {
    cancelarEdicao();
  }
});
