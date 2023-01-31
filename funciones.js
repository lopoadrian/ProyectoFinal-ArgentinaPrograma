const form = document.getElementById("formulario")
const fNombre = document.getElementById("nombre")
const fApellido = document.getElementById("apellido")
const fEmpresa = document.getElementById("empresa")
const fEmail = document.getElementById("email")
const fTelefono = document.getElementById("telefono")
const fMensaje = document.getElementById("mensaje")



form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(fNombre.value)
    confirm(`Estos son tus datos: 
    Nombre: ${fNombre.value} 
    Apellido: ${fApellido.value}?
    Empresa: ${fEmpresa.value}
    Email: ${fEmail.value}
    Telefono: ${fTelefono.value}
    Mensaje: ${fMensaje.value}
    
    Si los datos son correctos, presione ACEPTAR
    `)
    alert('Su solicitud ha sido enviada. Nos contactaremos con usted a la brevedad.');
    form.reset();
}
)

