var bttn = document.getElementsByTagName("button")[0];
var input = document.getElementById("textbox");
var ul = document.querySelector("ul");

console.log();
function inputLength() {
  return input.value.length;
}

function createListItem() {
  var li = document.createElement("li");
  var span = document.createElement("SPAN");
  var icon = document.createElement("I");
  icon.setAttribute("class", "fas fa-minus-circle");
  span.appendChild(icon);
  li.appendChild(span);
  li.appendChild(document.createTextNode(input.value));
  li.setAttribute("class", "list-group-item");
  li.setAttribute("id", "list");
  ul.appendChild(li);
  input.value = "";
}

function afterClick() {
  if (inputLength() > 0) {
    console.log("Click");
    createListItem();
  }
}

function afterKeypress() {
  if (inputLength() > 0 && event.keyCode == 13) {
    console.log("Keypress");
    createListItem();
  }
}

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

bttn.addEventListener("click", afterClick);
input.addEventListener("keypress", afterKeypress);
