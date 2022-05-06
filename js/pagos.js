const contenedorPagos = document.getElementById('pagos');
let pagosStorage = [];

document.addEventListener("DOMContentLoaded", () => {



    if (localStorage.getItem("carrito")) {
        pagosStorage = JSON.parse(localStorage.getItem("carrito"))
        pagosStorage.map((producto) => {
            let div = document.createElement('div');
            div.classList.add('productoEnCompra');
            div.innerHTML = ` <div class="container">
            <div class="row">
             
            
            <div class="col-4"> <p>${producto.nombre}</p></div>
            <div class="col-4"><p>${"$"+ producto.precio}</p></div>
            <div class="col-4"> <p id=cantidad${producto.id}>${producto.cantidad}</p></div>
            <hr>
           
           
           
          </div>
        </div>   
                      `
            contenedorPagos.appendChild(div);

            precioTotal.innerText = pagosStorage.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);






        })
    }
})



const clearLocal = document.getElementById('clear')
clearLocal.addEventListener('click', () => {
    Swal.fire({
        title: 'Esta seguro que desea vaciar el Carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
            localStorage.clear();
            
            location.href = "index.html";

          Swal.fire(
            'Carrito Vacio',
            
            
          )
        }
      })
       

    }


)
const printCarrito = document.getElementById('print')
printCarrito.addEventListener('click', () => {
        print()

    }


)
