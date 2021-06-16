// varijable
var itemInput = $(".item");
var addButton = $(".add-item");
var itemRow = "";

function addItem() {
  var newItem = itemInput.val();
  console.log(newItem);

  // Dodavanje namirnica u tabelu
  if (newItem !== "") {
    itemRow = "<tr>";
    itemRow += "<td>" + newItem + "</td>";
    itemRow += "<td><button class='delete'>Delete</button></td>";
    itemRow += "</tr>";
    $(".item-list tbody").append(itemRow);

    // resetujemo input polje
    itemInput.val("").focus();
  } else {
    alert("Type in your ingredient!");
  }
}

addButton.on("click", addItem);
itemInput.keypress(function (event) {
  if (event.which === 13) addItem();
});

// brisanje iz liste
// moramo da selektujemo element koji postoji u html, jer se dugme sa klasom .delete pravi u funkciji i vidljivo je u njoj
$("tbody").on("click", ".delete", function () {
  $(this).closest("tr").remove();
  itemInput.focus();
});
