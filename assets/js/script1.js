let form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();
    let resultado = validarForm();
    if (resultado == true) {
        exito();
    }

})

function validarForm() {
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let textarea = document.getElementById('textarea').value;

    let formValido = true;
    if (nombre == "" || textValid(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido";
        formValido = false;
    }

    if (asunto == "" || mailValid(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido";
        formValido = false;
    }

    if (textarea == "" || textareaValid(textarea) == false) {
        document.querySelector(".errorTextarea").innerHTML = "El mensaje es requerido";
        formValido = false;
    }
    return formValido;
}

function textValid(text) {
    let textExpression = /^[a-zA-Z Ñ-ñ]+$/g;
    let result = textExpression.test(text);
    return result;
}

function mailValid(asunto) {
    let asuntoExpression = /^[a-zA-Z Ñ-ñ 0-9]+$/g;
    let result = asuntoExpression.test(asunto);
    return result;
}

function textareaValid(textarea) {
    let textareaExpression = /^[a-zA-Z Ñ-ñ 0-9]+$/g;
    let result = textareaExpression.test(textarea);
    return result;
}

function limpiarErrores() {
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorTextarea").innerHTML = "";
}

function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario enviado con éxito"
}