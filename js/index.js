
    const formulario = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const telefonoInput = document.getElementById("telefono");
    const mailInput = document.getElementById("mail");
    const mensajeInput = document.getElementById("comentarios");

    const enviarButton = document.getElementById("enviar");
    enviarButton.addEventListener("click", function () {
        if (validarFormulario()) {
            formulario.submit();
        }

    function validarFormulario() {

        if (nombreInput.value.trim() === "" &&
        apellidoInput.value.trim() === "" &&
        telefonoInput.value.trim() === "" &&
        mailInput.value.trim() === "" &&
        mensajeInput.value.trim() === "") {
        alert("Por favor complete todos los campos del formulario antes de enviar.");
        return false;
    }


        if (apellidoInput.value.trim() === "") {
            alert("Por favor, complete el campo: Apellido.");
            return false;
        } else if (nombreInput.value.trim() === "") {
            alert("Por favor, complete el campo: Nombre.");
            return false;
        } else if (telefonoInput.value.trim() === "") {
            alert("Por favor, complete el campo: Teléfono.");
            return false;
        } else if (mailInput.value.trim() === "") {
            alert("Por favor, complete el campo: e-mail.");
            return false;
        } else if (mensajeInput.value.trim() === "") {
            alert("Por favor, complete el campo: Mensaje.");
            return false;
        } else {
            alert("Su consulta ha sido enviada, pronto nos contactaremos.");
            return true;
        }
        

        // if (nombreInput.value.trim() === "" ||
        //     apellidoInput.value.trim() === "" ||
        //     telefonoInput.value.trim() === "" ||
        //     emailInput.value.trim() === "" ||
        //     mensajeInput.value.trim() === ""
        //     ) {
        //     alert("Por favor, complete todos los campos.");
        //     return false;
        // }
        // return true;
    }
});