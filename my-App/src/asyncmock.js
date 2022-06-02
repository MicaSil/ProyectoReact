const productos = [
    {id: '1', name: 'Remera Malu', precio: '690', category: 'Damas', img: 'https://f.fcdn.app/imgs/76ad67/rusty.uy/rustuy/f782/webp/catalogo/MALU-GO-1/600x800/t-shirt-malu-rusty-gris-oscuro.jpg',stock: '10', descripcion: 'T-SHIRT MALU RUSTY - Gris Oscuro'},
    {id:'2', name:'Remera Lauri', precio: '790', category:'Damas', img: 'https://f.fcdn.app/imgs/417637/rusty.uy/rustuy/cdb6/webp/catalogo/LAURI-BL-1/600x800/t-shirt-lauri-rusty-blanco.jpg', stock: '10', descripcion:'T-SHIRT LAURI RUSTY - Blanco'},
    {id:'3', name:'Remera Filtro', precio: '990', category:'Damas', img: 'https://f.fcdn.app/imgs/268d20/rusty.uy/rustuy/4624/webp/catalogo/BUZIA-AZ-1/600x800/t-shirt-filtro-uv-buzia-rusty-azul.jpg', stock: '10', descripcion:'T-SHIRT FILTRO UV RUSTY - Azul'},
]

export const getFecht = () =>{

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    
    })
}

export const getFechtById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
}


export  const getFechtByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId ))
        }, 2000)
    })
}