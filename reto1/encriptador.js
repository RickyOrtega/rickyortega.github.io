let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");

let texto = '';
let cadenaEnc = '';

botonEncriptar.addEventListener("click", function (event) {
    texto = document.getElementById('texto').value;
    encriptarTexto();
});

botonDesencriptar.addEventListener("click", function (event) {
    texto = document.getElementById('texto').value;
    desencriptarTexto();
});


function encriptarTexto() {
    cadenaEnc = '';
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case "a":
                cadenaEnc += "ai";
                break;
            case "e":
                cadenaEnc += "enter";
                break;
            case "i":
                cadenaEnc += "imes";
                break;
            case "o":
                cadenaEnc += "ober";
                break;
            case "u":
                cadenaEnc += "ufat";
                break;
            default:
                cadenaEnc += texto[i];
        }
    }
    alert(cadenaEnc);
}

function desencriptarTexto() {
    cadenaEnc = '';
    let i = 0;
    do {
        if (texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u") {
            cadenaEnc += texto[i];
            i++;
        } else if (texto[i] == "a" && texto[i + 1] == "i") {
            cadenaEnc += "a";
            i += 2;
        }
        else if (texto[i] == "e" && texto[i + 1] == "n" && texto[i + 2] == "t" && texto[i + 3] == "e" && texto[i + 4] == "r") {
            cadenaEnc += "e";
            i += 5;
        }
        else if (texto[i] == "i" && texto[i + 1] == "m" && texto[i + 2] == "e" && texto[i + 3] == "s") {
            cadenaEnc += "i";
            i += 4;
        }
        else if (texto[i] == "o" && texto[i + 1] == "b" && texto[i + 2] == "e" && texto[i + 3] == "r") {
            cadenaEnc += "o";
            i += 4;
        }
        else if (texto[i] == "u" && texto[i + 1] == "f" && texto[i + 2] == "a" && texto[i + 3] == "t") {
            cadenaEnc += "u";
            i += 4;

        } else {
            cadenaEnc += texto[i];
            i += 1;
        }
    } while (i < texto.length);
    alert(cadenaEnc);
}

function cambiarTextoAside(texto){
    
}