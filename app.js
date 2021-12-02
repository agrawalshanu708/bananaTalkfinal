const btnTranslate = document.querySelector("#btn-translate");
const txtinput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("error occurred", error);
  alert("there is something wrong in the server please tyr after some time");const
function clickHandler() {
  let textInput = txtinput.value;
  console.log(textInput);
  fetch(getTranslationURL(textInput))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);