let tbody = document.querySelector("#tbody");
let headRow = document.querySelector("#headRow");
const xml = new XMLHttpRequest();

xml.open(
  "GET",
  "https://mysafeinfo.com/api/data?list=bestnovels1&format=json&case=default"
);
xml.addEventListener("readystatechange", function () {
  if (xml.readyState === 4 && xml.status === 200) {
    displayTable();
  }
});
xml.send();

function displayTable() {
  let data = JSON.parse(xml.responseText);
  let text1 = ``;
  let first = data[0];
  for (prop in first) {
    if (prop !== "ID" && prop !== "Isbn13") {
      text1 += `<th>${prop}</th>`;
    }
  }
  text1 += `<th>Action</th>`;
  headRow.innerHTML = text1;
  let text = ``;
  for (let i = 0; i < data.length; i++) {
    text += `<tr>`;
    for (prop in data[i]) {
      if (prop !== "ID" && prop !== "Isbn13") {
        text += `<td>
      ${data[i][prop]}
    </td>`;
      }
    }
    text += `<td><a href="https://en.wikipedia.org/wiki/${data[i].Title} "target="_blank" class="btn btn-warning btn-sm">Read more</a></td>`;
    text += `</tr>`;
  }
  tbody.innerHTML = text;
}
