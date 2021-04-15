let buttonTranslate = document.getElementById('btn');
let inputTextArea = document.getElementById('humanText');
let translatedArea = document.getElementById('translatedText');
const serverURL = "https://api.funtranslations.com/translate/minion.json";


const errorHandler = (error) => {
    console.log("Error has occured" , error);
    alert('There is something wrong with server , try again later');
}


const clickHandler = () => {
    let textInput = inputTextArea.value; 
    translatedArea.innerHTML = "Translation in Progress";
    fetch(`https://api.funtranslations.com/translate/minion.json?text=${textInput}`)
        .then(response => response.json())
        .then(json => translatedArea.innerHTML = json.contents.translated)
        .catch(errorHandler);
}

if(buttonTranslate){
    buttonTranslate.addEventListener('click' , clickHandler);
}