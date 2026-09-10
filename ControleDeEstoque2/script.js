let totalData = 0;

function addItems() {
  let itemName = document.querySelector("#itemName");
  let totalQuantity = document.querySelector("#totalQuantity");
  let itemPrice = document.querySelector("#itemPrice");
  let itemCategory = document.querySelector("#itemCategory");
  let itemCurrency = document.querySelector("#itemCurrency");

  let itemData = document.querySelector("#itemData");

  // console.log(itemName.value, totalQuantity.value, itemPrice.value, itemCategory.value)

  if (
    itemName.value === "" ||
    totalQuantity.value === "" ||
    itemPrice.value === "" ||
    itemCategory.value === ""
  ) {
    alert("Por favor, preencha todos os campos!");
  } else {
    let row = itemData.insertRow();
    let data1 = row.insertCell(0);
    let data2 = row.insertCell(1);
    let data3 = row.insertCell(2);
    let data4 = row.insertCell(3);
    let data5 = row.insertCell(4);
    let data6 = row.insertCell(5);

    totalData++;
    let deleteBtn = `<button class='btn btn-danger' id='deletar_${totalData}' onclick='deleteItem(this)'>Deletar</button>`;
    // totalData = totalData + 1;

    let moeda = itemCurrency.value;
    let locale = moeda === "BRL" ? "pt-BR" : "en-US";

    let precoFormatado = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: moeda,
    }).format(parseFloat(itemPrice.value));

    data1.innerHTML = totalData;
    data2.innerHTML = itemName.value;
    data3.innerHTML = totalQuantity.value;
    data4.innerHTML = precoFormatado;
    data5.innerHTML = itemCategory.value;
    data6.innerHTML = deleteBtn;

    ((itemName.value = ""),
      (totalQuantity.value = ""),
      (itemPrice.value = ""),
      (itemCategory.value = ""));
  }
}

function deleteItem(e) {
  //console.log(e);
  //console.log(e.parentElement);

  let rowElem = e.parentElement.parentElement;
  //console.log(rowElem)

  if (window.confirm("Tem certeza que quer deletar isso?")) {
    rowElem.style.display = "none";
  } else {
    alert("Tudo certo");
  }
}
