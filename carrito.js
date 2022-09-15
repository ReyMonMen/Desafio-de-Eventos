
const carritoArray = [];
function agregaCarrito(itemId) {
    let carritoContenedor = document.getElementById("carrito-contenedor");
    let boole = 0;
    const guardaCarrito = () => { 
        const item = productos.find(item => item.id == itemId);
        carritoArray.forEach(object => {
            if(object.id == itemId){ 
                boole = 1;
                alert('no pusheo al array porque el elemento ya existe');
            }   
        });
        if(boole == 0){
            carritoArray.push(item);
            alert('[posheo el elemento al array');
            
        }
        console.log(carritoArray);
        const div = document.createElement("div");
        div.classList.add("carritoItem");
        div.innerHTML = `<div><p>Producto: ${item.producto}</p>
                         <p>Precio: $ ${item.precio} </p>
                         <p>Cantidad: ${item.cantidad+1} </p></div>`;
     
    
        carritoContenedor.appendChild(div);
        

    };

    guardaCarrito();

}