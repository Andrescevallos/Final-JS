


const nombreTitular = document.getElementById ("nombreTitular")
const nombre = document.getElementById("nombre")
const fechaVecMes = document.getElementById ("fechaVecMes")
const mes = document.getElementById("mes")
const fechaVecAnio = document.getElementById ("fechaVecAnio")
const anio = document.getElementById("anio")
const tarjeta = document.getElementById ("tarjeta")
const numTarj = document.getElementById("numTarj")
const codigoSeg = document.getElementById ("codigoSeg")
const cvc = document.getElementById("cvc")
const pagar = document.getElementById("pagar")

tarjeta.addEventListener("keyup", () =>{
    numTarj.innerHTML = `${tarjeta.value}`
})


nombre.addEventListener("keyup", () =>{
    nombreTitular.innerHTML = `${nombre.value.toUpperCase()}`   
})

cvc.addEventListener("keyup", () =>{
    codigoSeg.innerHTML = `${cvc.value}`
})

mes.addEventListener("keyup", () =>{
    fechaVecMes.innerHTML = `${mes.value}`
})

anio.addEventListener("keyup", () =>{
    fechaVecAnio.innerHTML = `${anio.value}`
})


pagar.addEventListener("click", () =>{
        swal.fire({
            title: "Compra realizad con exito",
            icon: "success",
    
        })
    })
    
