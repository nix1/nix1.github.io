
// original code: http://stackoverflow.com/a/32895944
function noMoreLonelyWords(selector, numWords){

  // Get array of all the selected elements
  var elems = document.querySelectorAll(selector);
  var i;
  for(i = 0; i < elems.length; ++i){

    // Split the text content of each element into an array
    var textArray = elems[i].innerText.split(" ");

    // Remove the last n words and join them with a none breaking space
    var lastWords = textArray.splice(-numWords, numWords).join("&nbsp;");

    // Join it all back together and replace the existing
    // text with the new text
    var textMinusLastWords = textArray.join(" ");
    elems[i].innerHTML = textMinusLastWords + " " +  lastWords;
  }
}

// Goodbye lonely words
noMoreLonelyWords("h1, h2, p", 2);