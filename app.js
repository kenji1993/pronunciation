let txt = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
txt.voice = voices[6];
txt.pitch = 1;
txt.lang = 'en-US';



function pronounce() {
    let it = document.getElementById('input-text').value;
    if(it.length =! '') {
        txt.text = it;
        speechSynthesis.speak(txt);
    }
}
