let contenedorProductos = document.getElementById("producto-contenedor");


for(const item of productos){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    div.innerHTML = `<img src="${item.img}" alt="${item.descripcion}">
                     <p>Producto: ${item.producto}.</p>
                     <p>Precio: $ ${item.precio}.</p>
                     <p>id: ${item.id}.-</p>
                     <p>Stock: ${item.stock}.</p>
                     <button id=boton${item.id}>Comprar</button>`;
    // console.log(contenedorProductos);                 
    contenedorProductos.append(div);
    const boton = document.getElementById(`boton${item.id}`);
    boton.addEventListener('click', () => {
        agregaCarrito(item.id);
        alert(`se agrego el producto ${item.producto}`);
    })

   
    };


