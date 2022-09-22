
const carritoArray = [];
let index = 0;
function agregaCarrito(itemId) {
    let carritoContenedor = document.getElementById("carrito-contenedor");
    let boole = 0;
    const guardaCarrito = () => { 
        const item = productos.find(item => item.id == itemId);
        carritoArray.forEach(object => {
            if(object.id == itemId){ 
                boole = 1;
                alert('no pusheo al array porque el elemento ya existe');
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
            alert('pusheo el elemento al array');
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
            let eliminar = document.getElementById(`carritoItem${item.id}`);
            // console.log(item.id);
            carritoContenedor.removeChild(eliminar );
            // console.log(carritoArray);
            const posicion = carritoArray.findIndex((element) => element.id == item.id);
            // console.log(posicion);
            
            carritoArray.splice(posicion, 1)
            
            // console.log(carritoArray);        

            localStorage.setItem("productos", JSON.stringify(carritoArray));
            alert(`se elimino el producto ${item.producto} del carrito`);
        })
        

    };
    


    guardaCarrito();
    localStorage.setItem("productos", JSON.stringify(carritoArray));

}