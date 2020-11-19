const _0x55c4=['input-text','voice','lang','text','speak','pitch','value','en-US','getElementById'];(function(_0x1f0584,_0x10969e){const _0x55c43b=function(_0x22fadd){while(--_0x22fadd){_0x1f0584['push'](_0x1f0584['shift']());}};_0x55c43b(++_0x10969e);}(_0x55c4,0x155));const _0x22fa=function(_0x1f0584,_0x10969e){_0x1f0584=_0x1f0584-0x1cc;let _0x55c43b=_0x55c4[_0x1f0584];return _0x55c43b;};const _0xed9a4b=_0x22fa;let txt=new SpeechSynthesisUtterance(),voices=speechSynthesis['getVoices']();txt[_0xed9a4b(0x1ce)]=voices[0x6],txt[_0xed9a4b(0x1d2)]=0x1,txt[_0xed9a4b(0x1cf)]=_0xed9a4b(0x1d4);function pronounce(){const _0x40b480=_0xed9a4b;let _0x5e0392=document['getElementById'](_0x40b480(0x1cd))[_0x40b480(0x1d3)];(_0x5e0392['length']=!'')&&(txt[_0x40b480(0x1d0)]=_0x5e0392,speechSynthesis[_0x40b480(0x1d1)](txt));}function reset(){const _0x517f72=_0xed9a4b;document[_0x517f72(0x1cc)](_0x517f72(0x1cd))[_0x517f72(0x1d3)]='';}

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
