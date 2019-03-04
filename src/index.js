
window.onload=()=>{
document.getElementById("Pagina2").style.display = "none";
}

let validarNombre=document.getElementById("button");
validarNombre.addEventListener("click",()=>{
let name2= document.getElementById("txt").value;
document.getElementById("nombreUsuario").innerHTML = name2;
document.getElementById("Pagina1").style.display = "none";
document.getElementById("Pagina2").style.display = "block";
});

let string1= document.getElementById("string1")
let copy=document.getElementById("copy")
copy.addEventListener("click",()=>{
string1.select();
document.execCommand("copy");
});


let clear=document.getElementById("clear");
clear.addEventListener("click",()=>{
    document.getElementById("string").value="";
    document.getElementById("string1").value="";
    document.getElementById("offset").value="";
 
});

let string;
let offset;
let cifrarButton = document.getElementById('encode-button');
let descifrarButton = document.getElementById('decode-button');
let newResultCipher;
let newResultDecipher
//**********************EVENTO DEL BOTON CIFRAR**************************
cifrarButton.addEventListener("click", ()  => {
	string = document.getElementById('string').value;
    offset = parseInt(document.getElementById('offset').value);
    newResultCipher= cipher.encode(offset, string);
    document.getElementById("string1").value = newResultCipher;
    });
    
descifrarButton.addEventListener("click", ()  => {
        string = document.getElementById('string').value;
        offset = parseInt(document.getElementById('offset').value);
        newResultDecipher= cipher.decode(offset, string);
        document.getElementById("string1").value = newResultDecipher;
        });