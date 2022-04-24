@ -1,16 +1,14 @@
var translateBtn=document.querySelector("#btn-translate");
var input=document.querySelector(".in-textarea");
var output=document.querySelector(".out-textarea");
const translateBtn = document.querySelector("#btn-translate");
const clearBtn = document.querySelector("#btn-clear");
const input = document.querySelector(".in-textarea");
const output = document.querySelector(".out-textarea");

translateBtn.addEventListener('click',function onClick(){
    var inputText=input.value;
    var url="https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inputText;
    const inputText = input.value;
    const url = "https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inputText;
     fetch(url)
    .then(response => response.json())
    .then(json => output.innerText=json.contents.translated)
    .then(json => output.innerHTML=json.contents.translated)
    .catch(errorHandler)
});
function errorHandler(error)
{
    alert("Some error occured .Please try again later");
}
const errorHandler = error => alert(error.message);