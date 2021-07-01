export function exportDataToCSV(data, name) {
  const csvRow = [];

  //get headers
  const headers = Object.keys(data[0]);
  csvRow.push(headers.join(","));

  //loop rows
  for (const row of data) {
    let values = headers.map((header) => {
      return row[header];
    });
    csvRow.push(values.join(","));
  }
  let csvString = csvRow.join("%0A");

  //download the file
  let ref = document.createElement("a");
  ref.href = "data:attachment/csv," + csvString;
  ref.target = "_blank";
  ref.download = `${name}.csv`;
  document.body.appendChild(ref);
  ref.click();
  document.body.removeChild(ref);
}


// How to use .?
let data = [{"nama_obat":"ABOCATH 20","jumlah_obat":"100","total_antrian":"1"},{"nama_obat":"VITAMIN C 250MG","jumlah_obat":"63","total_antrian":"2"}]
exportDataToCSV(data,cetak)
