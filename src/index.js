document.getElementById("Pagina2").style.display = "none";

function validarNombre() {
    const name2= document.getElementById("txt").value;
    console.log(name2);
    document.getElementById("nombreUsuario").innerHTML = name2;
    document.getElementById("Pagina1").style.display = "none";
    document.getElementById("Pagina2").style.display = "block";
}


let string = document.getElementById('string');
let offset = document.getElementById('offset');
let cifrarButton = document.getElementById('encode-button');
let descifrarButton = document.getElementById('decode-button');
let newResultCipher;
//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener("click", ()  => {
	string = document.getElementById('string').value;
    offset = parseInt(document.getElementById('offset')).value;
    newResultCipher= cipher.encode(offset, string);
    document.getElementById("string1").value = newResultCipher;
    });
    