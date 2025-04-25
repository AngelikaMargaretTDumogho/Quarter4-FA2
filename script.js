function generateTable() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const output = document.getElementById('output');
  output.innerHTML = "";

  if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  let table = "<table border='1'>";
  for (let i = start; i <= end; i++) {
    table += "<tr>";
    for (let j = start; j <= end; j++) {
      table += `<td>${i} x ${j} = ${i * j}</td>`;
    }
    table += "</tr>";
  }
  table += "</table>";

  output.innerHTML = table;
}
