/* 
export const data = [
 {
             Nombre: "Sergio",
             Edad: 30,
             id: 0
         },
         {
             Nombre: "Osvaldo",
             Edad: 28,
             id: 1
         }  
] */


export function loadData() {
 
    const data = []
    fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(response => response.json())
        .then(datar =>

            datar.results.map(poke => {
                let perfil = {
                    Nombre: poke.name,
                    Edad: 30,
                    id: data.length
                }
                data.push(perfil)
            })
        ); 
    return data
}

