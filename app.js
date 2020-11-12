let texto = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
texto.voice = voices[6];
texto.pitch = 0.8;
texto.lang = 'en-US';



function pronounce() {
    let it = document.getElementById('input-text').value;
    if(it.length =! '') {
        texto.text = it;
        speechSynthesis.speak(texto);
    }
}
