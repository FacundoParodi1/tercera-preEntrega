class Producto{
    constructor(id, nombre, precio, categoria, imagen, dato){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.dato = dato;
    }
}

class BaseDeDatos{
    constructor(){
        this.productos = [];
        this.agregarRegistro(1, "Simple + Papas Fritas", 4500, "hamburguesas", "./img/burga-chessy.jpeg", "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo");
        this.agregarRegistro(2, "Doble + Papas Fritas", 4900, "hamburguesas", "./img/bugas-spici.jpeg", "Medallon x2 Cheddar Fetas x4 Bacon Cebolla Crispy Aderezo");
        this.agregarRegistro(3, "Sweet Onion Simple + Papas Fritas", 4500, "hamburguesas", "./img/burga-bbq.webp", "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Caramelizada");
        this.agregarRegistro(4, "Sweet Onion Doble + Papas Fritas", 4900, "hamburguesas", "./img/burga-comfort.jpeg", "Medallon x2 Cheddar Fetas x4 Bacon Cebolla Caramelizada");
        this.agregarRegistro(5, "Pesto Burger Doble + Papas fritas", 4500, "hamburguesas", "./img/burga-guacamole.jpg", "Medallon x 2 + Cheddar fetas x 4 + Tomate + Pesto + Alioli + Papas fritas");
        this.agregarRegistro(6, "Cheese Burger Simple + Papas Fritas", 3900, "hamburguesas", "./img/burga-doubletrouble.png", "Medallon x1 Cheddar Feta x2");
        this.agregarRegistro(7, "Cheese Burger Doble + Papas Fritas", 4500, "hamburguesas", "./img/burga-bbq.webp", "Medallon x2 Cheddar x4");
        this.agregarRegistro(8, "Cheese Burger Triple + Papas Fritas", 5400, "hamburguesas", "./img/burga-pesto.jpeg", "Medallon x3 Cheddar Fetas x6");
        this.agregarRegistro(9, "American Burger Simple + Papas Fritas", 4200, "hamburguesas", "./img/burga-sunny.png", "Medallon x 1 Cheddar Fetas x2 Tomate Lechuga Cebolla Cruda Dill Pickles Aderezo Thousand Island");
        this.agregarRegistro(10, "American Burger Doble + Papas Fritas", 4600, "hamburguesas", "./img/burga-pine.jpeg", "Medallon x2 Cheddar Fetas x4 Tomate Lechuga Cebolla Cruda Dill Pickles Aderezo Thousand Island");
        this.agregarRegistro(11, "Grilled Onion + Papas Fritas", 4500, "hamburguesas", "./img/burga-comfort.jpeg", "Medallon x2 Cheddar x4 Cebolla Grilled");
        this.agregarRegistro(12, "Royal Simple + Papas Fritas", 4100, "hamburguesas", "./img/burga-pepperjack.jpeg", "Medallon x1 Cheddar Fetas x2 Cebolla Cruda Ketchup Mostaza Pepino");
        this.agregarRegistro(13, "Royal Doble + Papas Fritas", 4500, "hamburguesas", "./img/burga-pine.jpeg", "Medallon x2 Cheddar Fetas x4 Cebolla Cruda Ketchup Mostaza Pepino");
        this.agregarRegistro(14, "California simple + Papas fritas", 4200, "hamburguesas", "./img/burga-doubletrouble.png", "Medallón, cheddar x2, lechuga, tomate, cebolla, doble california sauce y papas fritas");
        this.agregarRegistro(15, "California doble + Papas fritas", 4600, "hamburguesas", "./img/burga-bbq.webp", "Medallon x2, Cheddar x4, Lechuga, Tomate, Cebolla, Doble California Sauce y papas fritas");
        this.agregarRegistro(16, "Pepsi Regular", 800, "bebidas", "./img/pepsiRegular.png", "354ml");
        this.agregarRegistro(17, "Pepsi Black", 800, "bebidas", "./img/pepsiBlack.png", "354ml");
        this.agregarRegistro(18, "Seven up Regular", 800, "bebidas", "./img/7upRegular.png", "354ml");
        this.agregarRegistro(19, "Seven up Free", 800, "bebidas", "./img/7upFree.png", "354ml");
        this.agregarRegistro(20, "Eco de los Andes", 900, "bebidas", "./img/AguaMineral.jpeg", "Agua Mineral Sin Gas");
        this.agregarRegistro(21, "Cerveza Patagonia 24.7", 1200, "bebidas", "./img/Pata24.png", "24.7 410ml");
        this.agregarRegistro(22, "Cerveza Patagonia Citra", 1200, "bebidas", "./img/PataCiber.jpeg", "Citra  410ml");
        this.agregarRegistro(23, "Cerveza Patagonia Bohemian", 1200, "bebidas", "./img/PataBohemia.png", "Bohemian 410ml");
        this.agregarRegistro(24, "Cerveza Patagonia Amber Lager", 1200, "bebidas", "./img/PataAmbar.png","Amber Lager 410ml");
        this.agregarRegistro(25, "BBQ", 400, "salsas", "./img/salsaBBQ.jpeg", "Dip salsa BBQ");
        this.agregarRegistro(26, "Marinara", 400, "salsas", "./img/salsaMariana.jpeg", "Dip Salsa Marinara");
        this.agregarRegistro(27, "Relish Sauce", 400, "salsas", "./img/salsaRelish.jpeg", "Dip Relish Sauce");
        this.agregarRegistro(28, "Ali Oli Jalapeños", 400, "salsas", "./img/salsaALIJALA.jpeg", "Dip Salsa Ali Oli Jalapeño");
        this.agregarRegistro(29, "California Sauce", 400, "salsas", "./img/salsaCali.jpeg", "Dip California Sauce");
        this.agregarRegistro(30, "Salsa Criolla", 400, "salsas", "./img/salsaMariana.jpeg", "Dip Salsa Criolla");
    }

    agregarRegistro(id, nombre, precio, categoria, imagen, dato){
        const producto = new Producto(id, nombre, precio, categoria, imagen, dato);
        this.productos.push(producto)
    }

    traerRegistros(){
        return this.productos;
    }

    registroPorId(id){
        return this.productos.find((producto)=> producto.id === id);
    }

    registrosPorNombre(palabra){
        return this.productos.filter((producto)=> producto.nombre.toLowerCase().includes(palabra.toLowerCase()));
    }
}



class Carrito{
    constructor(){
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        this.carrito = carritoStorage || [];
        this.total = 0;
        this.cantidadProductos = 0;
        this.listar();
    }

    estaEnCarrito({id}){
        return this.carrito.find((producto)=> producto.id === id);
    }

    agregar(producto){
        const productoEnCarrito = this.estaEnCarrito(producto);
        if(!productoEnCarrito){
            this.carrito.push({...producto, cantidad:1})
        }else{
            productoEnCarrito.cantidad++;
        }

        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    quitar(id){
        const indice = this.carrito.findIndex((producto)=> producto.id === id);
        if(this.carrito[indice].cantidad > 1){
            this.carrito[indice].cantidad--;
        }else{
            this.carrito.splice(indice, 1);
        }
        this.listar();
        
    }

    listar(){
        this.total = 0;
        this.cantidadProductos = 0;
        divCarrito.innerHTML = "";
        for(const producto of this.carrito){
            divCarrito.innerHTML +=  `
            <div class="productosCarrito">
                <h2>${producto.nombre}</h2>
                <p>${producto.precio}</p>
                <p>Cantidas: ${producto.cantidad}</p>
                <button class="btnQuitar" data-id="${producto.id}"><i class="bi bi-cart-x"></i></button>
            </div>
            `;
            this.total += producto.precio * producto.cantidad;
            this.cantidadProductos += producto.cantidad;
        }

        const botonesQuitar = document.querySelectorAll(".btnQuitar");

        for(const boton of botonesQuitar){
            boton.addEventListener("click", (event)=>{
                event.preventDefault();
                const idProducto = Number(boton.dataset.id);
                this.quitar(idProducto)
            })
        }

        spanCantidadDeProductos.innerText = this.cantidadProductos;
        spanTotalProductos.innerText = this.total;
    }
}

const baseDeDatos = new BaseDeDatos();


const spanCantidadDeProductos = document.querySelector("#cantidadDeProductos");
const spanTotalProductos = document.querySelector("#totalCarrito");
const divProductos = document.querySelector("#producto");
const divCarrito = document.querySelector("#carrito");
const inputBuscar = document.querySelector("#inputBuscar");

const carrito = new Carrito();

cargaProductos(baseDeDatos.traerRegistros());

function cargaProductos(productos){
    divProductos.innerHTML = "";
    for(const producto of productos){
        divProductos.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}">
                <h3> ${producto.nombre}</h3>
                <p>${producto.dato}</p>
                <p>Precio:$ ${producto.precio}</p>
                <button class="btnAGREGAR" data-id="${producto.id}">AGREGAR AL CARRITO</button>
            </div>
        `;
    }

    const botonesAgregar = document.querySelectorAll(".btnAGREGAR");
    for(const boton of botonesAgregar){
        boton.addEventListener("click", (event)=>{
            event.preventDefault();
            const idProducto = Number(boton.dataset.id);
    
            const producto =  baseDeDatos.registroPorId(idProducto);

           carrito.agregar(producto);
        });
    }
}

inputBuscar.addEventListener("input", (event)=> {
    event.preventDefault();
    const palabra = inputBuscar.value;
    const productos = baseDeDatos.registrosPorNombre(palabra);
    cargaProductos(productos);
})
