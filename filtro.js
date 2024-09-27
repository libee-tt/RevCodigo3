
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];//productos


// div de los productos
const listaProductos = document.getElementById("lista-de-productos");
// input con el id 'filtro-input'
const inputFiltro = document.getElementById("filtro-input");

// mostrar productos en la página
function displayProductos(productos) {
  // limpiamos
  listaProductos.innerHTML = '';
  
  // iteramos sobre los productos 
  productos.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute('src', producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);

    listaProductos.appendChild(d);
  });//forEahc
};//displayProductos

// mostrar todos los productos 
displayProductos(productos);

// selección del botón de filtro
const botonDeFiltro = document.getElementById("filtrar-btn");

botonDeFiltro.onclick = function() {
  const texto = inputFiltro.value.trim().toLowerCase();  // todo a minus y con trim
  console.log(`Texto ingresado: ${texto}`);

  // filtrado
  const productosFiltrados = filtrado(productos, texto);

  // mostrar filtrados
  displayProductos(productosFiltrados);
}//btnfiltro

// filtrado de productos basada en el texto
const filtrado = (productos = [], texto) => {
  if (!texto) {
    return productos;  // Si no hay texto, devolvemos todos los productos
  }//if
  return productos.filter(item => 
    item.tipo.toLowerCase().includes(texto) || 
    item.color.toLowerCase().includes(texto)
  );//return
}//filtrado
