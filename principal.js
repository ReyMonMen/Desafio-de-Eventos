let contenedorProductos = document.getElementById("producto-contenedor");


for(const item of productos){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `<img src="${item.img}" alt="${item.descripcion}">
                     <p>Producto: ${item.producto}.</p>
                     <p>Precio: $ ${item.precio}.</p>
                     <p>id: ${item.id}.-</p>
                     <p>Stock: ${item.stock}.</p>
                     <button id=agregar${item.id}>Agregar</button>`;
    // console.log(contenedorProductos);                 
    contenedorProductos.append(div);
    const boton = document.getElementById(`agregar${item.id}`);
    boton.addEventListener('click', () => {
        agregaCarrito(item.id);
        alert(`se agrego el producto ${item.producto}`);
    })
    };

let carritoStorage = localStorage.getItem("productos");
console.log(carritoStorage);

if (carritoStorage){
    carritoArray = JSON.parse(carritoStorage);
    console.log(carritoArray);
}

if(carritoArray.length > 0){
    carritoArray.forEach(item => {
        const div = document.createElement("div");
        div.id = `carritoItem${item.id}`;
        div.innerHTML = `<div><p>Producto: ${item.producto}</p>
                         <p>Precio: $ ${item.precio} </p>
                         <p id="cantidad${item.id}" >Cantidad: ${item.cantidad} </p></div>
                         <button id=eliminar${item.id}>Eliminar</button>`;
    carritoContenedor.append(div);
    const boton = document.getElementById(`eliminar${item.id}`);
    boton.addEventListener('click', () => {
            let eliminar = document.getElementById(`carritoItem${item.id}`);
            carritoContenedor.removeChild(eliminar );
            const posicion = carritoArray.findIndex((element) => element.id == item.id);
            carritoArray.splice(posicion, 1)    
            localStorage.setItem('productos', JSON.stringify(carritoArray));
            alert(`se elimino el producto ${item.producto} del carrito`);
        })
    })

}




