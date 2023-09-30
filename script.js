const table = document.querySelector(".sheet-body");
const rows = document.querySelector(".rows");
const columns = document.querySelector(".columns");

let tableExists = false;

const errorAlert = (text, confirmButtonText) => {
  Swal.fire({
    title: "Error!",
    text: text,
    icon: "error",
    confirmButtonText: confirmButtonText,
  });
};

const generateTable = () => {
  let rowsNumber = parseInt(rows.value),
    columnsNumber = parseInt(columns.value);

  if (!rowsNumber || rowsNumber <= 0 || !columnsNumber || columnsNumber <= 0) {
    return errorAlert(
      "Please enter valid numbers for both rows and columns!",
      "Try again!"
    );
  }

  table.innerHTML = "";
  for (let i = 0; i < rowsNumber; i++) {
    let tableRow = "";
    for (let j = 0; j < columnsNumber; j++) {
      tableRow += `<td contenteditable></td>`;
    }
    table.innerHTML += `<tr>${tableRow}</tr>`;
  }
  if (rowsNumber > 0 && columnsNumber > 0) {
    tableExists = true;
  }
};

const ExportToExcel = (type, fn, dl) => {
  if (!tableExists) {
    return errorAlert(
      "No generated table to be exported!",
      "Try generated table!"
    );
  }

  var elt = table;
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || "MyNewSheet." + (type || "xlsx"));
};
