var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslated(inputText){
     return serverURL + "?" + "text="+ inputText;
}

function errorHandler(error){
     console.log("error occured", error);     
}

function clickHandler() {
     var inputText = txtInput.value;

     fetc
};	

btnTranslate.addEventListener("click", clickHandler)