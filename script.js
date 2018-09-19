
/* function to show attributes */
function showAttributes() {
  var Anchor = document.querySelector("#google");
  var div_show = document.querySelector("#attrs");
  // create a new paragraph element
  var paragraph = document.createElement("p");
  paragraph.id = "para";
  // get all the attributes and loop through them
  if (Anchor.hasAttributes()) {
    var attrs = Anchor.attributes;
    var output = "";
    for (var i = attrs.length - 1; i >= 0; i--) {
      output += " " + attrs[i].name + ": " + attrs[i].value;
    }
    console.log("output: " + output);
    //set the inner text of the paragraph 
    paragraph.innerText = output;
  } else {
    console.log("output: " + output);
    paragraph.innerText = output;
  }
  // append the paragraph to the div
  div_show.appendChild(paragraph);
}
/* function to hide attributes */
function HideAttributes() {
  var div_show = document.querySelector("#attrs");
  var paragraph = document.querySelector("#para");
  // removing the child
  if (paragraph != null)
    div_show.removeChild(paragraph);
}

// run the function only when window loads
window.onload = function () {
  // adding event listeners
  var buttons = document.getElementsByTagName('button');
  buttons[0].addEventListener('click', showAttributes);
  buttons[1].addEventListener('click', HideAttributes)
}