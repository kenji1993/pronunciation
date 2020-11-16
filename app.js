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

function reset() {
    document.getElementById('input-text').value = "";
}

//sweet alert
function about() {
    Swal.fire({
        title: '<strong>About</strong>',
        icon: 'info',
        html:
          'Escribí, pegá textos o palabras en inglés y conocé su pronunciación.</br> ' +
          '<br>' +
          '<strong>Cambiá los números por letras:</strong> <br>' +
          'Ex: 16 = sixteen',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> OK!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
      })
}
