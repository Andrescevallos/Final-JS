
class cliente{
    constructor(usuarioAutorizado, edad, dni, mail, contraseñaAutorizada){
        this.usuarioAutorizado = usuarioAutorizado,
        this.edad = edad,
        this.dni = dni,
        this.mail = mail,
        this.contraseñaAutorizada = contraseñaAutorizada
    }
}

const clientes = []

if(localStorage.getItem("clientes")){
    clienteLocal = JSON.parse(localStorage.getItem("clientes"))
}

const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    const usuarioAutorizado = document.getElementById("usuarioAutorizado").value;
    const edad = document.getElementById("edad").value;
    const dni = document.getElementById("dni").value;
    const email = document.getElementById("email").value;
    const contraseñaAutorizada = document.getElementById("contraseñaAutorizada").value;

    const nuevoCliente = new cliente(usuarioAutorizado, edad, dni, email, contraseñaAutorizada)

    clientes.push(nuevoCliente)

    console.log(clientes)

    swal.fire({
        title: "Nuevo usuario registrado",
        confirmButtonText : "Ir al inicio",
    }).then((result) => {
        if(result.IsConfirmed){
            window.location.href = "index.html"
        }
    })

    localStorage.setItem("clientes", JSON.stringify(clientes))

})