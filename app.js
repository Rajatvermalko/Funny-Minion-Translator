const translateBtn = document.querySelector("#btn-translate");
const clearBtn = document.querySelector("#btn-clear");
const input = document.querySelector(".in-textarea");
const output = document.querySelector(".out-textarea");

translateBtn.addEventListener('click',function onClick(){
    const inputText = input.value;
    const url = "https://api.funtranslations.com/translate/minion.json"+"?"+"text="+inputText;
     fetch(url)
    .then(response => response.json())
    .then(json => output.innerHTML=json.contents.translated)
    .catch(errorHandler)
});
const errorHandler = error => alert(error.message);