var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert("there is something wrong in the server please tyr after some time");
}

function clickHandler() {
  var textInput = txtinput.value;
  console.log(textInput);
  fetch(getTranslationURL(textInput))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);