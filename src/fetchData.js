const productos = [
    {
        id: 1,
        nombre: "Mesa ratona aurora",
        precio: 8000,
        descripcion: "Mesa ratona en madera mazisa en su color natural y base en hierro.",
        imagen:"/src/assets/img-mesaaa.jpeg",
        categoria: "Mesas",
        stock: 4
    },

    {
        id: 2,
        nombre: "Mesa ratona Boni",
        precio: 8500,
        descripcion: "Mesas ratonas nido, en su forma natural e ireegular.",
        imagen:"/src/assets/imgmratonaBoni.jpg",
        categoria: "Mesas",
        stock: 2
    },

    {
        id: 3,
        nombre: "Mesa ratona Lili",
        precio: 9500,
        descripcion:"Mesa rectangular simple, en su color nastural. Base en hierro.",
        imagen:"/src/assets/img-mesaaratona.jpg",
        categoria: "Mesas",
        stock: 4
    },

    {
        id: 4,
        nombre: "Recibidor Gaia",
        precio: 10500,
        descripcion:"Recibidor todo en madera (cipres), color natural o en color crudo.",
        imagen:"/src/assets/img-recibidor.jpg",
        categoria: "Muebles",
        stock: 4
    },

    {
        id: 5,
        nombre: "Recibidor Simple",
        precio: 7000,
        descripcion:"Recibidor super sensillo que le va a dar un toque muy canchero a tu hogar.",
        imagen:"/src/assets/img-recibidor-s.jpg",
        categoria: "Muebles",
        stock: 4

    },

    {
        id: 6,
        nombre: "Recibidor",
        precio: 5590,
        descripcion:"Recibidor sensillo con dos niveles",
        imagen:"/src/assets/img-recibidor-23.jpg",
        categoria: "Muebles",
        stock: 4
    },

    {
        id: 7,
        nombre: "Mueble Big",
        precio: 17500,
        descripcion:"Mueble grande , multiuso",
        imagen:"/src/assets/img-muebleBig.jpg",
        categoria: "Muebles",
        stock: 4
    },

    {
        id: 8,
        nombre: "Rack",
        precio: 9500,
        descripcion:"Rack en madera finsher, y puertas enmalla metalica.",
        imagen: "/src/assets/img-rack.jpg",
        categoria: "Muebles",
        stock: 4
        
    },

    {
        id: 9,
        nombre: "Mesa + bancos",
        precio: 22500,
        descripcion:"Mesa más bancos ideales tanto para interior como tambien para exteriores.",
        imagen:"/src/assets/img-bancos.jpeg",
        categoria: "Muebles",
        stock: 4
    },
];

export default function fetchdata(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 3000);
    });
}