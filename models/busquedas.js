const axios = require('axios')

class Busquedas {

    _listado = {};

    // get listadoArr(){

    //     const listado = [];
    //     Object.keys(this._listado).forEach( key => {
    //         const tarea = this._listado[key];
    //         listado.push(tarea);
    //     });


    //     return listado;
    // }

    constructor ( desc ){
        
    }

    async ciudad( lugar = ''){

        try {
            
            //console.log('Ciudad:', lugar);
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log(resp.data);

            return [];
            
        } catch (error) {

            return [];
            
        }
        
        

        

        
    }

}




module.exports = Busquedas;  