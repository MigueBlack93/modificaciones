let solamenteCaracteres = "¡Caracter no admitido! Solamente letras minúsculas y sin acentos.";
let vocales = ["a", "e", "i", "o", "u"];
let reemplazo = ["ai", "enter", "imes", "ober", "ufat"];

let recargar = document.getElementById('logo-alura');
recargar.addEventListener('click', function(){
    location.reload(true);
});

let caracter = document.getElementById('main-ingreso-textarea');
caracter.addEventListener('keydown', function(event) {
    let carac = event.key;
    const caracPermitidos = /^[a-záéíóúüñ]$/;
    const teclasPermitidas = [
        'Enter', 'Shift', 'Backspace', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Tab', 'Control', 'Alt', 'Delete'
    ];

    if(!caracPermitidos.test(carac) && !teclasPermitidas.includes(carac)){
        alert(solamenteCaracteres);
        event.preventDefault();
        return 0;
    }
    else{
        return 0;
    }
});

let mostrarImagen = document.getElementById('main-ingreso-textarea');
mostrarImagen.addEventListener('input', function() {
    if (mostrarImagen.value.trim() === "") {
        mostrarMuneco();
    } else {
        clearMuneco();
    }
});

let enter = document.getElementById('main-ingreso-textarea');
enter.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        encriptar();
    }
});

function mostrarMuneco(){
    document.getElementById('main-devolucion-muneco').removeAttribute('hidden');
    document.getElementById('main-button-encriptar').setAttribute('disabled', '');
    document.getElementById('main-button-desencriptar').setAttribute('disabled', '');
    document.getElementById('main-devolucion-encripto').setAttribute('hidden', '');
}

function clearMuneco(){
    document.getElementById('main-devolucion-muneco').setAttribute('hidden', '');
    document.getElementById('main-button-encriptar').removeAttribute('disabled');
    document.getElementById('main-button-desencriptar').removeAttribute('disabled');
}

function imprimir(texto){
    clearMuneco();
    document.getElementById('main-devolucion-encripto').removeAttribute('hidden');

    let print = document.getElementById('main-devolucion-textarea');

    print.innerHTML = texto;
}

function copiar(){
    let copiarTexto = document.getElementById('main-devolucion-textarea').value;

    navigator.clipboard.writeText(copiarTexto);
}

function encripto(vocal){
    for( p=0 ; p<vocales.length ; p++){
        if (vocal === vocales[p]){
            return reemplazo[p];
        }
        else if( p>3 ){
            return vocal;
        }
    }
}

function desencripto(buscar, reemplazar){
    let texto = document.getElementById('main-ingreso-textarea').value;

    for( i=0 ; i < vocales.length ; i++){
        texto = texto.replaceAll(buscar[i], reemplazar[i]);
    }

    return texto;
}

function encriptar(){
    let aEncriptar = document.getElementById("main-ingreso-textarea").value.split("",undefined);
    let texto_Encriptado = "";

    for ( i = 0 ; i < aEncriptar.length ; i++ ){ 
        texto_Encriptado = texto_Encriptado + encripto(aEncriptar[i]);
    }

    imprimir(texto_Encriptado);

}

function desencriptar(){
    let desencriptado = desencripto(reemplazo, vocales);

    console.log(desencriptado);
    imprimir(desencriptado);
}