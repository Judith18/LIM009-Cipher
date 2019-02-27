//****************************FUNCION CIFRAR*******************************
window.cipher = {
	encode: (offset, string) => {
		let letterToAsciiNum;
		let resultOfEncode = "";
		//RECORRIDO EL MENSAJE DEL USUARIO
		//debugger
		for (let i = 0; i < string.length; i++) {
			letterToAsciiNum = string.charCodeAt(i);
			//Asimila mayúsculas
			if (letterToAsciiNum >= 65 && letterToAsciiNum <= 90) {
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum - 65 + parseInt(offset)) % 26 + 65);
				resultOfEncode += letterToAsciiNum;
				//Asimila minisculas
			} else if (letterToAsciiNum >= 97 && letterToAsciiNum <= 122) {
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum - 97 + parseInt(offset)) % 26 + 97);
				resultOfEncode += letterToAsciiNum;
				//Asimila el espacio " "
			} else if (letterToAsciiNum === 32) {
				letterToAsciiNum = String.fromCharCode(letterToAsciiNum);
				resultOfEncode += " ";
			} else if (letterToAsciiNum >= 33 && letterToAsciiNum <= 47){
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum -33 + parseInt(offset)) % 15 + 33);
				resultOfDecode += letterToAsciiNum;
			}
		}
		//resultOfEncode = "holi"
		return resultOfEncode;
	},
	//****************************FUNCION DESCIFRAR*******************************

	decode: (offset, string) => {
		let letterToAsciiNum;
		let resultOfDecode = "";
		let key = parseInt(offset) % 26;
		//RECORRIDO EL MENSAJE DEL USUARIO
		for (let i = 0; i < string.length; i++) {
			letterToAsciiNum = string.charCodeAt(i);
			//Asimila mayúsculas
			if (letterToAsciiNum >= 65 && letterToAsciiNum <= 90) {
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum + 65 - key) % 26 + 65);
				resultOfDecode += letterToAsciiNum;
				//Asimila minisculas
			} else if (letterToAsciiNum >= 97 && letterToAsciiNum <= 122) {
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum + 85 - key) % 26 + 97);
				resultOfDecode += letterToAsciiNum;
				//Asimila el espacio " "
			} else if (letterToAsciiNum === 32) {
				resultOfDecode += " ";
			} else if (letterToAsciiNum >= 33 && letterToAsciiNum <= 47){
				letterToAsciiNum = String.fromCharCode((letterToAsciiNum + 27 - key) % 15 + 33);
				resultOfDecode += letterToAsciiNum;
			}
		}
		return resultOfDecode;
	}
};