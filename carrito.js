
let carritoArray = [];
let index = 0;
let carritoContenedor = document.getElementById("carrito-contenedor");
function agregaCarrito(itemId) {
    let boole = 0;
    const guardaCarrito = () => { 
        const item = productos.find(item => item.id == itemId);
        carritoArray.forEach(object => {
            if(object.id == itemId){ 
                boole = 1;
                // alert('no pusheo al array porque el elemento ya existe');
                carritoArray.forEach(object =>{
                    if (object.id === itemId){
                        let aux1 = parseInt(object.cantidad);
                        aux1++;
                        object.cantidad = aux1;
                        console.log(aux1);
                        let aux2 = document.getElementById(`cantidad${itemId}`);
                        aux2.innerHTML = `<p id="cantidad${itemId}" >Cantidad: ${aux1} </p>`;  

                    }
                   

                });
                
            }   
        });
        if(boole == 0){
            carritoArray.push(item);
            // alert('pusheo el elemento al array');
            const div = document.createElement("div");
            div.id = `carritoItem${item.id}`;
            div.innerHTML = `<div><p>Producto: ${item.producto}</p>
                             <p>Precio: $ ${item.precio} </p>
                             <p id="cantidad${itemId}" >Cantidad: ${item.cantidad} </p></div>
                             <button id=eliminar${item.id}>Eliminar</button>`;
     
    
        carritoContenedor.append(div);    
        }
        

        const boton = document.getElementById(`eliminar${item.id}`);
        boton.addEventListener('click', () => {
            Swal.fire({
                title: 'Eliminar',
                text: `¿Esta seguro de eliminar ${item.producto} del carrito?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
                timer: 5000
              }).then((result) => {
                if (result.isConfirmed) {
                    let eliminar = document.getElementById(`carritoItem${item.id}`);
                    carritoContenedor.removeChild(eliminar );
                    const posicion = carritoArray.findIndex((element) => element.id == item.id); 
                    carritoArray.splice(posicion, 1)      
                    localStorage.setItem('productos', JSON.stringify(carritoArray));
                  Swal.fire({
                    title: 'Eliminado',
                    text: `${item.producto} se elimino del carrito`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
                }
              })
            
        })
        

    };
    


    guardaCarrito();
    localStorage.setItem('productos', JSON.stringify(carritoArray));

}