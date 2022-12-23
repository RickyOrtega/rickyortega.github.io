let botonEncriptar = document.querySelector(".encriptar");
let botonDesencriptar = document.querySelector(".desencriptar");
let asideOriginal = document.getElementById('contenedor-aside');

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

    if (texto == "undefined" || texto == null || texto == "" || texto == undefined) {
        return;
    } else {
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
        cambiarTextoAside(cadenaEnc);
    }
}

function desencriptarTexto() {
    cadenaEnc = '';
    let i = 0;


    if (texto == "undefined" || texto == null || texto == "" || texto == undefined) {
        return;
    } else {
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
        cambiarTextoAside(cadenaEnc);
    }
}

function cambiarTextoAside(texto) {
    let imagen_aside = document.getElementById('imagen-aside');
    let texto_uno = document.getElementById('texto-uno');
    let texto_dos = document.getElementById('texto-dos');
    imagen_aside.style.display = "none";
    texto_dos.style.display = "none";
    asideOriginal.innerHTML = "<p class=\"texto\">" + texto + "</p>" + "<input type=\"button\" value=\"Copiar\" id=\"boton_copiar\" class=\"boton_copiar\">";

    let boton_copiar = document.getElementById('boton_copiar');

    const elemento = document.querySelector('.texto');

    boton_copiar.addEventListener('click', function () {
        copyToCb(elemento);
    });
    return;
}

function copyToCb(elemento){
    const textarea = document.createElement("input");
    textarea.setAttribute('value', elemento.innerText);
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Texto copiado al portapapeles.');
    return;
}