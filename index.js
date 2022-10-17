const { leerInput,
        inquirerMenu,
        pausa
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {

    let opt = '';
    const busquedas = new Busquedas();
  
    do{
  
      console.clear();
  
      // imprimir el menu
      opt = await inquirerMenu();
      
      switch (opt) {
        case '1':

            // Mostrar mensaje
            const lugar = await leerInput('Ciudad: ');
            await busquedas.ciudad( lugar );

            // Buscar los lugares

            // Seleccionar el lugar

            // Clima

            // Mostrar resultados
            console.log('\n Informacion de la ciudad \n'.green);
            console.log('Ciudad: ', );
            console.log('Lat: ', );
            console.log('Long: ', );
            console.log('Temperatura: ', );
            console.log('Minima: ', );
            console.log('Maxima: ', );

          break;
        
        case '2':
                    
          break;
      }
  
        if ( opt !== '0') await pausa();
  
        console.clear();
  
    } while ( opt !== '0')
}
  
  
  main();