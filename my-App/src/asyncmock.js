const productos = [

    {id:'1', name: 'Remera Malu', precio: '690', category: 'Damas', img: 'https://f.fcdn.app/imgs/76ad67/rusty.uy/rustuy/f782/webp/catalogo/MALU-GO-1/600x800/t-shirt-malu-rusty-gris-oscuro.jpg',stock: '10', descripcion: 'T-SHIRT MALU RUSTY - Gris Oscuro'},
    {id:'2', name:'Remera Lauri', precio: '790', category:'Damas', img: 'https://f.fcdn.app/imgs/417637/rusty.uy/rustuy/cdb6/webp/catalogo/LAURI-BL-1/600x800/t-shirt-lauri-rusty-blanco.jpg', stock: '10', descripcion:'T-SHIRT LAURI RUSTY - Blanco'},
    {id:'3', name:'Remera Filtro', precio: '990', category:'Damas', img: 'https://f.fcdn.app/imgs/268d20/rusty.uy/rustuy/4624/webp/catalogo/BUZIA-AZ-1/600x800/t-shirt-filtro-uv-buzia-rusty-azul.jpg', stock: '10', descripcion:'T-SHIRT FILTRO UV RUSTY - Azul'},
    {id:'4', name:'Remera Jaden', precio:'632',category:'Hombres', img:'https://f.fcdn.app/imgs/93c76c/rusty.uy/rustuy/be62/webp/catalogo/JADEN-GS-1/600x800/t-shirt-jaden-rusty-gris.jpg', stock:'10', descripcion:'T-SHIRT JADEN RUSTY - Gris'},
    {id:'5', name: 'Remera Silo', precio:'443', category:'Hombres', img:'https://f.fcdn.app/imgs/081e8c/rusty.uy/rustuy/48f6/webp/catalogo/SILO-NE-1/600x800/remera-silo-rusty-negro.jpg', stock:'10', descripcion:'REMERA SILO RUSTY - Negro'},
    {id:'6', name:'Remera Souze', precio:'590', category:'Hombres', img:'https://f.fcdn.app/imgs/15a414/rusty.uy/rustuy/6cd9/webp/catalogo/SOUZE-AZ-1/600x800/t-shirt-souze-rusty-azul.jpg', stock:'10', descripcion: 'T-SHIRT SOUZE RUSTY - Azul' },
    {id:'7', name:'Remera Royal', precio:'392', category:'Niños', img:'https://f.fcdn.app/imgs/ce9748/rusty.uy/rustuy/6820/webp/catalogo/ROYALGIRLS-CR-1/600x800/t-shirt-royal-girls-rusty-crudo.jpg', stock:'10', descripcion:'T-SHIRT ROYAL GIRLS RUSTY - Crudo'},
    {id:'8', name:'Remera Brume', precio:'490', category:'Niños', img:'https://f.fcdn.app/imgs/92e360/rusty.uy/rustuy/1ef0/webp/catalogo/BRUMEBOY-MOST-1/600x800/t-shirt-brume-boy-rusty-mostaza.jpg', stock:'10', descripcion:'T-SHIRT BRUME BOY RUSTY - Mostaza'},
    {id:'9', name:'Remera Filtro UV', precio:'490', category:'Niños', img:'https://f.fcdn.app/imgs/b12e72/rusty.uy/rustuy/0d08/webp/catalogo/BUZIOSBOY-NE-1/600x800/t-shirt-filtro-uv-buziosboy-rusty-negro.jpg', stock:'10', descripcion:'T-SHIRT FILTRO UV BUZIOSBOY RUSTY - Negro'},
    
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