let contenedorProductos = document.getElementById("producto-contenedor");
let productos = [];
const traer = async () => {
const respuesta = await fetch("data.json");
productos = await respuesta.json();


for(const item of productos){
  const div = document.createElement("div");
  div.classList.add("grid-item");
  div.innerHTML = `<img src="${item.img}" alt="${item.descripcion}">
                   <p>Producto: ${item.producto}.</p>
                   <p>Precio: $ ${item.precio}.</p>
                   <p>id: ${item.id}.-</p>
                   <p>Stock: ${item.stock}.</p>
                   <button id=agregar${item.id}>Agregar</button>`;                 
  contenedorProductos.append(div);
  const boton = document.getElementById(`agregar${item.id}`);
  console.log(boton);
  boton.addEventListener('click', () => {
      agregaCarrito(item.id);
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Se agrego el producto ${item.producto}`,
          showConfirmButton: false,
          timer: 1500
        })
  })
  };
}
traer();

let carritoStorage = localStorage.getItem("productos");
// console.log(carritoStorage);

if (carritoStorage){
    carritoArray = JSON.parse(carritoStorage);
    // console.log(carritoArray);
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
    })

}